// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChY4QzhcnEpvbh7XR6v5DV4H-gHVHM9TQ",
  authDomain: "crudastudio-17781.firebaseapp.com",
  projectId: "crudastudio-17781",
  storageBucket: "crudastudio-17781.appspot.com",
  messagingSenderId: "633396558334",
  appId: "1:633396558334:web:73726b88841c07f0ace8af",
  measurementId: "G-SQV4GX81HY",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
