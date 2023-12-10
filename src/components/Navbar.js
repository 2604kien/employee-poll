import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar(props){
    const profile=(
        <li><Link to="/profile">Profile</Link></li>
    )
    const isAuthenticated=useSelector((state) => state.user.isAuthenticated);
    const element= isAuthenticated?(
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
        </>
    ):<></>
    return (
       <div>
            {element}
            <Outlet/>
       </div>
    )
}