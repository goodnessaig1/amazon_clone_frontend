import React, { useEffect } from "react";
import "./ProductsCategory.css";
import { useParams } from "react-router-dom";
import PageLayout from "../../../HOC/PageLayout";
import { connect, useDispatch } from "react-redux";
import { GetProductByCategory } from "../../../Auth/Actions/productActions";
import ProductsResults from "./ProductsResults";
import {
    RiStarFill,
    RiStarLine,
    RiStarHalfLine,
    RiStarHalfSFill,
} from "react-icons/ri";
import { RotatingLines } from "react-loader-spinner";

const ProductsCategory = ({ requesting, products, category, brands }) => {
    const { categoryId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetProductByCategory(categoryId));
    }, [categoryId]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <PageLayout>
            {!requesting && (
                <div className="products__container">
                    <div className="products_top">
                        {products && (
                            <span> Over {products?.length} results Found</span>
                        )}
                        <div>Sorted By: Featured</div>
                    </div>
                    <div className="products_holder">
                        <div className="products_left">
                            <h3>Department</h3>
                            <h6>{category?.name}</h6>
                            <span>{category?.description}</span>
                            <div className="ratings">
                                <h5>Avg. Customer Review</h5>
                                <div>
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarHalfLine />
                                    <RiStarHalfSFill />
                                </div>
                                <div>
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarHalfLine />
                                    <RiStarHalfLine />
                                    <RiStarLine />
                                </div>
                                <div>
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarHalfLine />
                                    <RiStarHalfLine />
                                </div>
                            </div>
                            <div className="brands_cont">
                                <h6>Brands</h6>
                                <ul className="sort_by">
                                    {brands &&
                                        brands.map((brand, index) => (
                                            <li key={index}>{brand?.name}</li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <div className="products_right">
                            <ProductsResults products={products} />
                        </div>
                    </div>
                </div>
            )}
            {requesting && (
                <div className="requesting_icon">
                    <RotatingLines
                        strokeColor="orange"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                </div>
            )}
        </PageLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products?.products?.products,
        category: state.products?.products?.category,
        brands: state.products?.products?.brands,
        requesting: state.products?.GetProductByCategory?.requesting,
    };
};

export default connect(mapStateToProps)(ProductsCategory);
