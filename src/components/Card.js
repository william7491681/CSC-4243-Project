export default function Card({title, time, type, deadline}) {
    return (
        <div className="w-72 m-4 mt-6 bg-white lg:max-w-lg shadow-2xl shadow-gray-900 rounded-t-xl rounded-b-xl">
            <div className="text-center text-gray-600">
                <h3 className="text-black text-2xl h-16 font-bold bg-gray-300 overflow-y-auto overflow-x-hidden rounded-t-xl">
                    {title}
                </h3>
                <div className="grid font-bold pl-3 grid-cols-2 text-left border-b-2">
                    Completion Time: {" "}
                    <p className="ml-1 font-normal text-center">
                        {time}
                    </p>
                </div>
                <div className="grid font-bold pl-3 grid-cols-2 text-left border-b-2">
                    Quest Type: {" "}
                    <p className="ml-1 font-normal text-center">
                        {type}
                    </p>
                </div>
                <div className="grid font-bold pl-3 grid-cols-2 text-left border-b-2">
                    Deadline: {" "}
                    <p className="ml-1 font-normal text-center">
                        {deadline}
                    </p>
                </div>
                <div className="bg-gray-200 cursor-pointer grid font-bold pl-3
                text-center border-b-2 rounded-b-xl">
                    More information
                </div>
            </div>
        </div>
    )
}