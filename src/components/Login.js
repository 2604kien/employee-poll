import React from "react";
import loginIMG from "../images/Screenshot 2023-12-10 102324.png"
export default function Login(){
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
        console.log(formData);
    }
    return (
        <div>
            <img src={loginIMG} alt="Image login photo" />
            <form className="login--form">
                <input onChange={handleChange} type="text" name="username" value={formData.username} placeholder="Enter your account."/>
                <input onChange={handleChange} type="text" name="password" value={formData.password} placeholder="Enter your password."/>
                <button onClick={submitLogin}>Login</button>
            </form>
        </div>
    )
}