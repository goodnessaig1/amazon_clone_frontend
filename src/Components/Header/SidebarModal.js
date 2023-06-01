import { AccountCircle, Close, Language } from "@mui/icons-material";
import React from "react";

const SidebarModal = ({ show, setShowSidebar }) => {
    const sidebarClass = show ? "sidebar-modal show" : "sidebar-modal";

    return (
        <>
            <div className={sidebarClass}>
                <div>
                    <div className="side_bar_top">
                        <AccountCircle />
                        <h4>Hello, sign in</h4>
                    </div>
                    {/* <div className="close_side_bar"> */}
                    <Close
                        className="close_side_bar"
                        onClick={() => setShowSidebar(false)}
                    />
                    {/* </div> */}
                </div>
                <div className="side_bar_content">
                    <h3>Digital Content & Devices</h3>
                    <span>Amazon Music</span>
                    <span>Kindle E-readers & Books</span>
                    <span>Amazone Appstore</span>
                </div>
                <hr className="hr_" />
                <div className="side_bar_content">
                    <h3>Shop By Department</h3>
                    <span>Electronics</span>
                    <span>Computers</span>
                    <span>Smart Home</span>
                    <span>Arts & Crafts</span>
                </div>
                <hr className="hr_" />
                <div className="side_bar_content">
                    <h3>Programs & Features</h3>
                    <span>Gift Cards</span>
                    <span>Shop By interest</span>
                    <span>Amazone Live</span>
                </div>
                <hr className="hr_" />
                <div className="side_bar_content">
                    <h3>Help & Settings</h3>
                    <span>Your Account</span>
                    <span>
                        <Language />
                        English
                    </span>
                    <span>United States</span>
                    <span>Customer Service</span>
                    <span>Sign in</span>
                </div>
            </div>
            {show && (
                <div
                    className="overlay"
                    onClick={() => setShowSidebar(false)}
                ></div>
            )}
        </>
    );
};

export default SidebarModal;
