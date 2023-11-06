// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBz7-99nM-G2HxRZ0o0pMBjCUjkOyno1Q",
  authDomain: "learnly-rir.firebaseapp.com",
  projectId: "learnly-rir",
  storageBucket: "learnly-rir.appspot.com",
  messagingSenderId: "450677975040",
  appId: "1:450677975040:web:e93557896672e5babf90e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;