import React from "react"
import LeftSection from "../../components/footer/left-section/left-section"
import RightSection from "../../components/footer/right-section/right-section";

import "./footer.styles.scss"


function Footer () {
    
    return (
		<div className="footer-main" id="contact">
			<div className="left-section">
				<LeftSection />
            </div>
            <div className="right-section">
                <RightSection/>
            </div>
		</div>
    );

}

export default Footer;