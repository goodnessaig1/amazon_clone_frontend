import { AccountCircle, Close, Language } from "@mui/icons-material";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const sideBarItemOne = [
    {
        id: "648252d7b7b3dc2d17bda4dc",
        name: "Mobile Devices",
    },
    {
        id: "64825066b7b3dc2d17bda4cf",
        name: "Kindle E-readers & Books",
    },
];
const sideBarItemTwo = [
    {
        id: "64825051b7b3dc2d17bda4cc",
        name: "Arts & Crafts",
    },

    {
        id: "6482538fb7b3dc2d17bda4df",
        name: "Electronics",
    },
    {
        id: "64825197b7b3dc2d17bda4d6",
        name: "Computers",
    },
    {
        id: "649b330c069b827eab7b6480",
        name: "Smart Home",
    },
];
const sideBarItemThree = [
    {
        id: "648252d7b7b3dc2d17bda4dc",
        name: "Popular Items",
    },

    {
        id: "648253f1b7b3dc2d17bda4e8",
        name: "Top Deals in Fashion",
    },
    {
        id: "6499f9c5adcb667025376e53",
        name: "Toys for Kid's",
    },
];

const SidebarModal = ({ show, setShowSidebar, user }) => {
    const sidebarClass = show ? "sidebar-modal show" : "sidebar-modal";
    const firstName = user?.userAuth?.firstLastName;
    const history = useHistory();
    const handleCategoryClick = (categoryId) => {
        history.push(`/products/department/${categoryId}`);
    };
    return (
        <>
            <div className={sidebarClass}>
                <div>
                    <div className="side_bar_top">
                        <AccountCircle />
                        {user?.authenticated ? (
                            <h4>Hello, {firstName?.split(" ")[0]}</h4>
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
                    {sideBarItemOne.map((item) => (
                        <span
                            onClick={() => handleCategoryClick(item?.id)}
                            key={item?.id}
                        >
                            {item?.name}
                        </span>
                    ))}
                </div>
                <hr className="hr_" />
                <div className="side_bar_content">
                    <h3>Shop By Department</h3>
                    {sideBarItemTwo.map((item) => (
                        <span
                            onClick={() => handleCategoryClick(item?.id)}
                            key={item?.id}
                        >
                            {item?.name}
                        </span>
                    ))}
                </div>
                <hr className="hr_" />
                <div className="side_bar_content">
                    <h3>Programs & Features</h3>
                    {sideBarItemThree.map((item) => (
                        <span
                            onClick={() => handleCategoryClick(item?.id)}
                            key={item?.id}
                        >
                            {item?.name}
                        </span>
                    ))}
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
