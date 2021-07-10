import { React } from "react";


import "./recipes.styles.scss";

import {
	Recipe1,
	Recipe2,
	Recipe3,
	Recipe4,
	Recipe5,
} from "../../components/recipes/recipes-items/recipes-items";

import RecipesText from "../../components/recipes/recipes-text/recipes-text";

import Next from "../../assets/images/next.png"
import Back from "../../assets/images/back.png"

function Recipes() {
	const scrollRight = () => {
		document.getElementById("container").scrollLeft += 300;
	};

	const scrollLeft = () => {
		document.getElementById("container").scrollLeft -= 300;
	};


	return (
		<div className="recipes-main" id="recipes">
			<div className="title">
				<RecipesText />
			</div>
			<div className="recipes" id="container">
				<div>
					<Recipe1 />
				</div>
				<div>
					<Recipe2 />
				</div>
				<div className="recipe3">
					<Recipe3 />
				</div>
				<div>
					<Recipe4 />
				</div>
				<div>
					<Recipe5 />
				</div>
			</div>
			<div className="scroll-btn">
				<button onClick={scrollLeft} type="button">
					<img src={Back} alt="Previous" />
				</button>
				<button onClick={scrollRight} type="button">
					<img src={Next} alt="Next" />
				</button>
			</div>
		</div>
	);
}

export default Recipes;
