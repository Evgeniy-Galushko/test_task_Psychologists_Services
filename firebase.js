import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// console.log(process.env);

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_APP_ID,
//   authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE_URL,
//   projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDI3r7J_fIPiX8knvZsXcoq2TJ0XxWWltU",
  authDomain: "psychologists-services-1c5d3.firebaseapp.com",
  databaseURL:
    "https://psychologists-services-1c5d3-default-rtdb.firebaseio.com",
  projectId: "psychologists-services-1c5d3",
  storageBucket: "psychologists-services-1c5d3.firebasestorage.app",
  messagingSenderId: "455949985564",
  appId: "1:455949985564:web:d31b1d89f28883751c3cd9",
  measurementId: "G-L833X56ZEQ",
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
const analytics = getAnalytics(app);
