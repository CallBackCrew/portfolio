import React from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importing images
import Feature1 from '../../assets/images/resource/feature-1.jpg';
import Feature2 from '../../assets/images/resource/feature-2.jpg';
import Feature3 from '../../assets/images/resource/feature-3.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        clickable: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 2,
        },
    }
};

function FeaturesSectionThree() {
    return (
        <section className="features-section-three">
            <div className="carousel-outer">
                <Swiper {...swiperOptions} className="features-carousel">
                    {/* Feature Slide 1 */}
                    <SwiperSlide className="feature-block-three">
                        <div className="inner-box">
                            <figure className="image">
                                <Link  to="/about-us">
                                    <img src={Feature1} alt="Gaming and Entertainment" />
                                </Link >
                                <span className="icon">G</span>
                            </figure>
                            <h4 className="title">
                                <Link  to="/about-us">Gaming and Entertainment</Link >
                            </h4>
                            <div className="text">
                                There are many variations of passages of ipsum available, but the majority have suffered alteration in form.
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Feature Slide 2 */}
                    <SwiperSlide className="feature-block-three">
                        <div className="inner-box">
                            <figure className="image">
                                <Link  to="/about-us">
                                    <img src={Feature2} alt="Business and Finance" />
                                </Link >
                                <span className="icon">G</span>
                            </figure>
                            <h4 className="title">
                                <Link  to="/about-us">Business and Finance</Link >
                            </h4>
                            <div className="text">
                                There are many variations of passages of ipsum available, but the majority have suffered alteration in form.
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Feature Slide 3 */}
                    <SwiperSlide className="feature-block-three">
                        <div className="inner-box">
                            <figure className="image">
                                <Link  to="/about-us">
                                    <img src={Feature3} alt="Business and Finance" />
                                </Link >
                                <span className="icon">G</span>
                            </figure>
                            <h4 className="title">
                                <Link  to="/about-us">Business and Finance</Link >
                            </h4>
                            <div className="text">
                                There are many variations of passages of ipsum available, but the majority have suffered alteration in form.
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default FeaturesSectionThree;
