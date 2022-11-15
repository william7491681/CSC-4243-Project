import { useState } from "react"
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

// {key, id, title, time, type, deadline, description, creator, acceptor}
export default function Card(props) {

    const [showAccept, setShowAccept] = useState(false)
    const handleMoreInfoClick = () => {
        setShowAccept(!showAccept);
    }

    const acceptQuest = async (e) => {
        e.preventDefault();
        const uid = auth.currentUser.uid;
        console.log(props.id);
        const data = {
            title: props.title,
            time: props.time,
            type: props.type,
            deadline: props.deadline,
            description: props.description,
            creator: props.creator,
            acceptor: uid
        }
        // change acceptor to current user's uid
        console.log("got here")
        const ref = doc(db, "HelpQuests", props.id);
        await setDoc(ref, {acceptor:uid}, {merge:true});
    }

    return (
        <div className="w-72 m-4 mt-6 h-[168px] bg-white lg:max-w-lg shadow-2xl shadow-gray-900 rounded-t-xl rounded-b-xl">
            {!showAccept ?
            // Ternary operator first section
            <div className="text-center text-gray-600 h-full">
                <h3 className="text-black text-2xl h-16 font-bold bg-gray-300 overflow-y-auto overflow-x-hidden rounded-t-xl">
                    {props.title}
                </h3>
                <div className="grid font-bold pl-3 grid-cols-2 text-left border-b-2 h-[26px]">
                    Completion Time: {" "}
                    <p className="ml-1 font-normal flex justify-center text-center overflow-auto">
                        {props.time}
                    </p>
                </div>
                <div className="grid font-bold pl-3 grid-cols-2 text-left border-b-2">
                    Quest Category: {" "}
                    <p className="ml-1 font-normal text-center">
                        {props.type}
                    </p>
                </div>
                <div className="grid font-bold pl-3 grid-cols-2 text-left border-b-2">
                    Deadline: {" "}
                    <p className="ml-1 font-normal text-center">
                        {props.deadline}
                    </p>
                </div>
                <div className="bg-gray-200 cursor-pointer flex justify-center font-bold pl-3
                text-center border-b-2 rounded-b-xl" onClick={handleMoreInfoClick}>
                    More Information
                </div>
            </div> :
            // Ternary operator second section
            <div className="flex flex-col text-center text-gray-600 h-full">
                <div className="grid font-bold pl-3 grid-cols-2 text-left mb-0 border-b-2">
                    Quest Creator: {" "}
                    <p className="ml-1 font-normal">
                        {props.creator}
                    </p>
                </div>
                <div className="mb-0 font-bold pl-3">
                    Description:
                </div>
                <p className="mt-0 ml-1 font-normal text-center overflow-y-auto overflow-x-hidden">
                    {props.description}
                </p>
                <div className="grid grid-cols-2 mt-auto h-[28px]">
                    <button className="h-[26px] flex bg-gray-200 cursor-pointer font-bold pl-3
                    border-b-2 rounded-bl-xl" onClick={handleMoreInfoClick}>
                        Less Information
                    </button>
                    <button onClick={acceptQuest}  className="border-b-2 bg-green-200 rounded-br-xl font-bold">
                        Accept Quest
                    </button>
                </div>
            </div>
}
        </div>
    )
}