import React, { useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import "./addProduct.css";
import { connect, useDispatch } from "react-redux";
import Header from "../Header/Header";
import { AddBrand, GetCategories } from "../../Auth/Actions/productActions";
import { ProgressBar } from "react-loader-spinner";
import MobileHeader from "../Header/MobileHeader";

const NewBrand = ({ categories, AddBrand, requesting }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetCategories());
    }, []);
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
                    category: "",
                }}
                onSubmit={(values) => {
                    AddBrand(values);
                }}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="add_product_container">
                            <div>
                                <h3>Brand Management</h3>
                            </div>
                            <div className="add_product__container">
                                <div className="product_container">
                                    <label htmlFor="name">Brand Name</label>
                                    <Field
                                        type="text"
                                        className="product_input"
                                        name="name"
                                        placeholder="Brand Name"
                                    />
                                    <ErrorMessage name="name" component="div" />
                                </div>

                                <div className="product_container">
                                    <label htmlFor="">Category</label>
                                    <Field
                                        as="select"
                                        className="product_select"
                                        style={{ color: "black" }}
                                        id="category"
                                        name="category"
                                    >
                                        <option defaultValue="">
                                            Select category
                                        </option>
                                        {categories &&
                                            categories.map((category) => (
                                                <option
                                                    key={category?._id}
                                                    value={category?._id}
                                                >
                                                    {category?.name}
                                                </option>
                                            ))}
                                    </Field>
                                    <ErrorMessage
                                        name="category"
                                        component="div"
                                    />
                                </div>

                                <div className="upload_button">
                                    {!requesting && (
                                        <button
                                            className="upload_btn"
                                            type="submit"
                                        >
                                            Create Brand
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
        categories: state.products.categories,
        requesting: state.products.AddBrand.requesting,
    };
};

export default connect(mapStateToProps, { AddBrand })(NewBrand);
