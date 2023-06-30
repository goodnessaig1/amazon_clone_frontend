import { Close, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiHomeAlt, BiLogOutCircle } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

const MobileSidebar = ({ show, setShowSidebar, user, categories }) => {
    const history = useHistory();
    const [activeMenu, setActiveMenu] = useState(false);
    useEffect(() => {
        const body = document.querySelector("body");

        if (activeMenu) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }

        return () => {
            body.style.overflow = "auto";
        };
    }, [activeMenu]);
    const toggleSubMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };
    const toggleSideBar = () => {
        setShowSidebar(!show);
    };
    const handleCategoryClick = (categoryId) => {
        setShowSidebar(false);
        history.push(`/products/department/${categoryId}`);
    };
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.5 }}
                    className="sidebar__modal show"
                >
                    <div className="menu">
                        <div className="mobile_sidebar_top">
                            <div className="mobile_sign_in_right">
                                <div></div>
                                <div>
                                    {user?.authenticated ? (
                                        <Link
                                            to="/user/account"
                                            className="authenticated_user_route"
                                        >
                                            Your Account
                                        </Link>
                                    ) : (
                                        <Link
                                            to="/sign_in"
                                            className="sign__in_link"
                                        >
                                            Sign in
                                        </Link>
                                    )}
                                    <FaRegUser size={20} />
                                </div>
                                <Close
                                    onClick={toggleSideBar}
                                    className="close_mobile_sidebar"
                                />
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
                            <span
                                onClick={() =>
                                    handleCategoryClick(
                                        "648252d7b7b3dc2d17bda4dc"
                                    )
                                }
                            >
                                Mobile Phones
                            </span>
                        </div>
                        <hr className="sidebar_hr" />
                        <div className="mobile_sidebar_item">
                            <h3>Top Departments</h3>
                            <ul className="mobile_departments departments__">
                                {categories &&
                                    categories
                                        .slice(
                                            0,
                                            activeMenu ? categories?.length : 4
                                        )
                                        .map((item, index) => (
                                            <li
                                                onClick={() =>
                                                    handleCategoryClick(
                                                        item?._id
                                                    )
                                                }
                                                key={index}
                                            >
                                                {item?.name}
                                            </li>
                                        ))}
                            </ul>
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
                                <span onClick={() => setActiveMenu(false)}>
                                    See Less{" "}
                                    <KeyboardArrowUp className="dropdown_icon" />
                                </span>
                            )}
                            <Link className="sign_out_route" to="/sign_in">
                                <BiLogOutCircle />
                                <span>Sign Out</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {show && <div className="overlay"></div>}
        </>
    );
};

export default MobileSidebar;
