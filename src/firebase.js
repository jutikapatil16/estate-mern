// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-978fc.firebaseapp.com",
  projectId: "mern-estate-978fc",
  storageBucket: "mern-estate-978fc.appspot.com",
  messagingSenderId: "236374853150",
  appId: "1:236374853150:web:3bec058b1c11c7a277900f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);