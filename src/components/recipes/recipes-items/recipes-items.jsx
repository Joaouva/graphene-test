import React from "react";

import "./recipes-items.styles.scss";

import Recipe1Image from "../../../assets/images/recipe1.svg";
import Recipe2Image from "../../../assets/images/recipe2.png";
import Recipe3Image from "../../../assets/images/recipe3.png";
import Recipe4Image from "../../../assets/images/recipe4.png";
import Recipe5Image from "../../../assets/images/recipe5.png";



const Recipe1 = () => {

    return (
		<div className="recipe-large">
			<div className="recipe-top-large">
				<div className="recipe-image">
					<div className="recipe-serving">
						<h1>4</h1>
						<h2>SERVINGS</h2>
					</div>
					<img
						src={Recipe1Image}
						alt="CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST"
					/>
				</div>

				<div className="recipe-btn"></div>
			</div>
			<div className="recipe-text">
				<h4>DIFFICULTY</h4>
				<h1>CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST</h1>
				<p>
					Make a speedy version of romesco sauce with its famous
					almond and red pepper flavours. Serve on sourdough and
					add broccoli for a colourful, veget…
				</p>
				<h3>USER FULL NAME</h3>
			</div>
		</div>
    );
}

const Recipe2 = () => {
	return (
		<div className="recipe">
			<div className="recipe-top">
				<div className="recipe-image">
					<div className="recipe-serving">
						<h1>2</h1>
						<h2>SERVINGS</h2>
					</div>
					<img
						src={Recipe2Image}
						alt="CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST"
					/>
				</div>
				<div className="recipe-btn"></div>
			</div>
			<div className="recipe-text">
				<h4>DIFFICULTY</h4>
				<h1>PINEAPPLE FRUIT SALAD WITH FRESH CREAM</h1>
				<p>
					The pineapple juice is the star of the dressing and
					what gives it such a refreshing and sweet taste.
					Pineapple juice is kno
				</p>
				<h3>USER FULL NAME</h3>
			</div>
		</div>
	);
};

const Recipe3 = () => {
	return (
		<div className="recipe">
			<div className="recipe-top">
				<div className="recipe-image">
					<div className="recipe-serving">
						<h1>2</h1>
						<h2>SERVINGS</h2>
					</div>
					<img
						src={Recipe3Image}
						alt="CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST"
					/>
				</div>
				<div className="recipe-btn"></div>
			</div>
			<div className="recipe-text">
				<h4>DIFFICULTY</h4>
				<h1>CHEESE, SPINACH & MUSHROOM STUFFED CHI…</h1>
				<p>
					Amp up this dinner party classic by stuffing three
					types of cheese, spinach and mushroom into the chicken…
				</p>
				<h3>USER FULL NAME</h3>
			</div>
		</div>
	);
};

const Recipe4 = () => {
	return (
		<div className="recipe">
			<div className="recipe-top">
				<div className="recipe-image">
					<div className="recipe-serving">
						<h1>8</h1>
						<h2>SERVINGS</h2>
					</div>
					<img
						src={Recipe4Image}
						alt="CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST"
					/>
				</div>
				<div className="recipe-btn"></div>
			</div>
			<div className="recipe-text">
				<h4>DIFFICULTY</h4>
				<h1>
					FETA AND PEACH <br></br>COUSCOUS
				</h1>
				<p>
					Grab just four ingredients to make this easy, light
					lunch and enjoy a taste of summer. The combination of
					peaches, feta...
				</p>
				<h3>USER FULL NAME</h3>
			</div>
		</div>
	);
};

const Recipe5 = () => {
	return (
		<div className="recipe">
			<div className="recipe-top">
				<div className="recipe-image">
					<div className="recipe-serving">
						<h1>8</h1>
						<h2>SERVINGS</h2>
					</div>
					<img
						src={Recipe5Image}
						alt="CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST"
					/>
				</div>
				<div className="recipe-btn"></div>
			</div>
			<div className="recipe-text">
				<h4>DIFFICULTY</h4>
				<h1>
					FETA AND PEACH <br></br>COUSCOUS
				</h1>
				<p>
					Grab just four ingredients to make this easy, light
					lunch and enjoy a taste of summer. The combination of
					peaches, feta...
				</p>
				<h3>USER FULL NAME</h3>
			</div>
		</div>
	);
};


export { Recipe1, Recipe2, Recipe3, Recipe4, Recipe5 };
