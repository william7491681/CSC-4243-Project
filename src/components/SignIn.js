import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import GoogleButton from "react-google-button"

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

export default function SignIn() {
    return (
        <div className="flex justify-center">
            <GoogleButton onClick={googleSignIn}/>
        </div>
    )
}