import React from "react";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/Header/MobileHeader";
import MidHeader from "../Components/Header/MidHeader";
import Footer from "../Components/Footer/Footer";
const PageLayout = ({ children }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <div className="header">
                    <Header />
                    <MidHeader />
                </div>
                <div className="mobile_header">
                    <MobileHeader />
                </div>
            </div>
            <div>{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default PageLayout;
