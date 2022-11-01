import React from "react";
import './style.css';
import facebook from "../navigation/images/facebook.svg";
import instagram from "../navigation/images/instagram.svg"
import twitter from "../navigation/images/twitter.svg"
import linkeIn from "../navigation/images/linkedin.svg"
import email from "../navigation/images/email.svg"

function Navigation() {
    return (
      <div className="sideBar">
        <h1>Milton</h1>
        <hr/>
        <p className="smallText">Denali is a simple responsive blog template.<br/>
         Easily add new posts using the Editor or change <br/> 
         layout and design using the Designer.</p>
         <hr/>
         <a href="1">HOME</a>
         <a href="2">ABOUT</a>
         <a href="3">CONTACT</a>
         <hr/>
         <div className="images">
          <img src={facebook} alt=""></img>
          <img src={instagram} alt=""></img>
          <img src={twitter} alt=""></img>
          <img src={linkeIn} alt=""></img>
          <img src={email} alt=""></img>
         </div>
         <p className="smallText">BUILT WITH WEBFLOW</p>
      </div>
    );
  }
  
  export default Navigation;
  