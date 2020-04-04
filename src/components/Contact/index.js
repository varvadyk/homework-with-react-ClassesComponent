import React from 'react';
import './style.css';
import {FaUserCircle}  from "react-icons/fa";
import { AiOutlineMan } from "react-icons/ai";
 import {AiOutlineWoman}from "react-icons/ai";
 import {AiOutlineQuestion}from "react-icons/ai";
const Contact=({ firstName, lastName, phone,gender})=>{

    return(
    <div className="contact_box">
        <div className="avatar"><FaUserCircle/></div>
        <div className="contact_info">
    <div className="pib_content">{firstName} {lastName}</div>
    <div className="phone_content"> {phone} </div>
    <div className="gender_content"> {gender==="male" &&(
        <span className="man-icon">
        <AiOutlineMan />
      </span>
    )}
    {gender==="female" &&(
        <span className="women-icon">
        <AiOutlineWoman />
      </span>
    )} 
    {gender===undefined &&(
        <span className="undefined-icon">
        <AiOutlineQuestion />
      </span>
    )}</div>
    </div>
    </div>
    );

    }

export default 	Contact;
