/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./SignIn.css";
import { TextInput } from "../../../Utils/Formik";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const StepOne = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    };

    return (
        <div className="signin_container">
            <div className="signin__container">
                <div className="signin_holder">
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
                            <Formik
                                initialValues={props.data}
                                validationSchema={Yup.object({
                                    mobileOrEmail:
                                        Yup.string().required("Required"),
                                })}
                                onSubmit={handleSubmit}
                            >
                                {() => (
                                    <Form>
                                        <TextInput
                                            name="mobileOrEmail"
                                            type="text"
                                            label="Mobile number or email"
                                            placeholder="Mobile phone number or email"
                                        />
                                        <div className="sign_in__btn">
                                            <button
                                                type="submit"
                                                className="sign_in_btn"
                                            >
                                                Continue
                                            </button>
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
                    © 1996-2023, Amazon_clone.com, Inc. or its affiliates
                </span>
            </div>
        </div>
    );
};
