

export default function Card({title, topic, time, type, deadline}) {
    return (
        <div className="w-72 m-4 cursor-pointer lg:max-w-lg shadow-md shadow-gray-600">
            <div className="text-center">
                <h3 className="text-2xl h-16 font-bold bg-gray-300 overflow-y-auto overflow-x-hidden">
                    {title}
                </h3>
                {/* <div className="text-gray-600 grid font-bold pl-3 grid-cols-2 text-left border-b-2">
                    Topic: {" "}
                    <p className="ml-1 font-normal text-center">
                        {topic}
                    </p>
                </div> */}
                <div className="text-gray-600 grid font-bold pl-3 grid-cols-2 text-left border-b-2">
                    Completion Time: {" "}
                    <p className="ml-1 font-normal text-center">
                        {time}
                    </p>
                </div>
                <div className="text-gray-600 grid font-bold pl-3 grid-cols-2 text-left border-b-2">
                    Quest Type: {" "}
                    <p className="ml-1 font-normal text-center">
                        {type}
                    </p>
                </div>
                <div className="text-gray-600 grid font-bold pl-3 grid-cols-2 text-left border-b-2">
                    Deadline: {" "}
                    <p className="ml-1 font-normal text-center">
                        {deadline}
                    </p>
                </div>
            </div>
        </div>
    )
}