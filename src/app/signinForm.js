import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const signinForm = document.querySelector(`#login-form`)


signinForm.addEventListener(`submit`, async e => {
    e.preventDefault()

    const email = signinForm[`login-email`].value
    const password = signinForm[`login-password`].value

    try {
        const credential = await signInWithEmailAndPassword(auth, email, password)
        console.log(credential)

        showMessage("bienvenido " + credential.user.email)
    } catch (error) {
        if(error.code === "auth/wrong-password") {
            showMessage("contraseña incorrecta", "error")
        }else if (error.code === "auth/user-not-found") {
            showMessage("usuario no encontrado", "error")
        }else{
            showMessage(error.message, "error")
        }
    }
})