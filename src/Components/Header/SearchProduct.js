import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { SearchProductName } from "../../Auth/Actions/productActions";
import { Close, SearchRounded } from "@mui/icons-material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SearchProduct = ({ products, searchTerm, setSearchTerm }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            searchTerm: "",
        },
        onSubmit: (values) => {
            dispatch(SearchProductName(values.searchTerm));
        },
    });

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleResultClick = (result) => {
        setSearchTerm(result.name);
        const productId = result?._id;
        history.push(`/product/${productId}`);
    };
    const handleCategoryClick = (result) => {
        setSearchTerm(result?.name);
        const categoryId = result?.category?._id;
        history.push(`/products/${categoryId}`);
    };

    const handleClose = () => {
        setSearchTerm("");
    };

    useEffect(() => {
        dispatch(SearchProductName(searchTerm));
    }, [dispatch, searchTerm]);
    return (
        <div className="search_input_container">
            <form onSubmit={formik.handleSubmit} className="input_form">
                <input
                    type="text"
                    name="searchTerm"
                    className="search_input"
                    placeholder={`${searchTerm || "Search Amazon"}`}
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    onBlur={formik.handleBlur}
                />
                {searchTerm !== "" && (
                    <Close className="close_search" onClick={handleClose} />
                )}
                <button className="search_icon" type="submit">
                    <SearchRounded />
                </button>
            </form>
            {products?.length > 0 && (
                <ul className="products_search">
                    {products.map((product) => (
                        <li key={product?._id}>
                            <span onClick={() => handleResultClick(product)}>
                                <SearchRounded className="result_search_icon" />
                                {product?.name?.length > 60 &&
                                    `${product?.name.substring(0, 60)}`}
                            </span>
                            <p onClick={() => handleCategoryClick(product)}>
                                {product?.category?.name}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
            {searchTerm !== "" && (
                <div className="search_overlay" onClick={handleClose}></div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products?.productResults,
    };
};

export default connect(mapStateToProps)(SearchProduct);
