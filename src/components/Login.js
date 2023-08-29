import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"",password:""})
    let navigate = useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const response = await fetch(`http://localhost:8000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password}),
        })
        const json=await response.json()
        console.log(json)
        if(json.success){
            localStorage.setItem("auth-token" , json.authToken);
            props.showAlert("logged in Successfully","success")
            navigate("/");
            }else{
                props.showAlert("invalid details","danger")
            }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }
    return (
        <div className="container">

            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} name="email" id="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Login