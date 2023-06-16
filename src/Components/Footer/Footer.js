import React from "react";
import SignInFooter from "./SignInFooter";
import "./Footer.css";
import FooterMid from "./MidFooter";
import FooterBottom from "./footerBottom";
import MobileFooter from "./MobileFooter";
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <div className="footer__container">
                <SignInFooter />
                <div className="back_to_top">
                    <span onClick={scrollToTop}>Back to top</span>
                </div>
                <FooterMid />
                <FooterBottom />
            </div>
            <div className="mobile_footer">
                <MobileFooter />
            </div>
        </div>
    );
};

export default Footer;
