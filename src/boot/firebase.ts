// src/boot/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCio4qSB-jVAM-_SBQViFMUXCb775E7fWM",
  authDomain: "yama-code.firebaseapp.com",
  databaseURL: "https://yama-code-default-rtdb.firebaseio.com",
  projectId: "yama-code",
  storageBucket: "yama-code.appspot.com",
  messagingSenderId: "927028308896",
  appId: "1:927028308896:web:49f24ec4dac394218f12c5",
  measurementId: "G-SB9JP0L1R4"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp );
export { auth, analytics, firebaseApp };
