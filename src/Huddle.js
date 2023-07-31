import React from "react";
import logo from "./images/logo.svg";
import mock from "./images/illustration-mockups.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Huddle = () => {
  return (
    <div className="huddle">
      <div className="left">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div>
          <img className="mock" src={mock} alt="mock" />
        </div>
      </div>
      <div className="right">
        <h1>Build the Community Your Fans Will Love.</h1>
        <p>
          Huddle re-imagines the way wwe build communities. You have a voice,
          but so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Register</button>
        <div className="icons">
          <div className="icon">
            <FaFacebook style={{width:"20" , height:"20", color:"white"}} />
          </div >
          <div className="icon">
            <FaTwitter  style={{width:"20" , height:"20", color:"white"}}  />
          </div>
          <div className="icon">
            <FaInstagram  style={{width:"20" , height:"20", color:"white"}}  />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Huddle;
