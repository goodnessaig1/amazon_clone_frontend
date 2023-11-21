import HeroSlider, { Slide } from "hero-slider";
import React from "react";
import Products from "./Products";

const first =
    "https://ik.imagekit.io/nz8zngrxv/amazon-image/amazon-img_UcjpS5lOSQ.jpg?updatedAt=1696841380568";
const second =
    "https://ik.imagekit.io/nz8zngrxv/amazon-image/amazon_computers_zk6bwR4tl.jpg?updatedAt=1685116273906";
const third =
    "https://ik.imagekit.io/nz8zngrxv/amazon-image/amazon_makeUp_R1yPcYaAQ.jpg?updatedAt=1685116273998";
const fourth =
    "https://ik.imagekit.io/nz8zngrxv/amazon-image/amazon_refresh_FHAfvtQfr.jpg?updatedAt=1685116274062";
// "https://ik.imagekit.io/nz8zngrxv/amazon-image/amazone_home2_3zXEqwyzf.jpg?updatedAt=1685116273999";
const fifth =
    "https://ik.imagekit.io/nz8zngrxv/amazon-image/amazon_O8lfQShbl.jpg?updatedAt=1696841394063";
// "https://ik.imagekit.io/nz8zngrxv/amazon-image/amazon_toys_wTB_0jQeZ.jpg?updatedAt=1685116273990";
const mobileFirst =
    "https://ik.imagekit.io/nz8zngrxv/amazon-image/mobile_tBXJh3BcKB.jpg?updatedAt=1686037971200";
const mobileSecond =
    "https://ik.imagekit.io/nz8zngrxv/amazon-image/mobile_refresh_nfRG5CEeY.jpg?updatedAt=1686037971225";
const mobileThird =
    "https://ik.imagekit.io/nz8zngrxv/amazon-image/mobile_gaming_u3VdEz1-G.jpg?updatedAt=1686037971425";
const mobileFourth =
    "https://ik.imagekit.io/nz8zngrxv/amazon-image/mobile_gaming_u3VdEz1-G.jpg?updatedAt=1686037971425";
const mobileFifth =
    "https://ik.imagekit.io/nz8zngrxv/amazon-image/mobile_refresh_nfRG5CEeY.jpg?updatedAt=1686037971225";

const Home = () => {
    return (
        <div>
            <div>
                <div className="siders">
                    <HeroSlider
                        height={"100vh"}
                        autoplay
                        controller={{
                            initialSlide: 1,
                            slidingDuration: 500,
                            slidingDelay: 100,
                            shouldDisplayButtons: true,
                            onSliding: (nextSlide) =>
                                console.debug(
                                    "onSliding(nextSlide): ",
                                    nextSlide
                                ),
                            onBeforeSliding: (previousSlide, nextSlide) =>
                                console.debug(
                                    "onBeforeSliding(previousSlide, nextSlide): ",
                                    previousSlide,
                                    nextSlide
                                ),
                            onAfterSliding: (nextSlide) =>
                                console.debug(
                                    "onAfterSliding(nextSlide): ",
                                    nextSlide
                                ),
                        }}
                    >
                        <Slide
                            shouldRenderMask
                            label="first slide"
                            background={{
                                backgroundImageSrc: first,
                            }}
                        />
                        <Slide
                            shouldRenderMask
                            label="second slide"
                            background={{
                                backgroundImageSrc: second,
                            }}
                        />
                        <Slide
                            shouldRenderMask
                            label="third slide"
                            background={{
                                backgroundImageSrc: third,
                            }}
                        />
                        <Slide
                            shouldRenderMask
                            label="fourth slide"
                            background={{
                                backgroundImageSrc: fourth,
                            }}
                        />
                        <Slide
                            shouldRenderMask
                            label="Fifth slide"
                            background={{
                                backgroundImageSrc: fifth,
                            }}
                        />
                    </HeroSlider>
                </div>

                <div className="mobile_slides">
                    <HeroSlider
                        height={"100vh"}
                        autoplay
                        controller={{
                            initialSlide: 1,
                            slidingDuration: 500,
                            slidingDelay: 100,
                            shouldDisplayButtons: true,
                            onSliding: (nextSlide) =>
                                console.debug(
                                    "onSliding(nextSlide): ",
                                    nextSlide
                                ),
                            onBeforeSliding: (previousSlide, nextSlide) =>
                                console.debug(
                                    "onBeforeSliding(previousSlide, nextSlide): ",
                                    previousSlide,
                                    nextSlide
                                ),
                            onAfterSliding: (nextSlide) =>
                                console.debug(
                                    "onAfterSliding(nextSlide): ",
                                    nextSlide
                                ),
                        }}
                    >
                        <Slide
                            label="first slide"
                            background={{
                                backgroundImageSrc: mobileFirst,
                            }}
                        />
                        <Slide
                            label="second slide"
                            background={{
                                backgroundImageSrc: mobileSecond,
                            }}
                        />
                        <Slide
                            label="third slide"
                            background={{
                                backgroundImageSrc: mobileThird,
                            }}
                        />
                        <Slide
                            label="fourth slide"
                            background={{
                                objectFit: "cover",
                                backgroundImageSrc: mobileFourth,
                            }}
                        />
                        <Slide
                            label="Fifth slide"
                            background={{
                                backgroundImageSrc: mobileFifth,
                            }}
                        />
                    </HeroSlider>
                </div>
            </div>
            <Products />
        </div>
    );
};

export default Home;
