import React from "react";
import { useSelector } from "react-redux";
import LeaderboardCard from "./LeaderboardCard";
export default function Leaderboard(){
    const allUserData=Object.values(useSelector(state=>state.user.entities));
    
    const element=allUserData.map(el=><LeaderboardCard key={el.id} userData={el}/>)
    
    return (
        <div>
            <h1>Leaderboard</h1>
            <table style={{textAlign:"left"}} className="leaderboard--table">
                <thead>
                    <th>Users</th>
                    <th>Answered</th>
                    <th>Created</th>
                </thead>
                <tbody>
                    {element}
                </tbody>
            </table>
        </div>
    )
}