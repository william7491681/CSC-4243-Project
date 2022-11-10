import { Outlet, Link } from "react-router-dom";
import '../index.css';
import { MenuIcon, XIcon, BellIcon} from '@heroicons/react/outline'
import { useState } from "react";

export default function GlobalNavbar() {

    const [nav, setNav] = useState(false);
    const handleHamburgerClick = () => {setNav(!nav)};

    const [notifs, setNotifs] = useState([]);

    return (
        <>
        <div>
            <div className="bg-center bg-zinc-300 flex justify-between">
            {/* mt-[30px] ml-[20px]  */}
                <div className="cursor-pointer ml-[20px] mt-[30px] h-max" onClick={handleHamburgerClick}>
                    {!nav ? <MenuIcon className="w-12 mx-12" /> : <XIcon className="w-12 mx-12" />}
                </div>
                <nav className="text-[70px] font-bold">
                    <Link to="/">Help Quest</Link>
                </nav>
                <div className="cursor-pointer ml-[20px] mt-[30px]">
                    <BellIcon className={!notifs.length ? "w-12 mr-11 fill-white" : "w-12 mr-11 fill-red-600"}/>
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-zinc-300 px-0 w-48 font-semibold text-center z-50"}>
                <li className="border-t-4 border-white w-full"><Link to="/Profile" className="px-10">Profile Page</Link></li>
                <li className="border-t-4 border-b-4 border-white"><Link to="/randomurl">Route to nowhere</Link></li>
            </ul>
        </div>
        <Outlet />
        </>
    )
}