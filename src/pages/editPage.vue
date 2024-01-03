<template>
  <q-page>
    <div style="text-align: center">
      <h4>PageEdit</h4>
      <LoginButton v-if="!userStore.isLogin" />
      <LogoutButton v-if="userStore.isLogin" />
      <hr />
      <div v-if="userStore.isLogin">
        ステータスの確認
        {{ userRole }}<br/>
        権限：{{ userStore.user.uid }}
        <br />
        <p v-if="errorMessage !== ''" style="color:red">{{ errorMessage }}</p>
        <LinkEditTable v-if="userStore.isLogin && userRole === 'admin'" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import LoginButton from 'src/components/molecules/button/GoogleLoginButton.vue';
import LogoutButton from 'src/components/molecules/button/GoogleLogoutButton.vue';
import LinkEditTable from 'src/components/organisms/LinkEditTable.vue';
import { userStore } from 'src/stores/userStore';
import { ref, watch } from 'vue';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseApp } from 'src/boot/firebase';

const userRole = ref('');
const errorMessage = ref('')
watch(
  () => userStore.isLogin,
  async newVal => {
    if (newVal) {
      // ユーザーがログインした時の処理
      console.log('ユーザーがログインしました');
      console.log(userStore.user.uid)
      const db = getFirestore(firebaseApp);

      try {
        const userDocRef = doc(db, 'users', userStore.user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          userRole.value = userDoc.data().role || 'error';
          errorMessage.value = '';
        } else {
          console.error('User not found');
          userRole.value = 'error';
          errorMessage.value = 'ユーザーが見つかりませんでした';
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        userRole.value = 'error';
        errorMessage.value = 'ユーザー情報の取得に失敗しました';
      }
    } else {
      // ユーザーがログアウトした時の処理
      console.log('ユーザーがログアウトしました');
      userRole.value = '';
    }
  }
);
</script>
