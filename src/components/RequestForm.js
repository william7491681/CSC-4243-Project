import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button"
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { CheckIcon } from '@heroicons/react/outline'

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

export default function RequestForm() {

    const style = {
        input : "my-0 p-0 w-auto text-lg shadow-lg shadow-black placeholder-black placeholder-opacity-70 resize-none",
        label : "text-3xl text-yellow-100 font-semibold mt-5"
    }

    const [user] = useAuthState(auth);

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [time, setTime] = useState("")
    const [type, setType] = useState("")
    const [deadline, setDeadline] = useState("")
    const [temp, setTemp] = useState("")
    

    const navigate = useNavigate();
    const reput = /[-]/g;

    const goBackToHomePage = () => {
        
        window.location.reload();
        
        
    }

    const sendData = async (e) => {
        e.preventDefault()
        const {uid, displayName} = auth.currentUser;
        await addDoc(collection(db, "HelpQuests"), {
            title: title,
            description: description,
            time: time,
            type: type,
            deadline: deadline,
            uid: uid,
            creator: displayName,
            acceptor: null,

            
        });

        goBackToHomePage();
        
    }

    return (
        <div className="absolute h-screen w-full top-0 left-0 text-center">
            {user ?
            <form className="fixed h-full w-full backdrop-blur-3xl" onSubmit={sendData}>
                <div>
                    <h1 className="py-6 text-6xl font-bold bg-amber-400">
                        CREATE HELP QUEST
                    </h1>
                </div>
                <div>
                    <h2 className={style.label}> Title </h2>
                    <textarea value={title} required onChange={(e) => setTitle(e.target.value)} placeholder="Ex: I need help studying for an algebra exam" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                <h2 className={style.label}> Description </h2>
                    <textarea value={description} required onChange={(e) => {setDescription(e.target.value)}}  placeholder="Ex: I am struggling to remember the unit circle" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                <h2 className={style.label}> Estimated Time to Completion </h2>
                    <textarea value={time} required onChange={(e) => {setTime(e.target.value)}}  placeholder="Ex: 2 Hours" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                    <h2 className={style.label}> Deadline Date </h2>
                    <input type="date" value={deadline} required onChange={(e) => {setDeadline(e.target.value)}} placeholder="Ex: 12/12/2022" className={style.input} />
                    {/* <textarea value={deadline} onChange={(e) => {setDeadline(e.target.value)}}  placeholder="Ex: 12/12/2022" rows="1" cols="75" className={style.input}></textarea> */}
                </div>
                <div>
                <h2 className={style.label}> Quest Category </h2>
                    {/* <option value={type}></option> */}
                    <textarea value={type} required onChange={(e) => {setType(e.target.value)}}  placeholder="Math" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <button type="submit" className="rounded-xl shadow-lg shadow-black fixed bottom-[150px] right-[50px] w-[300px] bg-amber-400 cursor-pointer hover:bg-amber-300 focus:ring focus:ring-blue-ring">
                    <div className="flex jusitify-center">
                        <CheckIcon className="h-[60px] self-center place-self-center stroke-green-600"/>
                        <h1 className ="text-[30px] self-center ml-11">SUBMIT</h1>
                    </div>
                    
                    
                </button>
            </form> :
            <div className="grid grid-rows-2 text-center content-center h-full w-full backdrop-blur-3xl">
                
                <Link to="/SignUp" className="px-10 py-10 text-6xl font-bold ">Sign in to create Help Quest</Link>
            </div>
}
        </div>
        
    )
}
