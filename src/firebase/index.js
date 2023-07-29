// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSQ7207nWl1gjS9j43sM_xGRTTlaBliHg",
  authDomain: "youthpath-14dd5.firebaseapp.com",
  projectId: "youthpath-14dd5",
  storageBucket: "youthpath-14dd5.appspot.com",
  messagingSenderId: "221748414342",
  appId: "1:221748414342:web:7f381557939ad26fcf4e07",
  measurementId: "G-2HTMVE99ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export {db}