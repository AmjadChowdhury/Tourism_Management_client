// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjX7Vs02QPQ-b5KCcmh7wkN38B-YRlb-Y",
  authDomain: "tourismmanagement-5691b.firebaseapp.com",
  projectId: "tourismmanagement-5691b",
  storageBucket: "tourismmanagement-5691b.firebasestorage.app",
  messagingSenderId: "425255809153",
  appId: "1:425255809153:web:5ba31f7a3cf97e2f1e1d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth