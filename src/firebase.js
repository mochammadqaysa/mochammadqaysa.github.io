// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0BozA4TAaEW95_go6i9_-xzNaWMQ-OJI",
  authDomain: "portfolio-chatroom-d451c.firebaseapp.com",
  projectId: "portfolio-chatroom-d451c",
  storageBucket: "portfolio-chatroom-d451c.firebasestorage.app",
  messagingSenderId: "75851250479",
  appId: "1:75851250479:web:36c29fb1367c1e8c7b3fda",
  measurementId: "G-58ESYYMWKS"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
