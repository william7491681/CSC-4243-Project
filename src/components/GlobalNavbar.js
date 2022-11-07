import { Outlet, Link } from "react-router-dom";

export default function GlobalNavbar() {
    const list = {
        display: "inline-block",
        textAlign: "left"
    }
    return (
        <div style={{textAlign: "center"}}>
            <nav>
                <ul style={list}>
                    <li>
                        <Link to="/">Landing Page</Link>
                    </li>
                    <li>
                        <Link to="/Profile">Profile Page</Link>
                    </li>
                    <li>
                        <Link to="/randomurl">Route to nowhere</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}