import React from "react";
import { Link } from "react-router-dom";

const SignInFooter = () => {
    return (
        <div className="sign_in_footer">
            <div className="sign_in__footer">
                <span>See personalized recommendations</span>
                <Link to="/sign_in" className="footer_sign_in">
                    Sign in
                </Link>
                <span>
                    New customer ?{" "}
                    <Link to="/sign_up" className="sign_up_link">
                        Start here.
                    </Link>{" "}
                </span>
            </div>
        </div>
    );
};

export default SignInFooter;
