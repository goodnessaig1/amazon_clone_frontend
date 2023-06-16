import { Language } from "@mui/icons-material";
import React from "react";

const FooterMid = () => {
    return (
        <div className="mid__container">
            <div className="mid_container">
                <div>
                    <h4>Get to Know Us</h4>
                    <span>Careers</span>
                    <span>Blog</span>
                    <span>About Amazon</span>
                    <span>Investor Relations</span>
                    <span>Amazon Devices</span>
                    <span>Amazon Science</span>
                </div>
                <div>
                    <h4>Make Money with Us</h4>
                    <span>Sell products on Amazon</span>
                    <span>Sell on Amazon Business</span>
                    <span>Sell apps on Amazon</span>
                    <span>Become an Affiliate</span>
                    <span>Advertise Your Products</span>
                    <span>Self-Publish with Us</span>
                    <span>Host an Amazon Hub</span>
                    <span>See More Make Money with us</span>
                </div>
                <div>
                    <h4>Amazon Payment Products</h4>
                    <span>Amazon Business Card</span>
                    <span>Shop with Points</span>
                    <span>Reload Your Balance</span>
                    <span>Amazon Currency Converter</span>
                </div>
                <div>
                    <h4>Let Us Help You</h4>
                    <span>Amazon and COVID-19</span>
                    <span>Your Account</span>
                    <span>Your Orders</span>
                    <span>Shipping Rates & Policies</span>
                    <span>Returns & Replacements</span>
                    <span>Manage Your Content and Devices</span>
                    <span>Amazon Assistant</span>
                    <span>Help</span>
                </div>
            </div>
            <hr className="hr__" />
            <div className="logo_bottom">
                <div className="footer_logo"></div>
                <div className="footer_others">
                    <span>
                        <Language className="language_icon" /> English
                    </span>
                    <span>$ USD-U.S Dollar</span>
                    <span>United States</span>
                </div>
            </div>
        </div>
    );
};

export default FooterMid;
