import Card from "./Card"
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Outlet, Link } from "react-router-dom";
import GoogleButton from "react-google-button"

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

export default function Profile() {

    const [publishedQuests, setPublishedQuests] = useState([]);
    const [acceptedQuests, setAcceptedQuests] = useState([]);
    const [user] = useAuthState(auth);
    let uid;
    if (user) {
        uid = auth.currentUser.uid;
    }

    useEffect(() => {
        const q = query(collection(db, "HelpQuests"),  orderBy("deadline","asc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let acceptedQuests = [];
            let publishedQuests = [];
            let data = {};
            querySnapshot.forEach((card) => {
                data = {...card.data()}
                data.id = card.id;
                if (data.acceptor === uid) {
                    acceptedQuests.push(data)
                } else if (data.uid === uid) {
                    publishedQuests.push(data)
                }
            })
            setAcceptedQuests(acceptedQuests);
            setPublishedQuests(publishedQuests);
        })
        return () => unsubscribe();
    }, []);

    return (
        <div className="bg-dusty min-h-screen w-full">
            {user ?
            <div className="grid grid-rows-4">
                <div className="flex w-full justify-center text-3xl text-opacity-80 text-grat-600">
                        Accepted
                    </div>
                <div className="flex flex-col row-span-4 overflow-x-auto items-start">
                    <div className="grid mt-5 grid-flow-col pb-5">
                        { acceptedQuests && acceptedQuests.map((card) => {
                            let id = card.id
                            return (
                                <Card
                                key={card.id}
                                id={id}
                                title={card.title}
                                time={card.time}
                                type={card.type}
                                deadline={new Date(card.deadline).toLocaleDateString()}
                                description={card.description}
                                creator={card.creator}
                                acceptor={card.acceptor}
                                />
                            );
                        })}
                    </div>
                </div>
                <div><p className="flex w-full justify-center text-3xl text-opacity-80 text-grey-600 pb-5">
                        Created
                    </p></div>
                <div className="flex flex-col row-span-4 overflow-x-auto items-start">
                    
                    <div className="grid mt-5 grid-flow-col">
                        { publishedQuests && publishedQuests.map((card) => {
                            let id = card.id
                            return (
                                <Card
                                key={card.id}
                                id={id}
                                title={card.title}
                                time={card.time}
                                type={card.type}
                                deadline={new Date(card.deadline).toLocaleDateString()}
                                description={card.description}
                                creator={card.creator}
                                acceptor={card.acceptor}
                                />
                            );
                        })}
                    </div>
                </div>                
            </div>
            :
            <div className="flex justify-center flex-col items-center">
                <h1 className="py-6 ">
                   
                </h1>
                <div className="px-10 pb-4 text-6xl font-bold"> Sign in to view profile page</div>
                <GoogleButton onClick={googleSignIn}/>
            </div>}
        </div>
    )
}