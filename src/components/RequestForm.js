
export default function RequestForm() {

    const style = {
        input : "my-2 p-2 w-auto text-lg shadow-lg shadow-black placeholder-black placeholder-opacity-70 resize-none",
        label : "text-3xl text-zinc-200 font-semibold mt-5"
    }

    return (
        <div className="absolute h-screen w-full top-0 left-0 text-center">
            <form className="fixed h-full w-full backdrop-blur-3xl">
                <div>
                    <h1 className="py-6 text-6xl font-bold bg-zinc-300">
                        CREATE HELP QUEST
                    </h1>
                </div>
                <div>
                    <h2 className={style.label}> Title </h2>
                    <textarea placeholder="Ex: I need help studying for a calculus 1 exam" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                <h2 className={style.label}> Description </h2>
                    <textarea placeholder="Type: " rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                <h2 className={style.label}> Estimated Time to Completion </h2>
                    <textarea placeholder="Ex: 2 Hours" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                <h2 className={style.label}> Deadline </h2>
                    <textarea placeholder="Ex: 12/12/2022" rows="1" cols="75" className={style.input}></textarea>
                </div>
                <div>
                <h2 className={style.label}> Title </h2>
                    <textarea placeholder="Test" rows="1" cols="75" className={style.input}></textarea>
                </div>
            </form>
        </div>
    )
}