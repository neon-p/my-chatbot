// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVZFKsbuJe2hZmTNuzv7y-OGJwU677Nes",
  authDomain: "my-chatbot-d5cb3.firebaseapp.com",
  projectId: "my-chatbot-d5cb3",
  storageBucket: "my-chatbot-d5cb3.firebasestorage.app",
  messagingSenderId: "191444793519",
  appId: "1:191444793519:web:76106ad7dac6c29979fc5a",
  measurementId: "G-MVFDZEH1P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };