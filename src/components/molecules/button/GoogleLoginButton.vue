<script setup lang='ts'>
import { ref } from 'vue';
import { auth } from 'src/boot/firebase';
import { DEBUG } from 'src/script/utils/DEBUG';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';

const user = ref<JSON | null>(null);
const error = ref<string | null>(null);

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const loginResult = await signInWithPopup(auth, provider);
    user.value = loginResult.user.toJSON() as JSON;
    const userID = loginResult.user.uid;
    const mailAddress = loginResult.user.email;
    const displayName = loginResult.user.displayName;
    DEBUG('Google Loginの成功', 'DEBUG');

    // // ログイン成功時の処理
    // axios
    //   .post(
    //     // import.meta.env.VITE_API_ENDPOINT + '/updateUser',
    //     {
    //       userID: userID,
    //       displayName: displayName,
    //       mailAddress: mailAddress,
    //     }
    //   )
    //   .then((response) => {
    //     console.log('Response:', response.data);
    //     DEBUG('Functionsへのポスト成功', 'DEBUG');
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     DEBUG('Functionsへのポスト失敗', 'DEBUG');
    //   });

  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message;
    }
  }
};
</script>

<template>
  <q-btn rounded @click='signInWithGoogle' class='google-login-button'>
    <q-avatar size="xs" rounded >
      <img src="~/assets/google_logo.png" >
    </q-avatar>
    <div style="padding-right:10px;" />
    <span>Googleでログイン</span>
  </q-btn>
  <br/>
  <div v-if='error'>{{ error }}</div>
</template>

