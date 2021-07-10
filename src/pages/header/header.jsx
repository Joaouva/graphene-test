import React from "react";

import Main from "../../components/header/main/main";
import Nav from "../../components/header/nav/nav";

import "./header.styles.scss";

function Header () {
	return (
		<div className="header-main">
			<Nav />
			<Main />
		</div>
	);
};

export default Header;
