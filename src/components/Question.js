import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Question(){
    const {question_id}=useParams();
    const allQuestionData=Object.values(useSelector(state=>state.question.entities));
    const questionData=allQuestionData.find(data=> data.id===question_id);
    const allUserData=Object.values(useSelector(state=>state.user.entities));
    const authorData=allUserData.find(data=> data.id===questionData.author);
    const authorAvatar= authorData.avatarURL;
    const authorName=authorData.name;
    const currentUser=useSelector(state=>state.user.currentUser);
    console.log(questionData)
    console.log(currentUser)
    return (
        <div>
            <h1>Poll by {authorName}</h1>
            <img style={{border: "1px solid black", borderRadius:"10%"}} src={authorAvatar}/>
            <h1>Would you rather:</h1>
            <div style={{
                display: "flex",                
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px"
            }}>
                <div style={{border:"1px solid black", borderRadius:"5px", width: "40%", paddingTop:"10px"}}>
                    <p>{questionData.optionOne.text}</p>
                    <div style={{
                        cursor: "pointer",
                        backgroundColor:"green",
                        color: "white",
                        height:"50px", display: "flex",                
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}><h3>Click!!!</h3></div>
                </div>
                <div style={{border:"1px solid black",borderRadius:"5px", width: "40%",paddingTop:"10px"}}>
                <p>{questionData.optionTwo.text}</p>
                <div style={{
                        cursor: "pointer",
                        backgroundColor:"green",
                        color: "white",
                        height:"50px", display: "flex",                
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}><h3>Click!!!</h3></div>
                </div>
            </div>
        </div>
    )
}