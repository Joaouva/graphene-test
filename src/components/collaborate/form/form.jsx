import React from "react";

import "./form.styles.scss"
import Background from "../../../assets/images/bg-detail.png"

function Form() {
    
    return (
		<div className="form-main">
			<img
				className="background"
				src={Background}
				alt="dots background detail"
			/>
			<form className="form">
				<div className="form-left">
					<label>
						NAME
						<input
							type="text"
							name="name"
							placeholder="Name"
						/>
					</label>

					<label>
						PHONE
						<input
							type="text"
							name="phone"
							placeholder="Phone"
						/>
					</label>
					<label>
						EXPERIENCE
						<input
							type="text"
							name="experience"
							placeholder="Select"
						/>
					</label>
				</div>
				<div className="form-right">
					<label>
						SURNAME
						<input
							type="text"
							name="surname"
							placeholder="Surname"
						/>
					</label>

					<label>
						EMAIL ADDRESS
						<input
							type="text"
							name="email_address"
							placeholder="Email"
						/>
					</label>
					<label>
						WHERE DID YOU HEAR ABOUT US?
						<input
							type="text"
							name="where"
							placeholder="Select"
						/>
					</label>
					<input
						className="submit-button"
						type="submit"
						value="SEND"
					/>
				</div>
			</form>
		</div>
    );
}

export default Form;