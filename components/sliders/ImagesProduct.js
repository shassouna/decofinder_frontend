import { useState } from "react"
import "swiper/css/thumbs"
import { Swiper, SwiperSlide } from "swiper/react"

const ThumbSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
            >
                {[1,2,3].map((item) => (
                    <SwiperSlide>
                        <img src={"/assets/imgs/shop/product-1-1.jpg"} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}          
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
            >
                {[1,2,3].map((item) => (
                    <SwiperSlide>
                        <img src={"/assets/imgs/shop/product-1-1.jpg"} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ThumbSlider
