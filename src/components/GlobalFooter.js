import { Outlet, Link } from "react-router-dom";
import '../index.css';
import { useState } from "react";
import {auth} from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import Logo from './images/Help_Quest_Icon.png'
//const nodemailer = require('nodemailer');

export default function GlobalNavbar() {

    const [user] = useAuthState(auth);

    const [nav, setNav] = useState(false);
    const handleHamburgerClick = () => {setNav(!nav)};

    const [notifs, setNotifs] = useState([]);
    
    /*let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "c4d453291bde5a", // generated by Mailtrap
          pass: "0e8051898837bd" // generated by Mailtrap
        }
      });
      exports.emailSender = functions.https.onRequest((req, res) => {
        const mailOptions = {
            from: 'from@example.com', //Adding sender's email
            to: req.query.dest, //Getting recipient's email by query string
            subject: 'Email Sent via Firebase', //Email subject
            html: '<b>Sending emails with Firebase is easy!</b>' //Email content in HTML
        };
        return transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return res.send(err.toString());
            }
            return res.send('Email sent successfully');
        });
});*/


    return (
        <>
        <div>
            
            <div className="bg-center bg-spanish flex justify-between">
            {/* mt-[30px] ml-[20px]  */}
                
                
                <div className = "flex">
                
                <nav className="text-[20px] font-bold flex">
                    <Link to="/ContactUs" className="flex">Contact someone or dial 555-0157</Link>
                    
                </nav>
                </div>
                
            </div>
           

        </div>
        <Outlet />
        </>
    )
}