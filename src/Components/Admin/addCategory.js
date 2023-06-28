import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import "./addProduct.css";
import { connect } from "react-redux";
import Header from "../Header/Header";
import { AddCategory } from "../../Auth/Actions/productActions";
import { ProgressBar } from "react-loader-spinner";
import MobileHeader from "../Header/MobileHeader";

const NewCategory = ({ AddCategory, requesting }) => {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="mobile_header">
                <MobileHeader />
            </div>
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                }}
                onSubmit={(values) => {
                    AddCategory(values);
                }}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="add_product_container">
                            <div>
                                <h3>Category Management</h3>
                            </div>
                            <div className="add_product__container">
                                <div className="product_container">
                                    <label htmlFor="name">Category Name</label>
                                    <Field
                                        type="text"
                                        className="product_input"
                                        name="name"
                                        placeholder="Category Name"
                                    />
                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div className="product_container">
                                    <label htmlFor="name">Description</label>
                                    <Field
                                        type="text"
                                        className="product_input"
                                        name="description"
                                        placeholder="Description"
                                    />
                                    <ErrorMessage
                                        name="description"
                                        component="div"
                                    />
                                </div>

                                <div className="upload_button">
                                    {!requesting && (
                                        <button
                                            className="upload_btn"
                                            type="submit"
                                        >
                                            Create Category
                                        </button>
                                    )}
                                    {requesting && (
                                        <ProgressBar
                                            height="80"
                                            width="80"
                                            ariaLabel="progress-bar-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="progress-bar-wrapper"
                                            borderColor="#febd69"
                                            barColor="#ffad43"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        requesting: state.products.AddCategory.requesting,
    };
};

export default connect(mapStateToProps, { AddCategory })(NewCategory);
