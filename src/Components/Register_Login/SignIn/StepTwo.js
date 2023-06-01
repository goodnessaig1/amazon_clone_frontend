/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./SignIn.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { RotatingLines } from "react-loader-spinner";

export const StepTwo = (props) => {
    const handleChange = (values) => {
        props.prev(values);
    };
    let isRequesting = props.requesting;
    return (
        <div className="signin_container">
            <div className="signin__container">
                <div>
                    <div className="amazon_r_logo">
                        <img
                            src="https://ik.imagekit.io/eqh0cjetc/amazon-image/amazon.png?updatedAt=1684831125202"
                            alt="logo"
                            className="logo_img"
                        />
                    </div>
                    <div className="sign_in_container">
                        <div className="create_account">Sign In</div>
                        <div className="sign_in">
                            <div
                                className="mobile_number"
                                onClick={() =>
                                    handleChange(props.data?.mobileOrEmail)
                                }
                            >
                                {props.data?.mobileOrEmail} <span>Change</span>
                            </div>
                            <Formik
                                initialValues={props.data}
                                validationSchema={Yup.object({
                                    password: Yup.string()
                                        .min(
                                            6,
                                            "!Passwords must  be at least 6 characters."
                                        )
                                        .required("Required"),
                                })}
                                onSubmit={(values) => {
                                    props.next(values, true);
                                }}
                            >
                                {() => (
                                    <Form>
                                        <div className="sign_in_inputs">
                                            <div className="label_forgot">
                                                <label>Password</label>
                                                <Link
                                                    className="forgot_link"
                                                    to="/forgot_password"
                                                >
                                                    Forgot your Password?
                                                </Link>
                                            </div>
                                            <Field
                                                className="inputs"
                                                type="password"
                                                name="password"
                                                placeholder="At least 6 characters"
                                            />
                                        </div>
                                        <div className="sign_in__btn">
                                            {!isRequesting && (
                                                <button
                                                    type="submit"
                                                    className="sign_in_btn"
                                                >
                                                    Sign In
                                                </button>
                                            )}
                                            {isRequesting && (
                                                <RotatingLines
                                                    strokeColor="#c45500"
                                                    strokeWidth="5"
                                                    animationDuration="0.85"
                                                    width="30"
                                                    visible={true}
                                                />
                                            )}
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="terms_conditions">
                            <span>
                                By creating an account, you agree to Amazon's
                            </span>
                            <span>
                                <Link to="/" className="terms_link">
                                    Conditions of Use
                                </Link>{" "}
                                and{" "}
                                <Link to="/" className="terms_link">
                                    Privacy Notice.
                                </Link>
                            </span>
                        </div>
                        <div className="sign_in_bottom">
                            <Link to="/" className="terms_link">
                                <div className="audio-wrapper">
                                    <span className="play-button"></span>
                                    <span className="text_">Need help?</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="new_to_amazon">
                        <div className="line"></div>
                        <div className="text">New to Amazon?</div>
                        <div className="line"></div>
                    </div>
                    <Link to="/sign_up" className="create_new_account">
                        Create your Amazon account
                    </Link>
                </div>
            </div>
            <div className="signin_bottom">
                <div className="terms">
                    <Link to="/" className="terms__link">
                        Conditions of Use
                    </Link>
                    <Link to="/" className="terms__link">
                        Privacy Notice
                    </Link>
                    <Link to="/" className="terms__link">
                        Help
                    </Link>
                </div>
                <span>
                    © 1996-2023, Amazonclone.com, Inc. or its affiliates
                </span>
            </div>
        </div>
    );
};
