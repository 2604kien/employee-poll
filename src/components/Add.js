import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion } from "../slices/questionSlice";
import { useNavigate } from "react-router-dom";
export default function Add(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const currentUser=useSelector(state=>state.user.currentUser);
    const [data, setData]=React.useState({
        optionOneText: "",
        optionTwoText: "",
        author: currentUser.id,
    })
    const handleChange=(e)=>{
        e.preventDefault();
        const {name, value}=e.target;
        setData((prev)=>{
            return ({
                ...prev,
                [name]: value
            })
        })
    }
    const submitForm=()=>{
        dispatch(addQuestion(data)).then(()=>{
            navigate("/");
        })
    }
    return(
        <div className="add--poll"
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column"
            }}>
            <h1>Would you rather</h1>
            <h3 style={{color:"grey"}}>Create Your Own Poll</h3>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column",
                gap: "20px",
                fontSize: "1.2rem"
            }}>
                <label htmlFor="optionOneText">First Option:</label>
                <input onChange={handleChange} style={{width: "500px", fontSize:"1.2rem"}} type="text" value={data.optionOneText} name="optionOneText" id="optionOneText"/>
                <label htmlFor="optionTwoText">Second Option:</label>
                <input onChange={handleChange} style={{width: "500px",fontSize:"1.2rem"}} type="text" value={data.optionTwoText} name="optionTwoText" id="optionTwoText"/>
                <input onClick={submitForm}  type="submit" value="Add New Poll" />
            </div>
        </div>
    )
}