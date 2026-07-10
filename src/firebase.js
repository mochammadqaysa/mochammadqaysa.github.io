// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
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

// Init Firebase (use existing app if already initialized to prevent errors in dev mode / SSR)
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

