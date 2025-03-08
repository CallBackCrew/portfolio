import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import TestimonialThumb4 from '../../assets/images/resource/testi-thumb-4.jpg';
import TestimonialThumb5 from '../../assets/images/resource/testi-thumb-5.jpg';
import TestimonialThumb6 from '../../assets/images/resource/testi-thumb-6.jpg';

// Swiper options
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: { clickable: true },
    navigation: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 2 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1199: { slidesPerView: 3 },
    },
};

function TestimonialSectionTwo() {
    return (
        <section className="testimonial-section-two">
            <div className="auto-container">
                <div className="row">
                    {/* Title Column */}
                    <div className="title-column col-xl-3 col-lg-12">
                        <div className="sec-title">
                            <span className="sub-title">Our feedbacks</span>
                            <h3>What They’re Talking About Company</h3>
                            <div className="text">
                                Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum.
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Column */}
                    <div className="testimonial-column col-xl-9 col-lg-12">
                        <div className="inner-column">
                            {/* Testimonial Carousel */}
                            <Swiper {...swiperOptions} className="testimonial-carousel">
                                {/* Testimonial Block */}
                                <SwiperSlide className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="text">
                                                Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="thumb">
                                                <img src={TestimonialThumb4} alt="Sarah Albert" />
                                            </div>
                                            <h6 className="name">Sarah Albert</h6>
                                            <span className="designation">Designer</span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* Testimonial Block */}
                                <SwiperSlide className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="text">
                                                Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="thumb">
                                                <img src={TestimonialThumb5} alt="Mike Hardson" />
                                            </div>
                                            <h6 className="name">Mike Hardson</h6>
                                            <span className="designation">Designer</span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* Testimonial Block */}
                                <SwiperSlide className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="text">
                                                Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="thumb">
                                                <img src={TestimonialThumb6} alt="Jessica Brown" />
                                            </div>
                                            <h6 className="name">Jessica Brown</h6>
                                            <span className="designation">Designer</span>
                                        </div>
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

export default TestimonialSectionTwo;
