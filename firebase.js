import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNtUDu3D9KjITscJG9AwEPxUdgWG5AGFI",
  authDomain: "avfu-gpa-calculator.firebaseapp.com",
  projectId: "avfu-gpa-calculator",
  storageBucket: "avfu-gpa-calculator.firebasestorage.app",
  messagingSenderId: "527237792911",
  appId: "1:527237792911:web:a66be1ccd68e11c16ddcfa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);