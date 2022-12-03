import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button"
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

export default function RequestForm() {

    const style = {
        input : "my-2 p-2 w-auto text-lg shadow-lg shadow-black placeholder-black placeholder-opacity-70 resize-none",
        label : "text-3xl text-zinc-200 font-semibold mt-5"
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
            <form className=" h-full fixed w-full backdrop-blur-3xl" onSubmit={sendData}>
                <div>
                    <h1 className="py-6 text-6xl font-bold bg-zinc-300">
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
                <button type="submit" className="rounded-xl shadow-lg text-[30px] shadow-black fixed bottom-[50px] left-[50px] w-[300px] bg-zinc-400 cursor-pointer hover:bg-zinc-300 focus:ring focus:ring-blue-ring">Submit</button>
            </form> :
            <div className="grid grid-rows-2 text-center content-center h-full w-full backdrop-blur-3xl">
                <h1 className="py-6 text-6xl font-bold ">
                    Sign in to create Help Quest
                </h1>
                <Link to="/SignUp" className="px-10">SignIn</Link>
            </div>
}
        </div>
        
    )
}
