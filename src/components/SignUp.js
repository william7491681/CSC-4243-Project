import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";
import React, {useState} from "react";

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

export default function SignUp() {
    const [first, setFirst]=useState(false);
    const [second, setSecond]=useState(false);

    const handleChange=(data)=>{
      if(data==="first"){
        setFirst(!first);
      }
      if(data==="second"){
        setSecond(!second)
      }
      
    }
    return (
      <div>
        {!first ? <></> : <GoogleButton onClick={googleSignIn}/>  }
        <div>
          <input type="checkbox" value={first} onChange={()=>handleChange("first")}/> Agree to the terms and agreements before signing in
          <h1></h1>
          <input type="checkbox" value={second} onChange={()=>handleChange("second")}/> Check here to see the conditions  
          
        </div>
        {!second ? <></> : <div>If you wish to use the website, you must agree to send your soul to Google
          and to the owners of HelpQuest.
        </div>  }
        <div >
        
       </div>
       
      </div>
    )
}
/* {!showRequestForm ?
<PencilAltIcon className="h-[60px] self-center place-self-center" />:
<XIcon className="h-[60px] self-center place-self-center stroke-red-600" />}*/