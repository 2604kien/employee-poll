import React from "react";
import loginIMG from "../images/Screenshot 2023-12-10 102324.png";
import { useSelector, useDispatch } from "react-redux";
import { verifyLogin, fetchUsers } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const isAuthenticated=useSelector((state) => state.user.isAuthenticated);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [formData, setFormData]=React.useState({
        username: "",
        password: "",
    })

    const handleChange=(e)=>{
        e.preventDefault()
        const {name, value}=e.target;
        setFormData((prev)=>{
            return ({
                ...prev,
                [name]: value
            });
        })
    }
    const submitLogin=(e)=>{

        e.preventDefault();
        dispatch(fetchUsers())
            .then(()=>{
                dispatch(verifyLogin(formData));
                console.log(isAuthenticated);
                if(isAuthenticated) {
                    navigate("/")
                }
            })
        
       
        console.log(formData);
    }
    return (
        <div>
            <img src={loginIMG} />
            <form className="login--form">
                <input onChange={handleChange} type="text" name="username" value={formData.username} placeholder="Enter your account."/>
                <input onChange={handleChange} type="text" name="password" value={formData.password} placeholder="Enter your password."/>
                <button onClick={submitLogin}>Login</button>
            </form>
        </div>
    )
}