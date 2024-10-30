// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCByEDLfFAA55krvcc2lbwsJS1lpL-h4DA",
    authDomain: "batata-a1aec.firebaseapp.com",
    projectId: "batata-a1aec",
    storageBucket: "batata-a1aec.firebasestorage.app",
    messagingSenderId: "240552226122",
    appId: "1:240552226122:web:f9c90d861671b66215e5b3",
    measurementId: "G-Q1Q726636P"
  };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);