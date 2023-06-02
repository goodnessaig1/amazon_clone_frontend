/* eslint-disable react/no-unescaped-entities */
import { KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SignInModal = ({ user }) => {
    return (
        <div className="sign_in_modal">
            <div className="sign_in_top">
                {user?.authenticated ? (
                    <div className="authenticated_user">
                        <span>Who's Shopping? Selec a Profile</span>
                        <span>
                            Manage Profiles <KeyboardArrowRight />
                        </span>
                    </div>
                ) : (
                    <>
                        <Link to="/sign_in" className="sign_in_link">
                            Sign in
                        </Link>
                        <div>
                            New customer?{" "}
                            <Link to="/sign_up" className="sign_up_link">
                                Start here.
                            </Link>
                        </div>
                    </>
                )}
            </div>
            <div className="sign_in_items">
                <div className="sign_in__items">
                    <h5>Your Lists</h5>
                    <span>Create a List</span>
                    <span>Find a list or registry</span>
                </div>
                <div className="sign_in__items sign_in_it">
                    <h5>Your Account</h5>
                    <span>Account</span>
                    <span>Orders</span>
                    <span>Recommendations</span>
                    <span>Browsing History</span>
                    <span>Watchlist</span>
                    <span>Video Purchases & Rentals</span>
                    <span>Kindle Unlimited</span>
                    <span>Content & Devices</span>
                    <span>Subscribe & Save items</span>
                    <span>Membership & Subscription</span>
                    <span>Music Libary</span>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;
