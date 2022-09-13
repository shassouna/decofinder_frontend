import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Intro4 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true,
                }}
                
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: ".custom_prev_i3",
                    nextEl: ".custom_next_i3",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
                <SwiperSlide>
                    <div
                        className="single-hero-slider rectangle single-animation-wrap"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/slider-6.png)",
                        }}
                    >
                        <div className="slider-content">
                            <form className="form-subcriber d-flex">
                                <button className="btn" type="submit">
                                    La magie de l'été
                                </button>
                            </form>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i3">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i3">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </>
    );
};

export default Intro4;
