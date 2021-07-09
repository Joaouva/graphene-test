import React from "react"

import "./recipes.styles.scss"

import { Recipe1, Recipe2, Recipe3, Recipe4, Recipe5 } from "../../components/recipes/recipes-items/recipes-items";
import RecipesText from "../../components/recipes/recipes-text/recipes-text";

function Recipes () {
    
	return (
		<div className="recipes-main">
			<div className="title">
				<RecipesText/>
			</div>
			<div className="recipes">
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
		</div>
	);

}

export default Recipes;