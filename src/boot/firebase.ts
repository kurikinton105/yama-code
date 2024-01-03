// src/boot/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCio4qSB-jVAM-_SBQViFMUXCb775E7fWM",
//   authDomain: "yama-code.firebaseapp.com",
//   databaseURL: "https://yama-code-default-rtdb.firebaseio.com",
//   projectId: "yama-code",
//   storageBucket: "yama-code.appspot.com",
//   messagingSenderId: "927028308896",
//   appId: "1:927028308896:web:8fb1e851012eed6d8f12c5",
//   measurementId: "G-7R9BG11T6L"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp );
export { auth, analytics, firebaseApp };
