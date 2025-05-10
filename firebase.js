import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// console.log(process.env.REACT);

// const apiKey = process.env.REACT_APP_FIREBASE_APP_ID;
// const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
// const databaseURL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
// const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
// const storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
// const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
// const appId = process.env.REACT_APP_FIREBASE_APP_ID;
// const measurementId = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APP_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
