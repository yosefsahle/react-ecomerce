import React, { useEffect, useState } from "react";
import "./user.css";
import FlashDeals from "../../components/flashDeals/FlashDeals";
import axios from "axios";

const User = () =>{
    
    
    return(

        <div className="main">
        <div className="box profile_img">
            <img src="./images/user/cp.jpg" className="coverpic" alt="" />
            <img src="./images/user/pp.png" className="profilepic circle" alt="" />
            <h1 className="username">Yosef Sahle</h1>
                <h5>250 Folowers 20 Following</h5>
        </div>
        
    
        </div>

        
    )
}

export default User