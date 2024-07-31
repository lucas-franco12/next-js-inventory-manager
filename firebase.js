// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCATTwu9gkjJd9DABwgB7H7mMEYkLFsk5c",
  authDomain: "inventory-manager-d7a1d.firebaseapp.com",
  projectId: "inventory-manager-d7a1d",
  storageBucket: "inventory-manager-d7a1d.appspot.com",
  messagingSenderId: "177286100354",
  appId: "1:177286100354:web:381575761542ac4049cb9b",
  measurementId: "G-MPJWCK1B5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}