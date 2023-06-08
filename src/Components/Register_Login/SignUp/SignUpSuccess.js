import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const SignUpSuccess = () => {
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push("/sign_in");
        }, 8000);
    }, [history]);

    return (
        <div className="success_container">
            <img
                src="https://ik.imagekit.io/eqh0cjetc/amazon-image/amazon.png?updatedAt=1684831125202"
                alt="logo"
                className="logo_img"
            />
            <div>
                <h4>Registration Successful</h4>
                <p>You will be redirected to the sign in page shortly</p>
            </div>
        </div>
    );
};

export default SignUpSuccess;
