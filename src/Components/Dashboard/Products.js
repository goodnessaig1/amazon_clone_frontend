import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Popular from "./Popular";
import { firstProducts, secondProducts, thirdProducts } from "./ProductsData";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Products = ({ user }) => {
    const history = useHistory();
    const handleCategoryClick = (categoryId) => {
        history.push(`/products/department/${categoryId}`);
    };
    return (
        <div className="products_container">
            <div className="containers__">
                {firstProducts &&
                    firstProducts.map((product, index) => (
                        <div key={index}>
                            <div
                                className="product__container"
                                onClick={() => handleCategoryClick(product?.id)}
                            >
                                <h4>{product?.title}</h4>

                                {product?.products?.length > 2 ? (
                                    <div className="items_container">
                                        {product &&
                                            product?.products.map(
                                                (product, index) => (
                                                    <div
                                                        key={index}
                                                        className="item_container"
                                                    >
                                                        <img
                                                            src={product?.img}
                                                            alt=""
                                                        />
                                                        <span>
                                                            {product?.name}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                    </div>
                                ) : (
                                    <img
                                        src={product?.products[0].img}
                                        alt=""
                                    />
                                )}
                                <span>See more</span>
                            </div>
                        </div>
                    ))}

                <div className="product_top_signin">
                    {user?.authenticated ? (
                        <div className="free_">
                            Get a product from us today and stand a chance of
                            getting free delivery.
                        </div>
                    ) : (
                        <div>
                            <span>Sign in for the best experience</span>
                            <Link to="/sign_in" className="sign_in__link">
                                Sign in securely
                            </Link>
                        </div>
                    )}

                    <img
                        src="https://ik.imagekit.io/nz8zngrxv/amazon-image/wesave_sMFNhuBt-.jpg?updatedAt=1685389575542"
                        alt=""
                    />
                </div>

                {secondProducts &&
                    secondProducts.map((product, index) => (
                        <div key={index}>
                            <div
                                className="product__container"
                                onClick={() => handleCategoryClick(product.id)}
                            >
                                <h4>{product?.title}</h4>
                                {product?.products.length > 2 ? (
                                    <div className="items_container">
                                        {product?.products.map(
                                            (product, index) => (
                                                <div
                                                    key={index}
                                                    className="item_container"
                                                >
                                                    <img
                                                        src={product?.img}
                                                        alt=""
                                                    />
                                                    <span>{product?.name}</span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <img src={product.products[0].img} alt="" />
                                )}
                                <span>See more</span>
                            </div>
                        </div>
                    ))}
            </div>

            <Popular />
            <div className="containers___">
                {thirdProducts &&
                    thirdProducts.map((product, index) => (
                        <div key={index}>
                            <div
                                className="product__container"
                                onClick={() => handleCategoryClick(product.id)}
                            >
                                <h4>{product?.title}</h4>
                                {product?.products.length > 2 ? (
                                    <div className="items_container">
                                        {product?.products.map(
                                            (product, index) => (
                                                <div
                                                    key={index}
                                                    className="item_container"
                                                >
                                                    <img
                                                        src={product?.img}
                                                        alt=""
                                                    />
                                                    <span>{product?.name}</span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <img src={product.products[0].img} alt="" />
                                )}
                                <span>See more</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user?.userData,
    };
};

export default connect(mapStateToProps)(Products);
