import { Outlet, Link } from "react-router-dom";
import '../index.css';
import { MenuIcon, XIcon, BellIcon } from '@heroicons/react/outline'
import { useState } from "react";

export default function GlobalNavbar() {

    const [nav, setNav] = useState(false);
    const handleHamburgerClick = () => {setNav(!nav)};

    const [numNotifs, setNumNotifs] = useState(0);

    return (
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
                    <BellIcon className={!numNotifs ? "w-12 mr-11 fill-white" : "w-12 mr-11 fill-red-600"}/>
                </div>
                    {/* <nav>
                        <ul className="">
                            <li>
                                <Link to="/Profile">Profile Page</Link>
                            </li>
                            <li>
                                <Link to="/randomurl">Route to nowhere</Link>
                            </li>
                        </ul>
                    </nav> */}
            </div>
            {/* "bg-zinc-300 px-0 w-48 font-semibold text-center" */}
            <ul className={!nav ? "hidden" : "bg-zinc-300 px-0 w-48 font-semibold text-center"}>
                <li className="border-b-4 border-white"><Link to="/Profile">Profile Page</Link></li>
                <li className="border-white"><Link to="/randomurl">Route to nowhere</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}