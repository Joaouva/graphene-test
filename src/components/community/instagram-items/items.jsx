import React from "react";
import Reveal from "react-reveal/Reveal";


import "./items.style.scss"

import Instagram1 from "../../../assets/images/instagram1.svg"
import Inst1Likes from "../../../assets/images/intagram1_likes.svg"
import Instagram2 from "../../../assets/images/instagram2.svg";
import Instagram3 from "../../../assets/images/instagram3.svg";

import Background1 from "../../../assets/images/detail01.svg"
import Background2 from "../../../assets/images/detail02.svg"
import Background3 from "../../../assets/images/detail03.svg"

function Item1 () {
	
	return (
		<Reveal bottom>
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
							Itâs taco Tuesday! These tacos from
							@jesseszewczyk have no added sugars and are
							SO good ð®. Find the recipe from the link in
							our bio! ð¸: @taylormillerphoto
						</p>
						<img
							src={Inst1Likes}
							alt="hang grabbing a taco in a table with food"
						/>
					</div>
				</div>
			</div>
		</Reveal>
	);

}

const Item2 = () => {
	return (
		<Reveal bottom>
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
							Waffle sticks in Copenhagen! ð©ð°ð Milk
							chocolate with sprinkles, dark chocolate with
							coconut and milk chocolate with peanuts! [ð·:
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
		</Reveal>
	);
};

const Item3 = () => {
	return (
		<Reveal bottom>
			<div className="item-main">
				<div className="text-frame">
					<div className="item-text">
						<h6>@buzzfeedfood</h6>
						<p>
							Getting into long weekend mode like ð¤
							#pancitpalabok (ð· @jeepneynyc)
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
		</Reveal>
	);
};

export { Item1, Item2, Item3 }
