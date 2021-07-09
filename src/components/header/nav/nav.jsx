import React from "react";

import "./nav.styles.scss"

function Nav() {
    
    return (
		<div className="nav">
			<div className="nav-left">
				<h5>LOGO</h5>
				<h6>ABOUT</h6>
				<h6>COMMUNITY</h6>
				<h6>LOCATION</h6>
				<h6>OUR MENUS</h6>
				<h6>RECIPES</h6>
			</div>
			<div className="nav-right">
				<h6>CONTACT</h6>
				<h6>LOGIN</h6>
			</div>
		</div>
    );
}

export default Nav;