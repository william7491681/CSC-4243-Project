import Card from "./Card"
import { useState } from "react";
import { PencilAltIcon } from '@heroicons/react/outline'
import RequestForm from "./RequestForm";

export default function LandingPage() {

    const [cards, setCards] = useState([{
        title: "I need help with derivatives in calculus",
        topic: "Test",
        time: "5 hours",
        type: "Math",
        deadline: "11/25/2022",
        id: "1"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "2"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "3"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "4"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "5"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "6"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "7"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "8"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "9"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "10"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "11"
        },
        {
            title: "I need help with derivatives in calculus",
            topic: "Test",
            time: "5 hours",
            type: "Math",
            deadline: "11/25/2022",
            id: "12"
        }
    ])

    const [showRequestForm, setShowRequestForm] = useState(false);
    const handleCreateQuestClick = () => setShowRequestForm(!showRequestForm);

    return (
        <div className="bg-gray-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cards.map((card) => {
                    return (
                        <Card
                        key={card.id}
                        title={card.title}
                        time={card.time}
                        type={card.type}
                        deadline={card.deadline}
                        />
                    );
                })}
            </div>
            <div className="pt-28">

            </div>
            {showRequestForm && <RequestForm />}
            <div className="flex rounded-xl shadow-lg shadow-black text-center
            fixed bottom-[50px] right-[50px] w-[300px] bg-zinc-300 cursor-pointer"
            onClick={handleCreateQuestClick}>
                <PencilAltIcon className="h-[60px] self-center place-self-center" />
                <h1 className="self-center pl-4 text-[30px]">CREATE QUEST</h1>
            </div>
        </div>
    )
}