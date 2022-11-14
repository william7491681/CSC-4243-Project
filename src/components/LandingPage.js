import Card from "./Card"
import { useEffect, useState } from "react";
import { PencilAltIcon, XIcon } from '@heroicons/react/outline'
import RequestForm from "./RequestForm";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";

export default function LandingPage() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        const q = query(collection(db, "HelpQuests"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let cards = [];
            let data = {};
            querySnapshot.forEach((card) => {
                data = {...card.data()}
                data.id = card.id;
                if (!data.acceptor) {
                    cards.push(data)
                }
            })
            setCards(cards);
        })
        return () => unsubscribe();
    }, []);

    const [showRequestForm, setShowRequestForm] = useState(false);
    const handleCreateQuestClick = () => {
        setShowRequestForm(!showRequestForm);
    }

    return (
        <div className="bg-gray-600 min-h-screen h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                { cards && cards.map((card) => {
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
            <div className="pt-28">

            </div>
            {showRequestForm && <RequestForm />}
            <div className="flex rounded-xl shadow-lg shadow-black
            fixed bottom-[50px] right-[50px] w-[300px] bg-zinc-300 cursor-pointer"
            onClick={handleCreateQuestClick}>
                {!showRequestForm ?
                <PencilAltIcon className="h-[60px] self-center place-self-center" />:
                <XIcon className="h-[60px] self-center place-self-center stroke-red-600" />}

                {!showRequestForm ?
                <h1 className="self-center pl-4 text-[30px]"> CREATE QUEST </h1> :
                <h1 className="self-center pl-12 text-[30px]"> CANCEL </h1>}
            </div>
        </div>
    )
}