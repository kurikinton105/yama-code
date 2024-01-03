<script setup lang='ts'>
import { ref } from 'vue';
import { auth } from 'src/boot/firebase';
import { DEBUG } from 'src/script/utils/DEBUG';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

// Assuming the userStore is already imported and set up
import { userStore } from 'src/stores/userStore';

const error = ref<string | null>(null);

// New logout function
const signOutUser = async () => {
  try {
    await signOut(auth);
    userStore.user = null; // Reset user state
    console.log('User logged out successfully');
    // Perform other cleanup actions if needed
    userStore.isLogin = false;
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message;
    }
  }
};

</script>

<template>
  <div>
    <q-btn rounded v-if="userStore.isLogin" @click="signOutUser" class="google-logout-button">
      <span>ログアウト</span>
    </q-btn>
  </div>
</template>
