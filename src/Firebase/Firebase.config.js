// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA58Ml_hkgiabKjQwbSnEB3INb6w6LX5_M",
  authDomain: "user-email-pass-auth-4e89d.firebaseapp.com",
  projectId: "user-email-pass-auth-4e89d",
  storageBucket: "user-email-pass-auth-4e89d.firebasestorage.app",
  messagingSenderId: "743342465566",
  appId: "1:743342465566:web:ceb809062de98f8657c40f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;