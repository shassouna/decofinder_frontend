import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SingleTypeProduct from "./../ecommerce/SingleProductCopy";

function FeatchTabSlider({typeprods}) {
    const [active, setActive] = useState("1")

    return (
        <>
            <div className="section-title wow animate__animated animate__fadeIn">
                <h3 className="">Découvrez toutes les inspirations</h3>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="tab-content wow fadeIn animated" id="myTabContent">
                        <div className={active === "1" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <>
                                    <Swiper
                                        spaceBetween={24}
                                        grid={{
                                            rows: 2
                                        }}
                                        
                                        navigation={{
                                            prevEl: ".custom_prev_f",
                                            nextEl: ".custom_next_f"
                                        }}
                                        className="custom-class"
                                        breakpoints={{
                                            480: {
                                                slidesPerView: 1
                                            },
                                            640: {
                                                slidesPerView: 2
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            1024: {
                                                slidesPerView: 4
                                            },
                                        }}
                                    >
                                        {typeprods.map((item, i) => (
                                            <SwiperSlide key={i}>
                                                <SingleTypeProduct item={item} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow">
                                        <span className="slider-btn slider-prev slick-arrow custom_prev_f">
                                            <i className="fi-rs-arrow-small-left"></i>
                                        </span>
                                        <span className="slider-btn slider-next slick-arrow custom_next_f">
                                            <i className="fi-rs-arrow-small-right"></i>
                                        </span>
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeatchTabSlider;
