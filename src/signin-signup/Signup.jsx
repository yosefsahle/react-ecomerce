import React, { useState , SyntheticEvent} from "react";
import "./signup.css"
import { Link,Navigate } from "react-router-dom"
import axios from "axios";


const Signup = () =>{

    

    const [first_name, setFirstName] = useState('');
    const [last_name, setLaseName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    
    
    const submit = async (e) =>{
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/api/auth/signup', {                            
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        password: password,
        password_confirm: confirm_password,
        role_id: 2
        })
        console.log(response)
                                
    }
                        


        // if(redirect){
        //     return <Navigate to={'/Signin'}/>
        // }

        

   
    function showpassword() {
        var x = document.getElementById("password");
        var y = document.getElementById("password1");

        if (x.type === "password" && y.type === "password") {
          x.type = "text";
          y.type = "text";
          document.getElementById("i2").style.display = "block";
          document.getElementById("i1").style.display = "none";
          
        } else {
          x.type = "password";
          y.type = "password";
          document.getElementById("i2").style.display = "none";
          document.getElementById("i1").style.display = "block";
        }
      }


    return(
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-left">
                    <img src="./images/userlog/log7.png" alt="" />
                    <h1><u>Welcome To Zohar</u></h1>
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
                <div className="signup-right">
                    <form action="">
                        <h1><i class="fa-solid fa-user-plus"></i> SIGN UP</h1>
                        <div className="name">
                            <div className="nlabel">
                                <label htmlFor="FName"  className="signup-label ">First Name</label>
                                <label htmlFor="LName" className="signup-label label-1">Last Name</label>
                            </div>
                            <div className="ninput">
                                <input type="text" id="FName" required placeholder="Abebe" name="FName" className="signup-n-input" onChange={ e => setFirstName(e.target.value)}/>
                                <input type="text" id="LName" placeholder="Kebede" name="LName" className="signup-n-input" onChange={ e => setLaseName(e.target.value)}/>
                                <small id="Empty_Name Small">Name Canot be Empty</small>
                            </div>
                            <div className="forms">
                                <label htmlFor="Email" className="signup-label">Email</label>
                                <input type="text" id="Email" placeholder="email@gmail.com" name="Email" className="signup-input" onChange={ e => setEmail(e.target.value)}/>
                                <small id="Empty_Email Small">Email Can't be Empty</small>
                                
                                <label htmlFor="PhoneNo" className="signup-label">Phone No</label>
                                <input type="phone" id="Phone" placeholder="+251 912978713" name="PhoneNo" className="signup-input" onChange={ e => setPhone(e.target.value)}/>
                                <small id="Empty_Phone Small">Phone can't be Empty</small>
                                
                                
                                <label htmlFor="Password" className="signup-label">Password</label>
                                <input type="password" name="Password" placeholder="New Password" id="password" className="signup-input" onChange={ e => setPassword(e.target.value)}/>
                                <i class="fa-solid fa-eye-slash password-i" onClick={showpassword} id="i1"></i>
                                <i class="fa-solid fa-eye password-i" onClick={showpassword} id="i2"></i>
                                <input required type="password" name="Password" placeholder="Confirm Password" id="password1" className="signup-input input-1" onChange={ e => setConfirmPassword(e.target.value)}/>
                                <small id="Empty_Password Small">Password Can't be Empty</small>
                                <small id="Password_Match Small">Passords Doesn't Match</small>

                                <label htmlFor="Role" className="signup-label">Role</label>
                                <input type="text" name="Role" placeholder="1 : 2 : 3 " className="signup-input" />

                            </div>
                            <div className="buttons">
                                <button className="signup-btn" type="button" onClick={submit}> Register</button>
                                <Link to='/Signin'><a href=""><u>Have an Account?</u></a></Link>
                            </div>
                            
                        </div>
                    </form>
                    
                </div>

            </div>
        </div>
        
    )
    }
export default Signup