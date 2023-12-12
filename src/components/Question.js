import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveQuestionAnswer } from "../slices/questionSlice";
import { fetchUsers} from "../slices/userSlice";
export default function Question(){
    const {question_id}=useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const allQuestionData=Object.values(useSelector(state=>state.question.entities));
    const questionData=allQuestionData.find(data=> data.id===question_id);
    const allUserData=Object.values(useSelector(state=>state.user.entities));
    const authorData=allUserData.find(data=> data.id===questionData.author);
    const authorAvatar= authorData.avatarURL;
    const authorName=authorData.name;
    const currentUser=useSelector(state=>state.user.currentUser);

    const isAnswered= currentUser.answers[question_id]? true: false;
    const optionOneCount=Object.values(questionData.optionOne.votes).length;
    const optionTwoCount=Object.values(questionData.optionTwo.votes).length;
    const optionForThisQuestion=currentUser.answers[question_id];


    const handleClick=(e)=>{
        const {value}=e.target;
        const data={
            authedUser: currentUser.id,
            qid: questionData.id,
            answer: value
        }
        if(!isAnswered){
        dispatch(saveQuestionAnswer(data))
        .then(()=>{
            dispatch(fetchUsers()).then(()=>{
                navigate("/");
            })
           
        });
        }
        else alert("You already answered this question.")
    }
    return (
        <div>
            <h1>Poll by {authorName}</h1>

            <img style={{border: "10px solid black", borderRadius:"50%"}} src={authorAvatar}/>

            <h1>Would you rather:</h1>
            <div style={{
                display: "flex",                
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px"
            }}>
                <div style={{border:"1px solid black", borderRadius:"5px", width: "40%", paddingTop:"10px"}}>
                {isAnswered && <p style={{fontStyle: "italic"}}>There are {optionOneCount} people ({(optionOneCount/(allUserData.length))*100}%) vote for this option.</p>}
                    <p>{questionData.optionOne.text}</p>
                    <button onClick={handleClick}
                        value="optionOne"
                        style={{
                            cursor: isAnswered ?"default":"pointer",
                            backgroundColor:optionForThisQuestion==="optionOne"?"red":"green",
                            color: "white",
                            height:"50px", display: "flex",                
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%"
                    }}><h3>{optionForThisQuestion==="optionOne"?"Voted!!!":"Click"}</h3></button>
                </div>
                <div style={{border:"1px solid black",borderRadius:"5px", width: "40%",paddingTop:"10px"}}>
                {isAnswered && <p style={{fontStyle: "italic"}}>There are {optionTwoCount} people ({(optionTwoCount/(allUserData.length))*100}%) vote for this option.</p>}
                <p>{questionData.optionTwo.text}</p>
                <button type="button" onClick={handleClick}
                    value="optionTwo"
                    style={{
                        cursor: isAnswered ?"default":"pointer",
                        backgroundColor:optionForThisQuestion==="optionTwo"?"red":"green",
                        color: "white",
                        height:"50px", display: "flex",                
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    }}><h3>{optionForThisQuestion==="optionTwo"?"Voted!!!":"Click"}</h3></button>
                </div>
            </div>
        </div>
    )
}