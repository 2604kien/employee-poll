import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "../slices/questionSlice";
import { getCurrentUser } from "../slices/userSlice";
import QuestionCard from "./QuestionCard";
export default function NewQuestions(){
    const dispatch=useDispatch();
    const questionData=Object.values(useSelector(state=>state.question.entities)).sort((a,b)=>b.timestamp-a.timestamp); //get user data to 
    const currentUserData=useSelector(state=>state.user.currentUser);
    
    React.useEffect(()=>{
        dispatch(fetchQuestions());
        dispatch(getCurrentUser(currentUserData.id));
    },[dispatch, currentUserData.id]);
    let doneElement=questionData.map(el=>{
        if(currentUserData.answers[el.id]) return (<QuestionCard key={el.id} data={el}></QuestionCard>);
        return;
    })
    let newElement=questionData.map(el=>{
        if(!currentUserData.answers[el.id]) return (<QuestionCard key={el.id} data={el}></QuestionCard>)
        return;
    })
    return(
        <div style={{ marginTop: "50px", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <div className="new--question">
                <h1 >New Questions</h1>
                <div className="new--question--display">
                    {newElement}
                </div>
            </div>
            <div  style={{ marginTop: "20px"}}className="new--question">
                <h1 >Done</h1>
                <div className="new--question--display">
                   {doneElement}
                </div>
            </div>
        </div>
    )
}