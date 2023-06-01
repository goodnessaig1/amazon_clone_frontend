/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import SidebarModal from "./SidebarModal";

const MidHeader = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const handleMenuClick = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <div className="mid_header_container">
            <div className="mid_header_left">
                <div onClick={handleMenuClick}>
                    <TbMenu2 className="menu_icon" />
                    <span>All</span>
                    <SidebarModal
                        setShowSidebar={setShowSidebar}
                        show={showSidebar}
                    />
                </div>
                <span>Today's Deals</span>
                <span>Customer Service</span>
                <span>Registry</span>
                <span>Gift Cards</span>
                <span>Sell</span>
            </div>
            <div className="shop_deals">Shop deals in Electronics</div>
        </div>
    );
};

export default MidHeader;
