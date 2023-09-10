// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCfVSfMu10dEWkP_DIkpm73bmQcNramstc",
  authDomain: "nepchat-4102e.firebaseapp.com",
  projectId: "nepchat-4102e",
  storageBucket: "nepchat-4102e.appspot.com",
  messagingSenderId: "154802142628",
  appId: "1:154802142628:web:42cc53ec67cedddc4ed531",
  measurementId: "G-ENQW4C4JZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

