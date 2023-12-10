import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/userSlice";
export default function Navbar(props){
    const dispatch=useDispatch();
    const userName=useSelector(state=>state.user.entities.name)
    const handleLogout=()=>{
        dispatch(logout());
    }
    const profile=(
        <>
        <li >{userName}</li>
        <li onClick={handleLogout}><Link to="/logout">Logout</Link></li>
        </>
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