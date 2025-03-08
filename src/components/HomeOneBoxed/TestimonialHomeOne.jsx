import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import your images
import TestimonialImage1 from '../../assets/images/resource/testimonial-1.png';
import TestimonialThumb1 from '../../assets/images/resource/testi-thumb-1.jpg';
import TestimonialThumb2 from '../../assets/images/resource/testi-thumb-2.jpg';
import TestimonialThumb3 from '../../assets/images/resource/testi-thumb-3.jpg';

function TestimonialSection() {
    return (
        <section className="testimonial-section">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">Our feedbacks</span>
                    <h2>What They’re Talking<br /> About Company</h2>
                </div>
                <div className="testimonials">
                    {/* Swiper for testimonials */}
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{ clickable: true }}
                        className="testimonial-content"
                    >
                        {/* Testimonial Block One */}
                        <SwiperSlide className="testimonial-block">
                            <div className="row">
                                <div className="content-column col-lg-6 col-md-12">
                                    <div className="icon-box">
                                        <span className="icon icon-quote"></span>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="text">
                                        This is due to their excellent service, competitive pricing and customer support. It’s refreshing to get such a personal touch.
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name">Mike Hardson</h4>
                                        <span className="designation">Senior Designer</span>
                                    </div>
                                </div>
                                <div className="image-column col-lg-6 col-md-12">
                                    <figure className="image">
                                        <img src={TestimonialImage1} alt="Testimonial" />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial Block Two */}
                        <SwiperSlide className="testimonial-block">
                            <div className="row">
                                <div className="content-column col-lg-6 col-md-12">
                                    <div className="icon-box">
                                        <span className="icon icon-quote"></span>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="text">
                                        Competitive pricing and customer support. It’s refreshing to get such a personal touch.
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name">Jessica Brown</h4>
                                        <span className="designation">Senior Designer</span>
                                    </div>
                                </div>
                                <div className="image-column col-lg-6 col-md-12">
                                    <figure className="image">
                                        <img src={TestimonialImage1} alt="Testimonial" />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial Block Three */}
                        <SwiperSlide className="testimonial-block">
                            <div className="row">
                                <div className="content-column col-lg-6 col-md-12">
                                    <div className="icon-box">
                                        <span className="icon icon-quote"></span>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="text">
                                        Simply free text available in the market. This is due to their excellent service, competitive pricing, and customer support.
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name">Michael Smith</h4>
                                        <span className="designation">Senior Designer</span>
                                    </div>
                                </div>
                                <div className="image-column col-lg-6 col-md-12">
                                    <figure className="image">
                                        <img src={TestimonialImage1} alt="Testimonial" />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Thumbnail Swiper */}
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        className="swiper-container testimonial-thumbs"
                    >
                        <SwiperSlide className="swiper-slide testimonial-thumb">
                            <figure className="image">
                                <img src={TestimonialThumb1} alt="Testimonial Thumb 1" />
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide testimonial-thumb">
                            <figure className="image">
                                <img src={TestimonialThumb2} alt="Testimonial Thumb 2" />
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide testimonial-thumb">
                            <figure className="image">
                                <img src={TestimonialThumb3} alt="Testimonial Thumb 3" />
                            </figure>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
