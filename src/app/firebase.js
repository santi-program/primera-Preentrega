// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
 //
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);