import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
export default function QuestionCard(props){
    const formattedDate = moment(props.data.timestamp).format('h:mm A | DD/MM/YYYY');
    const question_id=props.data.id;
    return(
        <div className="question--card">
            <h2>{props.data.author}</h2>
            <h3 style={{opacity:"0.6"}}>{formattedDate}</h3>
            <hr/>
            <Link style={{color: "black", textDecoration:"none"}} to={`/question/${question_id}`}><button className="show--button"> Show</button></Link>
        </div>
    )
}