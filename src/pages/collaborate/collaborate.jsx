import React from "react";

import "./collaborate.styles.scss"

import Left from "../../components/collaborate/left/left"
import Form from "../../components/collaborate/form/form"

function Collaborate () {
    
    return (
		<div className="collaborate-main">
			<div>
				<Left />
			</div>

			<div>
				<Form />
			</div>
		</div>
    );

}

export default Collaborate;