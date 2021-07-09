import React from "react"

import "./main.styles.scss"

import Image from "../../../assets/images/background_header.svg"

const Main = () => {

    return (
		<div className="main-div">
			<div className="image-div"></div>
			<img src={Image} alt="fresh food" />
			<div className="text-div">
				<h2>THE BEST FOODIE</h2>
				<h1>EXPERIENCE</h1>
				<h3>NOW IN LONDON</h3>
			</div>
		</div>
    );
}

export default Main;