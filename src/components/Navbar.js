import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Navbar(props){
    const profile=(
        <li><Link to="/login">Login</Link></li>
    )
    return(
        <>
            <div className="nav--bar">
                <ul className="nav--item">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
                <ul className="nav--profile">
                    {profile}
                </ul>
            </div>
            <Outlet/>
        </>
    )
}