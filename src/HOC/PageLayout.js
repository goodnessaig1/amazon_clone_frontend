import React from "react";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/Header/MobileHeader";
const PageLayout = ({ children }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <div className="header">
                    <Header />
                </div>
                <div className="mobile_header">
                    <MobileHeader />
                </div>
            </div>
            <div>{children}</div>
            <div>Footer</div>
        </div>
    );
};

export default PageLayout;
