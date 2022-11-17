import React from "react";
import { auth } from "../firebase";

export default function LogOut() {

    const signOut = () => {
        signOut(auth);
    }

    return (
        <button onClick={() => auth.signOut()} className=" px-6 py-2"> Log Out </button>
    )
}