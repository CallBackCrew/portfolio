import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';


import Thumb1 from '../../assets/images/resource/thumb-1.jpg';
import Thumb2 from '../../assets/images/resource/thumb-2.jpg';
import Thumb3 from '../../assets/images/resource/thumb-3.jpg';
import Thumb4 from '../../assets/images/resource/thumb-4.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    loop: true,
};

function TestimonialHomeTwo({ className }) {
    return (
        <>
            <section className={`testimonial-section-two ${className || ''}`}>
                <div className="bg bg-pattern-11"></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <div className="bg-shape"></div>
                                    <figure className="image image-4">
                                        <img src={Thumb4} alt="Testimonial Thumb 4" />
                                    </figure>
                                    <figure className="image image-3">
                                        <img src={Thumb3} alt="Testimonial Thumb 3" />
                                    </figure>
                                    <figure className="image image-2">
                                        <img src={Thumb2} alt="Testimonial Thumb 2" />
                                    </figure>
                                    <figure className="image image-1">
                                        <img src={Thumb1} alt="Testimonial Thumb 1" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Our Testimonials</span>
                                    <h2>What they’re talking <br /> about us</h2>
                                </div>

                                <div className="carousel-outer">
                                    <Swiper {...swiperOptions} className="testimonial-carousel-two owl-carousel owl-theme">
                                        <SwiperSlide className="testimonial-block-two">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <div className="text">Vestibulum scelerisque enim pulvinar, aliquam erat sit amet,
                                                        hendrerit dui. Vivamus varius libero metus, sit amet hendrerit semper.</div>
                                                    <div className="info-box">
                                                        <h6 className="name">Kevin Martin</h6>
                                                        <span className="designation">Designer</span>
                                                        <span className="icon icon-quote"></span>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="testimonial-block-two">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <div className="text">Vestibulum scelerisque enim pulvinar, aliquam erat sit amet,
                                                        hendrerit dui. Vivamus varius libero metus, sit amet hendrerit semper.</div>
                                                    <div className="info-box">
                                                        <h6 className="name">Kevin Martin</h6>
                                                        <span className="designation">Designer</span>
                                                        <span className="icon icon-quote"></span>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="testimonial-block-two">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <div className="text">Vestibulum scelerisque enim pulvinar, aliquam erat sit amet,
                                                        hendrerit dui. Vivamus varius libero metus, sit amet hendrerit semper.</div>
                                                    <div className="info-box">
                                                        <h6 className="name">Kevin Martin</h6>
                                                        <span className="designation">Designer</span>
                                                        <span className="icon icon-quote"></span>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TestimonialHomeTwo;
