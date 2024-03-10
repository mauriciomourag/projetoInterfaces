// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKw482PlBxmH00O73QfvvnYoRgiRZC1e4",
  authDomain: "projetoreact-4f599.firebaseapp.com",
  projectId: "projetoreact-4f599",
  storageBucket: "projetoreact-4f599.appspot.com",
  messagingSenderId: "730764461748",
  appId: "1:730764461748:web:1c211560560c4c4443b9e1",
  measurementId: "G-PC0JC60N2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);