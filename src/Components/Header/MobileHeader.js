import {
    LocationOnOutlined,
    NavigateNext,
    SearchRounded,
} from "@mui/icons-material";
import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileSidebar from "./MobileSidebar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";

const MobileHeader = ({ user }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const CustomButton = ({ onClick }) => (
        <button onClick={onClick} style={{ display: "none" }}></button>
    );
    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 5,
        nextArrow: <CustomButton />,
        prevArrow: <CustomButton />,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${
                    index + 1
                }, background: #222; color: #bada55`
            );
        },
    };
    const sentence = user?.userAuth?.firstLastName;
    const firstName = sentence?.split(" ")[0];

    return (
        <div className="mobile_header_container">
            <div className="mobile_header_container_">
                <div className="mobile_header_top">
                    <div>
                        <div onClick={() => setShowSidebar(true)}>
                            <TbMenu2 size={27} />
                        </div>
                        {showSidebar && (
                            <div>
                                <MobileSidebar
                                    user={user}
                                    setShowSidebar={setShowSidebar}
                                    show={showSidebar}
                                />
                            </div>
                        )}
                        <div className="header_icon"></div>
                    </div>
                    <div>
                        {user?.authenticated ? (
                            <Link to="/user_profile" className="sign__in_link">
                                <span>
                                    {firstName}
                                    <NavigateNext
                                        style={{
                                            fontSize: "15px",
                                            margin: "5px  5px 0 0",
                                        }}
                                    />
                                </span>
                                <FaRegUser size={20} />
                            </Link>
                        ) : (
                            <Link to="/sign_in" className="sign__in_link">
                                <span>
                                    Sign in{" "}
                                    <NavigateNext
                                        style={{
                                            fontSize: "15px",
                                            margin: "5px  5px 0 0",
                                        }}
                                    />
                                </span>
                                <FaRegUser size={20} />
                            </Link>
                        )}
                        <div className="mobile_cart">
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="mobile_search_holder">
                    <input
                        type="text"
                        placeholder="Search Amazon"
                        className="mobile_search"
                    />
                    <div className="search_icon">
                        <SearchRounded />
                    </div>
                </div>
                <div>
                    <Slider {...settings}>
                        <span className="slider_list">Deals</span>
                        <span className="slider_list">Amazon Basics</span>
                        <span className="slider_list">Best Sellers</span>
                        <span className="slider_list">Books </span>
                        <span className="slider_list">Livestreams</span>
                        <span className="slider_list">Music</span>
                        <span className="slider_list">Video</span>
                        <span className="slider_list">New Release</span>
                        <span className="slider_list">Home</span>
                        <span className="slider_list">Health </span>
                        <span className="slider_list">Gift Cards</span>
                        <span className="slider_list">PC</span>
                        <span className="slider_list">Lists</span>
                    </Slider>
                </div>
            </div>

            <div className="mobile_location">
                <LocationOnOutlined className="mobile_location_icon" />
                <span>Deliver to Nigeria</span>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user?.userData,
    };
};

export default connect(mapStateToProps)(MobileHeader);
