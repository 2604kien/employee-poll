import React from "react";
import loginIMG from "../images/Screenshot 2023-12-10 102324.png";
import { useSelector, useDispatch } from "react-redux";
import { verifyLogin, fetchUsers } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [loginFailed, setLoginFailed]=React.useState(false);
    const isAuthenticated=useSelector((state)=>state.user.isAuthenticated);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [formData, setFormData]=React.useState({
        username: "",
        password: "",
    })
    React.useEffect(() => { //navigate to Home after login
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated]); 
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
    const submitLogin= (e)=>{
        e.preventDefault();
        dispatch(fetchUsers())
            .then(()=>{
                dispatch(verifyLogin(formData));
               if(isAuthenticated===false) setLoginFailed(true);
            })
    }
    return (
        <div>
            <img src={loginIMG} />
            <form onSubmit={submitLogin} className="login--form">
                {loginFailed && <p style={{color: "red"}}>*Username or password not match!!!</p>}
                <input onChange={handleChange} type="text" name="username" value={formData.username} placeholder="Enter your account." required/>
                <input onChange={handleChange} type="text" name="password" value={formData.password} placeholder="Enter your password." required/>
                <input style={{width: "120px", cursor: "pointer"}}type="submit" value="Login"/>
            </form>
        </div>
    )
}