import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"

const CategorySlider = ({superunivers}) => {
    return (
        <>
            <Swiper
                autoplay={true}
                navigation={{
                    prevEl: ".custom_prev_ct1",
                    nextEl: ".custom_next_ct1"
                }}
                className="custom-class"
                breakpoints={{
                    480: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 5
                    },
                    1024: {
                        slidesPerView: 8
                    },
                    1200: {
                        slidesPerView: 10
                    }
                }}
            >
                {superunivers.map((item) => (
                    <SwiperSlide key={item['id']}>
                       <Link href={`/superunivers/${item['id']}`}>
                            <div className={`card-2 cat-4.png wow animate__animated animate__fadeInUp`}>
                                <figure className=" img-hover-scale overflow-hidden">
                                    <a>
                                        <img src={`assets/imgs/shop/cat-4.png`} alt="" />
                                    </a>
                                </figure>
                                <h6>
                                    <a>{item['attributes']['LIB']}</a>
                                </h6>
                                <span>{item['attributes']['rayondetails']['data'].length} univers</span>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows">
                <span className="slider-btn slider-prev slick-arrow custom_prev_ct1">
                    <i className="fi-rs-arrow-small-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_ct1">
                    <i className="fi-rs-arrow-small-right"></i>
                </span>
            </div>
        </>
    )
}

export default CategorySlider

