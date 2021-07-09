import React from "react";

import "./right-section.styles.scss"

import SocialIcons from "../../../assets/images/social_icons.svg"


function RightSection() {
    
    return (
        <div className="main-div">
            <div className="logo-div">
                <h2>THIS IS THE</h2>
                <h1>LOGO</h1>
            </div>
            <div className="social-div">
            <img src={SocialIcons} alt="Social media icons"/>
            </div>
        </div>
    )
}


export default RightSection;