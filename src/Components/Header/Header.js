/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "./Header.css";
import {
    ArrowDropDown,
    LocationOnOutlined,
    SearchRounded,
} from "@mui/icons-material";
import SignInModal from "./SignInModal";
import { getUserAuth } from "../../Auth/Actions/userActions";
import { connect, useDispatch } from "react-redux";
import { GetCategories } from "../../Auth/Actions/productActions";
import { useHistory } from "react-router-dom";

const Header = ({ user, categories }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getUserAuth());
        dispatch(GetCategories());
    }, []);

    const [optionWidth, setOptionWidth] = useState("50px");
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (e) => {
        const categoryId = e.target.value;
        setSelectedOption(categoryId);
        if (categoryId != "All") {
            history.push(`/products/department/${categoryId}`);
            setOptionWidth("135px");
        } else {
            history.push(`/`);
            setOptionWidth("50px");
        }
    };
    const firstName = user?.userAuth?.firstLastName;

    return (
        <div className="header_container">
            <div className="header_left_container">
                <div className="header_icon">
                    <div></div>
                </div>
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
                        {categories &&
                            categories.map((category, index) => (
                                <option
                                    key={category?._id}
                                    value={category?._id}
                                    onClick={(e) => console.log(category._id)}
                                    className="category__options options"
                                >
                                    {category?.name}
                                </option>
                            ))}
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
                    {user?.authenticated ? (
                        <span>Hello, {firstName?.split(" ")[0]}</span>
                    ) : (
                        <span>Hello, sign in</span>
                    )}
                    <h4>Account & Lists</h4>
                    <div className="sign_in_user">
                        <SignInModal user={user} />
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

const mapStateToProps = (state) => {
    return {
        user: state.user?.userData,
        categories: state.products.categories,
    };
};

export default connect(mapStateToProps)(Header);
