import React from "react";

import "./recipes-text.styles.scss"


function RecipesText() {
    
    return (
		<div className="recipes-text-main">
			<div className="recipes-text-left">
				<h2>POPULAR</h2>
				<h1>RECIPES</h1>
				<hr></hr>
				<button>SEE ALL</button>
			</div>
			<div className="recipes-text-right">
				<h2>DO YOU WANT TO SHARE YOUR OWN RECIPE?</h2>
				<button>SEND IT NOW</button>
			</div>
		</div>
    );
}

export default RecipesText;