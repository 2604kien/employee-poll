import React from "react";
import { useSelector } from "react-redux";
export default function LeaderboardCard(props){
    const [answered, setAnswered]=React.useState(0);
    const [created, setCreated]=React.useState(0);
    const allQuestionData=Object.values(useSelector(state=>state.question.entities));
    const userData=props.userData;

    React.useEffect(()=>{
        setAnswered(Object.values(userData.answers).length);
        allQuestionData.map((questionData)=>{
            if(questionData.author===userData.id) setCreated(prev=>prev+1);
        })
    },[])
    return(
        <tr>
            <td style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px"
            }}>
                <img src={userData.avatarURL} style={{width:"70px", borderRadius:"50%"}}/>
                <div>
                    <div style={{fontWeight:"bold"}}>{userData.name}</div>
                    <br/>
                    <div style={{fontStyle:"italic"}}>{userData.id}</div>
                </div>
            </td>
            <td>
                {answered}
            </td>
            <td>
                {created}
            </td>
        </tr>
    )
}