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

    if (user) {

        status.innerHTML = `
            Logged in as
            <b>${user.email}</b>

            <br><br>

            <button id="logoutBtn">
                Logout
            </button>
        `;

        document
            .getElementById("logoutBtn")
            .onclick = () => signOut(auth);

    } else {

        status.textContent = "Not logged in.";

    }

});