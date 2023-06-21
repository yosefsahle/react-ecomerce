import React, { useState , SyntheticEvent} from "react";
import "./signin.css"
import { Link } from "react-router-dom"
import axios from "axios";

const Signin = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = async (e) =>{
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/api/auth/signin', {
            
                email: email,
                password: password
                
        })
        console.log(response)
        
    }

    function showpassword() {
        var x = document.getElementById("password");

        if (x.type === "password") {
          x.type = "text";
          document.getElementById("i12").style.display = "block";
          document.getElementById("i11").style.display = "none";
          
        } else {
          x.type = "password";
          document.getElementById("i12").style.display = "none";
          document.getElementById("i11").style.display = "block";
        }
      }

    return(
        <div className="login-page">
            <div className="login-container">
                <div className="login-left">
                    <img src="./images/userlog/log7.png" alt="" />
                    <h1>Zohar Shopping</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisic the jsrg jrgerrj jw wjbwrg  nostrum laudantium ea.</p>
                    <div className="iconsSocial">
                        <a href=""><i class="fa-brands fa-youtube"></i></a>
                        <a href=""><i class="fa-brands fa-tiktok"></i></a>
                        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                        <a href=""><i class="fa-brands fa-telegram"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <hr className="hr-line"/>
                <div className="login-right">
                    <form action="">
                    <h1> <i class="fa-solid fa-user"></i> SIGN IN</h1>
                        <label className="login-label" htmlFor="Email">Email</label>
                        <input type="email" placeholder="email@gmail.com " name="Email" className="login-input" onChange={ e => setEmail(e.target.value)}/>
                        <label className="login-label" htmlFor="Password">Password</label>
                        <input type="password" placeholder="**********" name="Password" className="login-input" id="password" onChange={ e => setPassword(e.target.value)}/> 
                        <i className="fa-solid fa-eye-slash password-l-i" id="i11" onClick={showpassword}></i>
                        <i className="fa-solid fa-eye password-l-i" id="i12" onClick={showpassword}></i>
                       
                        <div className="buttons">
                            <button className="login-btn" onClick={signin}>Log In</button>
                            <Link to='/Signup'><button className="login-btn">Register</button></Link>
                            <a href=""><u>Forget Password?</u></a>
                        </div>  
                    </form>
                    
                </div>

            </div>
        </div>
    )
}

export default Signin