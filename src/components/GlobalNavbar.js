import { Outlet, Link } from "react-router-dom";
import '../index.css';
import { MenuIcon, XIcon, BellIcon} from '@heroicons/react/outline'
import { useState } from "react";
import {auth} from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import Logo from './images/Help_Quest_Icon.png'
//const nodemailer = require('nodemailer');

export default function GlobalNavbar() {

    const [user] = useAuthState(auth);

    const [nav, setNav] = useState(false);
    const handleHamburgerClick = () => {setNav(!nav)};
    const [notif, setNotif] = useState(false);
    const handleNotificationClick = () => {setNotif(!notif)};


    const [notifs, setNotifs] = useState([]);
    
    /**/


    return (
        <>
        <div>
            
            <div className="bg-center bg-spanish flex justify-between">
            {/* mt-[30px] ml-[20px]  */}
                <div className="cursor-pointer ml-[20px] mt-[30px] h-max" onClick={handleHamburgerClick}>
                    {!nav ? <MenuIcon className="w-12 mx-12" /> : <XIcon className="w-12 mx-12" />}
                </div>
                
                <div className = "flex">
                
                <nav className="md:text-[70px] font-bold flex">
                    
                    <Link to="/" className="flex"><img src={Logo} alt="Help Quest Logo" className="h-24 w-24 mt-2"/>
                    <div className="hidden md:block"> Help Quest</div>
                   
                    
                    </Link>
                    
                </nav>
                </div>
                <div className="cursor-pointer ml-[20px] mt-[30px]" onClick={handleNotificationClick}>
                    <BellIcon className={!notifs.length ? "w-12 mr-11 fill-white" : "w-12 mr-11 fill-red-600"}/>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div><ul className={!nav ? "hidden" : "absolute bg-silver px-0 w-64 font-semibold text-center z-50 shadow-2xl shadow-black"}>
                    {!user ?
                    <li className="border-t-4 border-white w-full hover:bg-beige"><SignIn /></li> :
                    <li className="border-t-4 border-white w-full hover:bg-beige"><LogOut /></li>}
                    
                    <li className="border-t-4 border-white w-full hover:bg-beige"><Link to="/Profile" className="px-10">Profile Page</Link></li>
                    <li className="border-t-4 border-white w-full hover:bg-beige"><Link to="/ContactUs" className="px-10">Contact Page</Link></li>
                    <li className="border-t-4 border-white w-full hover:bg-beige"><Link to="/About" className="px-10">About Page</Link></li>
                    <li className="border-t-4 border-b-4 border-white w-full hover:bg-beige"><Link to="/" className="px-10">Home</Link></li>
                </ul>
                {nav ?
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-transparent z-10" onClick={() => setNav(false)}/> :
                null}</div>
                <div className ="flex justify-end">
                    <ul className={!notif ? "hidden" : "absolute bg-silver px-0 w-64 font-semibold text-center z-50 shadow-2xl shadow-black"}>
                    {!user ?
                    <li className="border-t-4 border-white w-full hover:bg-beige"><Link to="/SignUp" className="px-10">SignIn</Link></li> :
                    <li className="border-t-4 border-white w-full hover:bg-beige"><LogOut /></li>}
                </ul>
                {notif ?
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-transparent z-10" onClick={() => setNotif(false)}/> :
                null}
                </div>
                
            </div>
            

        </div>
        <Outlet />
        </>
    )
}