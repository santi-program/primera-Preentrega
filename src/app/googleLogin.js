import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const googleButton = document.querySelector(`#googleLogin`)

googleButton.addEventListener(`click`, async () => {

    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)

        showMessage("bienvenido " + credentials.user.displayName, "success" )

    } catch (error) {
        if (error.code === `auth/account-exists-with-different-credential`) {
            showMessage("ya iniciaste secion con la misma credencial", "error")
        }else{
            showMessage("error")
        }
    }
})