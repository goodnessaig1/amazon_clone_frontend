import React, { useEffect, useRef, useState } from "react";
import { GetSingleProduct } from "../../../Auth/Actions/productActions";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PageLayout from "../../../HOC/PageLayout";
import { KeyboardArrowRight, LocationOnOutlined } from "@mui/icons-material";
import ReactImageMagnify from "react-image-magnify";
import { RiStarFill, RiStarHalfLine, RiStarHalfSFill } from "react-icons/ri";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TiTick } from "react-icons/ti";
import "./SingleProduct.css";
import SingleProductMobile from "./SingleProductMobile";
import { RotatingLines } from "react-loader-spinner";

const SingleProduct = ({ product, brand, requesting }) => {
    const dispatch = useDispatch();
    const refs = useRef([]);
    const { productId } = useParams();
    const history = useHistory();
    useEffect(() => {
        dispatch(GetSingleProduct(productId));
    }, [productId]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    const [imgIndex, setImgIndex] = useState(0);
    const [img, setImg] = useState(product?.images[imgIndex]);
    useEffect(() => {
        if (product !== undefined) {
            setImg(product.images[imgIndex]);
        }
    }, [product]);
    const handleGoBack = () => {
        history.goBack();
    };
    refs.current = [];
    const hoverHandler = (image, i) => {
        setImg(image);
        setImgIndex(i);
    };
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };
    return (
        <PageLayout>
            {!requesting && (
                // )
                // }
                <div className="single_product_container">
                    <div className="singe_product_top">
                        <img
                            src="https://ik.imagekit.io/nz8zngrxv/amazon-image/Amazon-Logo-PNG-Transparent_kwAHVGYfU.png?updatedAt=1687544297059"
                            alt="logo"
                            className="logo_img"
                        />
                        <span>
                            The perfect place to get that item that will serve
                            your need
                        </span>
                        <span className="amazon_prime">
                            <TiTick size={13} className="tick" />
                            <span>prime</span>
                            <div>
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarHalfLine />
                                <RiStarHalfSFill />
                            </div>
                        </span>
                    </div>
                    <hr className="product_hr" />

                    <div className="single_product_details">
                        <div className="single_product_images">
                            <div className="product_info">
                                <span
                                    onClick={handleGoBack}
                                    style={{ fontWeight: "600" }}
                                >
                                    {product?.category?.name}
                                </span>
                                <KeyboardArrowRight className="arror_right" />
                                <span>{product?.brand?.name}</span>
                            </div>
                            <div className="product_images_holder">
                                <div className="product_images">
                                    {product?.images &&
                                        product.images.map((image, i) => {
                                            return (
                                                <img
                                                    key={i}
                                                    src={image}
                                                    className={
                                                        imgIndex === i
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onMouseOver={() =>
                                                        hoverHandler(image, i)
                                                    }
                                                    ref={addRefs}
                                                    alt="product-image"
                                                />
                                            );
                                        })}
                                </div>
                                {img != null ? (
                                    <div className="product__image">
                                        <br />
                                        <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "Wristwatch by Ted Baker London",
                                                    isFluidWidth: true,
                                                    src: img,
                                                },
                                                largeImage: {
                                                    src: img,
                                                    width: 1200,
                                                    height: 1800,
                                                },
                                                shouldUsePositiveSpaceLens: true,
                                                enlargedImageContainerDimensions:
                                                    {
                                                        width: "150%",
                                                        height: "130%",
                                                    },
                                            }}
                                            lensStyle={{
                                                border: "0.5px solid rgba(255, 0, 0, 0.5)",
                                            }}
                                        />
                                        <div className="rollover">
                                            Roll over to zoom image
                                        </div>
                                    </div>
                                ) : (
                                    <p>loading</p>
                                )}
                            </div>
                        </div>
                        <div className="single_product_detail">
                            <div className="product___details">
                                <span>{product?.name}</span>
                                <p>
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarHalfLine />
                                    <RiStarHalfSFill />
                                </p>
                                <div className="product_item_price">
                                    <span>$</span>
                                    {product?.price?.toLocaleString()}
                                </div>
                                <span>Ships to Nigeria</span>
                                <div className="brand_cont">
                                    <h5>Brand</h5>
                                    <span>{brand?.brandDetails?.name}</span>
                                </div>
                                <div className="product_item__details">
                                    <h5>Features</h5>
                                    <p>{product?.features}</p>
                                </div>
                                <div className="product_item__details">
                                    <h5>About this item</h5>
                                    <p>{product?.about}</p>
                                </div>
                            </div>
                            <div className="to_cart_container">
                                <div className="add_to_cart_container">
                                    <div className="product_item_price price">
                                        <span>$</span>
                                        {product?.price?.toLocaleString()}
                                    </div>
                                    <div className="delivery_location">
                                        <LocationOnOutlined className="loaction_icon" />
                                        <span>Deliver to Nigeria</span>
                                    </div>
                                    <div className="in_stock">In Stock</div>
                                    <div className="add_to_cart">
                                        {" "}
                                        Add to cart
                                    </div>
                                    <div className="buy_now">Buy now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="singleProductMobile">
                        <SingleProductMobile
                            product={product}
                            handleGoBack={handleGoBack}
                        />
                    </div>
                </div>
            )}
            {requesting && (
                <div className="requesting_icon">
                    <RotatingLines
                        strokeColor="orange"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="60"
                        visible={true}
                    />
                </div>
            )}
        </PageLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        requesting: state?.products?.GetSingleProduct?.requesting,
        product: state.products?.product?.product,
        brand: state.products?.product,
    };
};

export default connect(mapStateToProps, {})(SingleProduct);
