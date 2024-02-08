// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeP1Mq1F2HqA2Sxuzr5p1CVDOfJyD0QQw",
    authDomain: "applestorejrx.firebaseapp.com",
    projectId: "applestorejrx",
    storageBucket: "applestorejrx.appspot.com",
    messagingSenderId: "710189571457",
    appId: "1:710189571457:web:a17d59a7055c858b1ddc80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);