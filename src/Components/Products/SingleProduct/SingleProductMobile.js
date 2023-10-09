import { KeyboardArrowRight, LocationOnOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Modal from "./Modal";

const SingleProductMobile = ({ product, handleGoBack }) => {
    const [openModal, setOpenModal] = useState(false);
    const [img, setImg] = useState(null);
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    const handleImageClick = (image) => {
        setImg(image);
        setOpenModal(true);
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="singe_product_mobile">
            <div className="product_info">
                <span onClick={handleGoBack} style={{ fontWeight: "600" }}>
                    {product?.category?.name}
                </span>
                <KeyboardArrowRight className="arror_right" />
                <span>{product?.brand?.name}</span>
            </div>
            <span className="product_mobile_name">{product?.name}</span>
            <div>
                <Slider {...settings}>
                    {product &&
                        product?.images?.map((image) => (
                            <div className="single_image_mobile" key={image}>
                                <img
                                    src={image}
                                    onClick={() => handleImageClick(image)}
                                    alt=""
                                />
                            </div>
                        ))}
                </Slider>
            </div>
            {openModal && (
                <Modal
                    image={img}
                    setImg={setImg}
                    setOpenModal={setOpenModal}
                />
            )}

            <div className="mobile_product_content">
                <div className="mobile_price">
                    <div>$</div>
                    {product?.price}
                </div>
                <div className="mobile_detail">
                    <div>
                        <h4>Brand:</h4>
                        <span className="mobile_brand">
                            {product?.brand?.name}
                        </span>
                    </div>
                    <div className="mobile_description">
                        <h4>Description</h4>
                        <p>{product?.description}</p>
                    </div>
                    <div className="mobile_stock">
                        In Stock: <span>True</span>
                    </div>
                    <div className="location__container">
                        <span>Deliver to</span>
                        <LocationOnOutlined className="loction_icon" />
                        Nigeria
                    </div>
                </div>
                <div className="mobile_btn_container">
                    <div>Add to Cart</div>
                    <div>Buy Now</div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductMobile;
