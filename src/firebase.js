// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbwqbX_q0H5ry5c5gp0yPqCRFMGy5dLas",
  authDomain: "todo-app-5a8ce.firebaseapp.com",
  projectId: "todo-app-5a8ce",
  storageBucket: "todo-app-5a8ce.appspot.com",
  messagingSenderId: "750533984286",
  appId: "1:750533984286:web:90fc9898f3170a1b282e0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);