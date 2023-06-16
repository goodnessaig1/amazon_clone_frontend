import { ArrowDropUp, Language } from "@mui/icons-material";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MobileFooter = ({ user }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="mobile_footer_container">
            <div className="back__to_top">
                <span onClick={scrollToTop}>
                    <ArrowDropUp />
                    <p>TOP OF PAGE</p>
                </span>
            </div>
            <div className="mobile_footer_mid">
                <div className="footer_mid_items">
                    <div>
                        <span>Amazon.com</span>
                        <span>Your Lists</span>
                        <span>Find a Gift</span>
                        <span>Your Subscribe & Save</span>
                        <span>Sell products on Amazon</span>
                        <span>Returns</span>
                        <span>Customer Service</span>
                        <span>Help</span>
                    </div>
                    <div>
                        <span>Your Orders</span>
                        <span>Gift Cards & Registry</span>
                        <span>Your Account</span>
                        <span>Browsing History</span>
                        <span>Your Recommendations</span>
                        <span>1-Click Settings</span>
                        <span>Your Recalls and Pfoduct Safety Alerts</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="mobile_footer_bottom">
                <div className="footer__others">
                    <span>
                        <Language className="language_icon" /> English
                    </span>
                    <span>$ USD-U.S Dollar</span>
                    <span>
                        <img
                            className="us_flag"
                            src="https://ik.imagekit.io/nz8zngrxv/amazon-image/us_flag1_gkaDhDtTh.png?updatedAt=1685497308987"
                            alt=""
                        />{" "}
                        United States
                    </span>
                </div>
                <div>Switch Accounts</div>
                {user?.authenticated ? (
                    <Link to="/sign_in">Sign Out</Link>
                ) : (
                    <Link to="/sign_in">Sign In</Link>
                )}
                <div className="terms__conditions">
                    <div>
                        <span>Conditions of Use</span>
                        <span>Privacy Notice</span>
                        <span>Your Ads Privacy Choices</span>
                    </div>
                    <div>© 1996-2023, Amazon.com, Inc. or its affiliates</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user?.userData,
    };
};

export default connect(mapStateToProps)(MobileFooter);
