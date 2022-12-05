import emailjs from "emailjs-com";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button"


const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
}

export default function ContactUs() {
  const [user] = useAuthState(auth);
    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('service_7jfixio', 'template_403hzvf', e.target, '27dVif2lal7O0DT51')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
          e.target.reset()
      }
    return (
       <div className="bg-dusty min-h-screen w-full">
        {user ?
        <div>
       <div>
        <h1 className ="">
            Contact the people you accepted.
        </h1>
       </div>
       <div className="container">
    <form onSubmit={sendEmail}>
      <div className="row pt-5 mx-auto">
        <div className="col-10 form-group mx-auto pl-3">
          <input type="text" className="form-control border-2 border-spanish bg-beige" placeholder="Your Name" name="name" required></input>
        </div>
        <div className="col-10 form-group pt-2 mx-auto pl-3">
          <select name="email" className="form-control border-2 border-spanish bg-beige" label="Email Address" placeholder="" required>
            <option label="Email Address"></option>
            <option label="Ivar Bega Stem">ivarbegastem@gmail.com</option>
            <option label="Ravi Stimphil">ravistimphil@gmail.com</option>
          </select>
        </div>
        <div className="col-10 form-group pt-2 mx-auto pl-3">
          <input type="text" className="form-control border-2 border-spanish bg-beige" placeholder="Subject" name="subject" required></input>
        </div>
        <div className="col-10 form-group pt-2 mx-auto pl-3">
          <textarea className="form-control border-2 border-spanish bg-beige" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
        </div>
        <div className="col-10 pt-3 mx-auto p-3">
          <input type="submit" className="btn btn-info cursor-pointer bg-spanish p-3 hover:bg-spanishLight" value="Send Message" ></input>
        </div>
      </div>
    </form>
    </div> </div>:
    <div className="flex justify-center flex-col items-center">
    <h1 className="py-6 ">
       
    </h1>
    <div className="px-10 pb-4 text-6xl font-bold"> Sign in to view contact page</div>
    <GoogleButton onClick={googleSignIn}/>
</div>}
       </div>
       
       
    )
}

/*
import React from "react";

export default function ContactUs(){

  
  return(
    
  )
}*/