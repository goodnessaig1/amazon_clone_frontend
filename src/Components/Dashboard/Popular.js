import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Popular = () => {
    const history = useHistory();
    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 7,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${
                    index + 1
                }, background: #222; color: #bada55`
            );
        },
    };
    const handleClick = () => {
        const categoryId = "648252d7b7b3dc2d17bda4dc";
        history.push(`/products/department/${categoryId}`);
    };
    return (
        <div>
            <div className="product___items">
                <div onClick={() => handleClick()} className="products__">
                    <h4>Popular items this season</h4>
                    <Slider {...settings}>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/pupular_8OjJfWCZu.jpg?updatedAt=1685415484506"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/popular2_tslmgir1J.jpg?updatedAt=1685415484358"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/popular4_Avd9Qb27X.jpg?updatedAt=1685415484513"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/pupular_8OjJfWCZu.jpg?updatedAt=1685415484506"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/popular4_Avd9Qb27X.jpg?updatedAt=1685415484513"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/popular12_inYkQRdgm.jpg?updatedAt=1685416364803"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/popular11_DmtgQa72v.jpg?updatedAt=1685416364650"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/popular6_yER_68wGv.jpg?updatedAt=1685416364544"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/popular13_rpcyK24T5.jpg?updatedAt=1685416364509"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/pupular_8OjJfWCZu.jpg?updatedAt=1685415484506"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/popular5_3ULJ9hwJK.jpg?updatedAt=1685415484491"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/popular1_tDrcQdi-_.jpg?updatedAt=1685415484337"
                                alt=""
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Popular;
