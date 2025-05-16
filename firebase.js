import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getDatabase,
  ref,
  get,
  child,
  push,
  update,
  orderByChild,
  onValue,
} from "firebase/database";
import { setDoctors } from "./src/redux/slices/userSlice.js";

import "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export const dbRef = ref(db);

onValue(dbRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  // updateStarCount(postElement, data);
});

// export default function writeNewPost(uid, favorites) {
//   get(dbRef).then((doctors) => {
//     if (doctors.val()) {
//       const index = doctors.val().findIndex((doctor) => doctor.id === uid);
//       if (index === -1) return;
//       const oneDoctor = doctors.val().filter((doctor) => doctor.id === uid);
//       const newDoc = [{ ...oneDoctor[0], favorites: favorites }];
//       const updates = {};
//       updates[`/${index}/`] = { ...newDoc[0] };
//       // updates["/0/"] = { ...newDoc[0] };
//       return update(ref(db), updates);
//     }
//   });
// }

// console.log(writeNewPost("315ef093-8737-43e6-88fa-aa82802e8962", true));
