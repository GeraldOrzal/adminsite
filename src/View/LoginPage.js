import React from 'react'
import Form from './Components/Form'
import './Styles/LoginPage.css'
import logo from './Images/1.webp'
export default function LoginPage() {
    function HandleSubmit(e,t){
        e.preventDefault()
        t(true)
        
    }
    return (
        <div className="loginPage">
            <div className="form-wrapper">
                <div className="adds">
                    <img src={logo}/>
                    <label>LOGIN IN TO YOUR ACCOUNT</label>
                </div>
                <Form 
                Submit={HandleSubmit} 
                btnName="Login"
                labelClass="log-label"
                inputClass="log-input"
                elements={[
                    {
                    element:"input",
                    type:"email",
                    label:"Email",
                    placeholder:"ENTER YOUR EMAIL"
                    },
                    {
                    element:"input",
                    type:"password",
                    label:"Password",
                    placeholder:"ENTER YOUR PASSWORD"
                    }
                ]}
                />
                <div className="opts">
                    <label>FORGOT YOUR PASSWORD?</label>
                    <label>DONT HAVE AN ACCOUNT?</label>
                    <label>SIGN UP</label>
                </div>
            </div>
            
        </div>
    )
}
