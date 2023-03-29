// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHGENiZtZ38NwNJ6YgSO5UaVtWZxFof90",
  authDomain: "realtimechat-155fd.firebaseapp.com",
  projectId: "realtimechat-155fd",
  storageBucket: "realtimechat-155fd.appspot.com",
  messagingSenderId: "1015463024281",
  appId: "1:1015463024281:web:9f1ddfaa3232ebdccf8a08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider  = new GoogleAuthProvider();
export const db=getFirestore(app);
