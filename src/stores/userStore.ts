import { reactive, watch } from 'vue';
import { auth } from 'src/boot/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from 'firebase/auth';

// グローバルな状態を定義
export const userStore = reactive({
  user: null as User | null,
  isLogin: false,
});

// Firebaseの認証状態を監視
onAuthStateChanged(auth, (user) => {
  userStore.user = user;
});

// オプショナル: userStoreの変更を監視する場合
watch(() => userStore.user, (user) => {
  // ここでユーザー状態の変更に応じた処理を行う
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // ユーザーがログインしている場合
      console.log('Login済み');
      userStore.user = user;
      userStore.isLogin = true;
      // ここでVuexストアのミューテーションをコミットするなどの処理を行う
      // store.commit('auth/setUser', user);
    } else {
      // ユーザーがログインしていない場合
      console.log('Logout');
      userStore.user = null;
      userStore.isLogin = false;
      // ここでVuexストアのミューテーションをコミットするなどの処理を行う
      // store.commit('auth/removeUser');
    }
  });
});
