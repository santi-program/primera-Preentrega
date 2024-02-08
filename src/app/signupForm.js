import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const signupForm = document.querySelector(`#signup-form`)

signupForm.addEventListener(`submit`, async (e) => {
    e.preventDefault()

    const email = signupForm[`signup-email`].value
    const password = signupForm[`signup-password`].value

    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential)

        showMessage("welcome " + userCredential.user.email)

    } catch (error) {
        if (error.code === `auth/email-already-in-use`){
            showMessage("prueba con otro email", "error")
        }
        else if (error.code === `auth/invalid-email`){
            showMessage("mail invalido", "error" )
        }else if (error.code === `auth/weak-password`){
            showMessage("contraseña muy debil", "error" )
        }else if (error.code){
            showMessage("error")
        }
    }
})