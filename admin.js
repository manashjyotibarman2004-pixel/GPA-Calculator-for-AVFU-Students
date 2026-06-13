import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const status = document.getElementById("status");

loginBtn.onclick = async () => {

    try {

        await signInWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );

    } catch (e) {

        alert(e.message);

    }

};

onAuthStateChanged(auth, user => {

    const loginBox = document.getElementById("loginBox");
    const adminPanel = document.getElementById("adminPanel");

    if (user) {

        loginBox.style.display = "none";
        adminPanel.style.display = "block";

        document.getElementById("userEmail").textContent =
            user.email;

        document.getElementById("logoutBtn").onclick =
            () => signOut(auth);

    } else {

        loginBox.style.display = "block";
        adminPanel.style.display = "none";

    }

});