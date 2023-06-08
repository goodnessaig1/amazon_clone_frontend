import { AccountCircle, Close, Language } from "@mui/icons-material";
import React from "react";

const SidebarModal = ({ show, setShowSidebar, user }) => {
    const sidebarClass = show ? "sidebar-modal show" : "sidebar-modal";
    const sentence = user?.userAuth?.firstLastName;
    const firstName = sentence?.split(" ")[0];
    return (
        <>
            <div className={sidebarClass}>
                <div>
                    <div className="side_bar_top">
                        <AccountCircle />
                        {user?.authenticated ? (
                            <h4>Hello, {firstName}</h4>
                        ) : (
                            <h4>Hello, sign in</h4>
                        )}
                    </div>
                    <Close
                        className="close_side_bar"
                        onClick={() => setShowSidebar(false)}
                    />
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
