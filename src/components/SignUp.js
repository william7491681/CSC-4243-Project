import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";


const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    
    signInWithRedirect(auth, provider)
    
}

export default function SignUp() {
    const [first, setFirst]=useState(false);
    const [second, setSecond]=useState(false);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    let uid;
    if (user) {
        uid = auth.currentUser.uid;
    }

    const handleChange=(data)=>{
      if(data==="first"){
        setFirst(!first);
        
      }
      if(data==="second"){
        setSecond(!second)
      }
      
    }
    useEffect(() => {
      if(user != null){
        navigate("/");
      }
  }, []);
    
    return (
      <div className="min-h-screen w-full bg-yellow-100">
        {!user ?
      <div className="">
        {!first ? <></> : <GoogleButton onClick={() =>{googleSignIn()}}/>  }
        <div>
          <input type="checkbox" value={first} onChange={()=>handleChange("first")}/> Agree to the terms and agreements before signing in
          <h1></h1>
          <input type="checkbox" value={second} onChange={()=>handleChange("second")}/> Check here to see the conditions  
          
        </div>
        {!second ? <div><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div> 
        : <div>If you wish to use the website, you must agree to google having emails and not spamming either of my accounts. Please. 
          <br/>And also to fill in space, to make sure not to send dumb stuff
          <br/>And permission that we can throw colors around the wall.
          <br/>We are not responisble for making your eyes bleed.
          <br/>I love cheese. I want cheese. 
          <br/>You must sing the Help Quest Anthem at all times while using the website.
          <br/>Which goes as "You are a really big help"
          <br/>"You are a really good help"
          <br/>"That's what I want to say"
          <br/>"So go off and save someone's day"
          <br/>"Because we all need someone's help"
          <br/>"Hurray, we all need someone's help"
          <br/>And you are not allowed to consider the anthem dumb.
          <br/>Because everyone already knows that.
          <br/>But we sing it because it is a good song.
          <br/>Not because it is smart. 
          <br/>I am also just filling in space.
          <br/>Because I don't know how to make the footer go at the bottom of the page.
          <br/>Without the filler stuff.
        </div>  }
        <div >
        
       </div>
       
      </div> :
      navigate("/")
}
      </div>
    )
}