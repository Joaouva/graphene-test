import React from "react";
import Fade from "react-reveal/Fade";


import "./items.style.scss"

import Instagram1 from "../../../assets/images/instagram1.svg"
import Inst1Likes from "../../../assets/images/intagram1_likes.svg"
import Instagram2 from "../../../assets/images/instagram2.svg";
import Instagram3 from "../../../assets/images/instagram3.svg";

import Background1 from "../../../assets/images/detail01.svg"
import Background2 from "../../../assets/images/detail02.svg"
import Background3 from "../../../assets/images/detail03.svg"

const Item1 = () => {
	
	return (
		<Fade bottom>
			<div className="item-main">
				<img
					className="background1"
					src={Background1}
					alt="dots background detail"
				/>
				<img
					className="background2"
					src={Background2}
					alt="background detail"
				/>
				<div className="item-image">
					<img
						src={Instagram1}
						alt="hang grabbing a taco in a table with food"
					/>
				</div>

				<div className="text-frame">
					<div className="item-text">
						<h6>@buzzfeedfood</h6>
						<p>
							It’s taco Tuesday! These tacos from
							@jesseszewczyk have no added sugars and are
							SO good 🌮. Find the recipe from the link in
							our bio! 📸: @taylormillerphoto
						</p>
						<img
							src={Inst1Likes}
							alt="hang grabbing a taco in a table with food"
						/>
					</div>
				</div>
			</div>
		</Fade>
	);

}

const Item2 = () => {
	return (
		<Fade bottom>
			<div className="item-main">
				<img
					className="background3"
					src={Background3}
					alt="background detail"
				/>
				<div className="text-frame">
					<div className="item-text">
						<h6>@love_food</h6>
						<p>
							Waffle sticks in Copenhagen! 🇩🇰😍 Milk
							chocolate with sprinkles, dark chocolate with
							coconut and milk chocolate with peanuts! [📷:
							@foodwithmichel] #lovefoodo
						</p>
						<img
							src={Inst1Likes}
							alt="hang grabbing a taco in a table with food"
						/>
					</div>
				</div>
				<div className="item-image">
					<img
						src={Instagram2}
						alt="hang grabbing a taco in a table with food"
					/>
				</div>
			</div>
		</Fade>
	);
};

const Item3 = () => {
	return (
		<Fade bottom>
			<div className="item-main">
				<div className="text-frame">
					<div className="item-text">
						<h6>@buzzfeedfood</h6>
						<p>
							Getting into long weekend mode like 🍤
							#pancitpalabok (📷 @jeepneynyc)
						</p>
						<img
							src={Inst1Likes}
							alt="hang grabbing a taco in a table with food"
						/>
					</div>
				</div>
				<div className="item-image">
					<img
						src={Instagram3}
						alt="hang grabbing a taco in a table with food"
					/>
				</div>
			</div>
		</Fade>
	);
};

export { Item1, Item2, Item3 }
