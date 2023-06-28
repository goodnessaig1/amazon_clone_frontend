import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Popular from "./Popular";
import { firstProducts, secondProducts } from "./ProductsData";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Products = ({ user }) => {
    const history = useHistory();

    // const handleProductClick = (categoryId) => {
    // history.push(`/products/${categoryId}`);
    // };
    return (
        <div className="products_container">
            <div className="containers__">
                {firstProducts &&
                    firstProducts.map((product, index) => (
                        <div key={index}>
                            <div
                                className="product__container"
                                // onClick={() => handleProductClick(product.id)}
                            >
                                <h4>{product.title}</h4>

                                {product.products.length > 2 ? (
                                    <div className="items_container">
                                        {product.products.map(
                                            (product, index) => (
                                                <div
                                                    key={index}
                                                    className="item_container"
                                                >
                                                    <img
                                                        src={product.img}
                                                        alt=""
                                                    />
                                                    <span>{product.name}</span>
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

                <div className="product_top_signin">
                    {user?.authenticated ? (
                        <div className="free_delivery">
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
                                // onClick={() => handleProductClick(product.id)}
                            >
                                <h4>{product.title}</h4>
                                {product.products.length > 2 ? (
                                    <div className="items_container">
                                        {product.products.map(
                                            (product, index) => (
                                                <div
                                                    key={index}
                                                    className="item_container"
                                                >
                                                    <img
                                                        src={product.img}
                                                        alt=""
                                                    />
                                                    <span>{product.name}</span>
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
                <div className="product__container">
                    <h4>For your Fitness Needs</h4>
                    <img
                        src="https://ik.imagekit.io/nz8zngrxv/amazon-image/product_S6zOwgK9m.jpg?updatedAt=1685417315290"
                        alt=""
                    />
                    <span>See more</span>
                </div>
                <div className="product__container">
                    <h4>Health & Personal Care</h4>
                    <img
                        src="https://ik.imagekit.io/nz8zngrxv/amazon-image/product2_id1GStDU2.jpg?updatedAt=1685417314909"
                        alt=""
                    />
                    <span>See more</span>
                </div>

                <div className="product__container">
                    <h4>Spring new arrivals</h4>
                    <img
                        src="https://ik.imagekit.io/nz8zngrxv/amazon-image/product1_DZs5uSBcJB.jpg?updatedAt=1685417315852"
                        alt=""
                    />
                    <span>See more</span>
                </div>
                <div className="product__container">
                    <h4>New arrivals in Toys</h4>
                    <img
                        src="https://ik.imagekit.io/nz8zngrxv/amazon-image/producttoy_paPEFhPLx.jpg?updatedAt=1685417315313"
                        alt=""
                    />
                    <span>See more</span>
                </div>
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
