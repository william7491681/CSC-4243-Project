import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";
import emailjs from "emailjs-com";

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

export default function ContactUs() {
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
       <div>
       <div>
        <h1>
            I am going to write a nice essay here later.
        </h1>
        <GoogleButton onClick={googleSignIn}/>
       </div>
       <div className="container">
    <form onSubmit={sendEmail}>
      <div className="row pt-5 mx-auto">
        <div className="col-8 form-group mx-auto">
          <input type="text" className="form-control" placeholder="Name" name="name"></input>
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
          <input type="text" className="form-control" placeholder="Email Address" name="email"></input>
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
          <input type="text" className="form-control" placeholder="Subject" name="subject"></input>
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
        </div>
        <div className="col-8 pt-3 mx-auto">
          <input type="submit" className="btn btn-info" value="Send Message" ></input>
        </div>
      </div>
    </form>
    </div>
       </div>
       
       
    )
}

/*
import React from "react";

export default function ContactUs(){

  
  return(
    
  )
}*/