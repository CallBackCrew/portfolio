import React from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    loop: true,
   
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 4,
        },
    }
};

function ServicesSectionTwo({ className }) {
    return (
        <section className={`services-section-two ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    {/* Title Column */}
                    <div className="title-column col-lg-5 col-md-12">
                        <div className="sec-title light">
                            <span className="sub-title">What we offer</span>
                            <h2>Help you Overcome your Technology Challenges</h2>
                            <Link  to="/page-services" className="theme-btn btn-style-one">
                                <span className="btn-title">Discover more</span>
                            </Link >
                        </div>
                    </div>

                    {/* Services Column with Swiper Carousel */}
                    <div className="services-column col-lg-7 col-md-12">
                        <div className="inner-column">
                            <Swiper {...swiperOptions} className="services-carousel-two">
                                {/* Service Block 1 */}
                                <SwiperSlide className="service-block-two">
                                    <div className="inner-box">
                                        <div className="icon fa fa-globe"></div>
                                        <h6 className="title">
                                            <Link  to="//services-details">Website</Link >
                                        </h6>
                                    </div>
                                </SwiperSlide>

                                {/* Service Block 2 */}
                                <SwiperSlide className="service-block-two">
                                    <div className="inner-box">
                                        <div className="icon fab fa-apple"></div>
                                        <h6 className="title">
                                            <Link  to="//services-details">iOS</Link >
                                        </h6>
                                    </div>
                                </SwiperSlide>

                                {/* Service Block 3 */}
                                <SwiperSlide className="service-block-two">
                                    <div className="inner-box">
                                        <div className="icon fab fa-android"></div>
                                        <h6 className="title">
                                            <Link  to="//services-details">Android</Link >
                                        </h6>
                                    </div>
                                </SwiperSlide>

                                {/* Service Block 4 */}
                                <SwiperSlide className="service-block-two">
                                    <div className="inner-box">
                                        <div className="icon fab fa-ioxhost"></div>
                                        <h6 className="title">
                                            <Link  to="//services-details">IOT</Link >
                                        </h6>
                                    </div>
                                </SwiperSlide>

                                {/* Service Block 5 */}
                                <SwiperSlide className="service-block-two">
                                    <div className="inner-box">
                                        <div className="icon fa fa-tv"></div>
                                        <h6 className="title">
                                            <Link  to="//services-details">Television</Link >
                                        </h6>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSectionTwo;
