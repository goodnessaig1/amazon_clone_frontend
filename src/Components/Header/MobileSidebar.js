import { Close, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

const MobileSidebar = ({ show, setShowSidebar }) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleSubMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };
    const toggleSideBar = () => {
        setShowSidebar(!show);
    };
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.5 }}
                    className="sidebar-modal show"
                >
                    <div className="menu">
                        <div className="mobile_sidebar_top">
                            <div className="mobile_sign_in_right">
                                <div></div>
                                <div>
                                    <span>Sign in</span>
                                    <FaRegUser size={20} />
                                    <Close
                                        onClick={toggleSideBar}
                                        className="close_mobile_sidebar"
                                    />
                                </div>
                            </div>
                            <div className="browse_amazon">
                                <div>Browse</div>
                                <h5>Amazon</h5>
                            </div>
                        </div>
                        <div className="mobile_side_bar_item">
                            <h3>Amazon Home</h3>
                            <BiHomeAlt size={22} color="gray" />
                        </div>
                        <hr className="sidebar_hr" />
                        <div className="mobile_sidebar_item">
                            <h3>Trending</h3>
                            <span>Mobile Phones</span>
                        </div>
                        <hr className="sidebar_hr" />
                        <div className="mobile_sidebar_item">
                            <h3>Top Departments</h3>
                            <span>Home</span>
                            <span>Health & Household</span>
                            <span>Books</span>
                            <span>PC</span>
                            {!activeMenu && (
                                <span
                                    onClick={() =>
                                        toggleSubMenu("all_departments")
                                    }
                                >
                                    See All{" "}
                                    <KeyboardArrowDown className="dropdown_icon" />
                                </span>
                            )}
                            {activeMenu === "all_departments" && (
                                <>
                                    <span>Clothing & Shoes</span>
                                    <span>Electronics</span>
                                    <span>Computers</span>
                                    <span>Beauty, Health Care</span>
                                    <span> Our Brands</span>
                                    <span onClick={() => setActiveMenu(null)}>
                                        See Less{" "}
                                        <KeyboardArrowUp className="dropdown_icon" />
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {show && <div className="overlay"></div>}
        </>
    );
};

export default MobileSidebar;