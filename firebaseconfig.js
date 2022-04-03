// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk6dZ6BuDBle0EMm1KUSyhH4oARgzzRWo",
  authDomain: "chatapp-17c89.firebaseapp.com",
  projectId: "chatapp-17c89",
  storageBucket: "chatapp-17c89.appspot.com",
  messagingSenderId: "417697164436",
  appId: "1:417697164436:web:c70e68356013967750d881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }