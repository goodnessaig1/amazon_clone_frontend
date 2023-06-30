/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { RiStarFill, RiStarHalfLine, RiStarHalfSFill } from "react-icons/ri";

const ProductsResults = ({ products }) => {
    return (
        <div className="department_container">
            <h4>Results</h4>
            <div className="post_category_container">
                {products &&
                    products.map((product, index) => {
                        const rating = Math.floor(Math.random() * 5) + 1;
                        return (
                            <div key={index}>
                                <div className="single_product">
                                    <div className="single_product_top product___bg">
                                        <div className="choice_container">
                                            <span>
                                                Amazon's <span> Choice</span>
                                            </span>
                                        </div>
                                        <img
                                            src={product.images[0]}
                                            alt=""
                                            className="single_product_image"
                                        />
                                    </div>
                                    <div className="product_details">
                                        <p className="product_category_name">
                                            {product?.name?.length > 140
                                                ? `${product?.name.substring(
                                                      0,
                                                      140
                                                  )}...`
                                                : product?.name}
                                        </p>
                                        {rating > 3 ? (
                                            <p className="product_category_rating">
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarHalfLine />
                                            </p>
                                        ) : (
                                            <p className="product_category_rating">
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarHalfSFill />
                                                <RiStarHalfLine />
                                            </p>
                                        )}
                                        <div>
                                            <span>$</span>
                                            {product.price?.toLocaleString()}
                                        </div>
                                        <span>Ships to Nigeria</span>
                                        <div
                                            style={{
                                                fontSize: "12px",
                                                color: "darkgray",
                                                marginTop: "2px",
                                            }}
                                        >
                                            Sold: {product?.sold}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "11px",
                                                color: "chartreuse",
                                                marginTop: "2px",
                                            }}
                                            className="availiable"
                                        >
                                            In Stock
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ProductsResults;
