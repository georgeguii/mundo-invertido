// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtpimNHSORCt4ZjW5c7MGq_mwtO50258I",
  authDomain: "mundo-invertido-54b78.firebaseapp.com",
  projectId: "mundo-invertido-54b78",
  storageBucket: "mundo-invertido-54b78.appspot.com",
  messagingSenderId: "917346236131",
  appId: "1:917346236131:web:15cda9474d65ca3520b7d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app