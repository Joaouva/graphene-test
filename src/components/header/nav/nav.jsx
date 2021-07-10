import React from "react";
import { Link } from "react-scroll";

import "./nav.styles.scss"

function Nav() {
    
    return (
		<div className="nav">
			<div className="nav-left">
				<h5>LOGO</h5>
				<h6>ABOUT</h6>
				<Link
					activeClass="active"
					to="community"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					COMMUNITY
				</Link>
				<Link
					activeClass="active"
					to="location"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					LOCATION
				</Link>
				<h6>OUR MENUS</h6>
				<Link
					activeClass="active"
					to="recipes"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					RECIPES
				</Link>
			</div>
			<div className="nav-right">
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					CONTACT
				</Link>
				<h6>LOGIN</h6>
			</div>
		</div>
    );
}

export default Nav;