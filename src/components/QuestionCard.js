import React from "react";
import moment from "moment";
export default function QuestionCard(props){
    const formattedDate = moment(props.data.timestamp).format('h:mm A | MM/DD/YYYY');
    return(
        <div className="question--card">
            <h3>{props.data.author}</h3>
            <h3>{formattedDate}</h3>
            <hr/>
            <button>Show</button>
        </div>
    )
}