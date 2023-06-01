/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "./Header.css";
import {
    ArrowDropDown,
    LocationOnOutlined,
    SearchRounded,
} from "@mui/icons-material";
import SignInModal from "./SignInModal";

const Header = () => {
    const [optionWidth, setOptionWidth] = useState("50px");
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value != "All") {
            setOptionWidth("135px");
        } else {
            setOptionWidth("50px");
        }
    };

    return (
        <div className="header_container">
            <div className="header_left_container">
                <div className="header_icon" />
                <div className="location_container">
                    <span>Deliver to</span>
                    <div className="location__container">
                        <LocationOnOutlined className="location_icon" />
                        <h4>Nigeria</h4>
                    </div>
                </div>
            </div>
            <div className="header_center">
                <div className="all_options">
                    <select
                        style={{ width: optionWidth }}
                        className="category_options select"
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option className="defaulta" defaultValue="All">
                            All
                        </option>
                        <option value="options1">Arts & Crafts</option>
                        <option value="option1">Books</option>
                        <option value="option2">Boy's Fashion</option>
                        <option value="option3">Computers</option>
                        <option value="option4">
                            Cell Phones and Accessories
                        </option>
                        <option value="option5">Girl's Fashion</option>
                        <option value="option6">Men's Fashion</option>
                        <option value="option7">Toy's & Games</option>
                        <option value="option8">Women's Fashion</option>
                    </select>
                </div>
                <input
                    className="search_input"
                    type="text"
                    placeholder="Search Amazon"
                />
                <div className="search_icon">
                    <SearchRounded />
                </div>
            </div>
            <div className="header_right">
                <div className="language_">
                    <img
                        className="us_flag"
                        src="https://ik.imagekit.io/nz8zngrxv/amazon-image/us_flag1_gkaDhDtTh.png?updatedAt=1685497308987"
                        alt=""
                    />
                    <span className="language__">
                        EN <ArrowDropDown />
                    </span>
                </div>
                <div className="user_sign_in">
                    <span>Hello, sign in</span>
                    <h4>Account & Lists</h4>
                    <div className="sign_in_user">
                        <SignInModal />
                    </div>
                </div>
                <div className="returns_orders">
                    <span>Returns</span>
                    <h4>& Orders</h4>
                </div>
                <div className="cart">
                    <div className="cart_icon">0</div>
                    <span>Cart</span>
                </div>
            </div>
        </div>
    );
};

export default Header;