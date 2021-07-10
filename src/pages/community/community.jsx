import React from "react"

import "./community.styles.scss"

import { Item1, Item2, Item3 } from "../../components/community/instagram-items/items"
import Text from "../../components/community/text/text"

function Community () {
    
    return (
		<div className="community-main" id="community">
			<div className="top-div">
				<Text />
				<Item1 />
			</div>
			<div className="middle-div">
				<Item2 />
			</div>
			<div className="bottom-div">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Duis aute irure.
				</p>
				<Item3 />
			</div>
		</div>
    );

}

export default Community;