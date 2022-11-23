import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import GoogleButton from "react-google-button"
import ContactUs from "./ContactUs";

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

export default function SignIn() {
    return (
        <div className="flex justify-center">
            <GoogleButton onClick={googleSignIn}/>
            <ContactUs/>
        </div>
    )
}