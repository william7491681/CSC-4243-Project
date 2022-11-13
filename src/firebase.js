// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Bdz9B7zJUXV7YcxVCaxenG-BjVEs0vg",
  authDomain: "helpquest-68166.firebaseapp.com",
  projectId: "helpquest-68166",
  storageBucket: "helpquest-68166.appspot.com",
  messagingSenderId: "431810935196",
  appId: "1:431810935196:web:11290818290f853c577059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);