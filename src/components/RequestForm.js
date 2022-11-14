import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button"
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

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

    const sendData = async (e) => {
        const d = {
            title: title,
            description: description,
            time: time,
            type: type,
            deadline: deadline
        }
        console.log(d);

        e.preventDefault()
        const {uid, displayName} = auth.currentUser;
        await addDoc(collection(db, "HelpQuests"), {
            title: title,
            description: description,
            time: time,
            type: type,
            deadline: deadline,
            uid: uid,
            creator: displayName
        })
    }

    return (
        <div className="absolute h-screen w-full top-0 left-0 text-center">
            {user ?
            <form className="fixed h-full w-full backdrop-blur-3xl" onSubmit={sendData}>
                <div>
                    <h1 className="py-6 text-6xl font-bold bg-zinc-300">
                        CREATE HELP QUEST
                    </h1>
                </div>
                <div>
                    <h2 className={style.label}> Title </h2>
                    <textarea value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex: I need help studying for an algebra exam" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                <h2 className={style.label}> Description </h2>
                    <textarea value={description} onChange={(e) => {setDescription(e.target.value)}}  placeholder="Ex: I am struggling to remember the unit circle" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                <h2 className={style.label}> Estimated Time to Completion </h2>
                    <textarea value={time} onChange={(e) => {setTime(e.target.value)}}  placeholder="Ex: 2 Hours" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                <h2 className={style.label}> Deadline Date </h2>
                    <textarea value={deadline} onChange={(e) => {setDeadline(e.target.value)}}  placeholder="Ex: 12/12/2022" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                <h2 className={style.label}> Help Quest Type </h2>
                    {/* <option value={type}></option> */}
                    <textarea value={type} onChange={(e) => {setType(e.target.value)}}  placeholder="Test" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form> :
            <div className="grid grid-rows-2 text-center content-center fixed h-full w-full backdrop-blur-3xl">
                <h1 className="py-6 text-6xl font-bold ">
                    Sign in to create Help Quest
                </h1>
                <GoogleButton className="justify-self-center" onClick={googleSignIn}/>
            </div>
}
        </div>
        
    )
}