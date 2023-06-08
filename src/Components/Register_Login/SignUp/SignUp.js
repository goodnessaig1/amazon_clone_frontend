/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./SignUp.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { TextInput } from "../../../Utils/Formik";
import { SignUp } from "../../../Auth/Actions/userActions";

const Register = ({ SignUp, requesting, user }) => {
    const history = useHistory();
    // console.log(user);
    return (
        <div className="register_container">
            <div className="register__container">
                <div className="register">
                    <div className="amazon_r_logo">
                        <img
                            src="https://ik.imagekit.io/eqh0cjetc/amazon-image/amazon.png?updatedAt=1684831125202"
                            alt="logo"
                            className="logo_img"
                        />
                    </div>
                    <div className="sign_up_container">
                        <div className="create_account">Create account</div>
                        <div className="sign_up">
                            <Formik
                                initialValues={{
                                    firstLastName: "",
                                    mobileOrEmail: "",
                                    password: "",
                                    confirmPassword: "",
                                }}
                                validationSchema={Yup.object({
                                    firstLastName:
                                        Yup.string().required("Required"),
                                    mobileOrEmail:
                                        Yup.string().required("Required"),
                                    password: Yup.string()
                                        .min(
                                            6,
                                            "!Passwords must  be at least 6 characters."
                                        )
                                        .max(15, "password is too long")
                                        .required("Required"),
                                    confirmPassword: Yup.string()
                                        .min(6, "password is too short")
                                        .max(15, "password is too long")
                                        .required("Required")
                                        .oneOf(
                                            [Yup.ref("password")],
                                            "Passwords must match"
                                        ),
                                })}
                                onSubmit={(
                                    values,
                                    { setSubmitting, setFieldError }
                                ) => {
                                    // console.log(values);
                                    SignUp(
                                        values,
                                        history,
                                        setSubmitting,
                                        setFieldError
                                    );
                                }}
                            >
                                {() => (
                                    <Form>
                                        <TextInput
                                            name="firstLastName"
                                            type="text"
                                            label="Your Name"
                                            placeholder="First and Last name"
                                        />
                                        <TextInput
                                            name="mobileOrEmail"
                                            type="text"
                                            label="Mobile number or email"
                                            placeholder="Mobile or email"
                                        />
                                        <TextInput
                                            name="password"
                                            type="password"
                                            label="Password"
                                            placeholder="At least 6 characters"
                                        />
                                        <TextInput
                                            name="confirmPassword"
                                            type="password"
                                            label="Re-enter password"
                                        />
                                        <div className="sign_in__btn">
                                            {!requesting && (
                                                <button
                                                    type="submit"
                                                    className="sign_in_btn"
                                                >
                                                    Continue
                                                </button>
                                            )}
                                            {requesting && (
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
                            <span>
                                Already have an account?{" "}
                                <Link to="/sign_in" className="terms_link">
                                    Sign in
                                </Link>
                            </span>
                            <span>
                                Buying for work?
                                <Link to="/" className="terms_link">
                                    Create a free business account
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="register_bottom">
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

const mapStateToProps = (state) => {
    return {
        requesting: state.user.SignUp.requesting,
        user: state.user,
    };
};

export default connect(mapStateToProps, { SignUp })(Register);
