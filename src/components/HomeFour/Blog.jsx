import React from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import NewsImage1 from '../../assets/images/resource/news-1.jpg';
import NewsImage2 from '../../assets/images/resource/news-2.jpg';
import NewsImage3 from '../../assets/images/resource/news-3.jpg';

// Swiper options
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
        delay: 8500,
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
    }
};

function NewsSection() {
    return (
        <section className="news-section-two">
            <div className="auto-container">
                <div className="row">
                    {/* Title Column */}
                    <div className="title-column col-xl-4 col-lg-4 col-md-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">from the blog</span>
                                <h2>Our Latest News & Articles from the Blog</h2>
                                <div className="text">There are many variations of passages of ipsum available, but the majority have suffered alteration in form.</div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Column */}
                    <div className="carousel-column col-xl-8 col-lg-8 col-md-12">
                        <div className="carousel-outer">
                            <Swiper {...swiperOptions} className="news-carousel">
                                {[NewsImage1, NewsImage2, NewsImage3].map((image, index) => (
                                    <SwiperSlide key={index} className="news-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link  to="/news-details"><img src={image} alt={`News ${index + 1}`} /></Link >
                                                </figure>
                                                <span className="date"><b>28</b> OCT</span>
                                            </div>
                                            <div className="content-box">
                                                <ul className="post-info">
                                                    <li><i className="fa fa-user"></i> by Admin</li>
                                                    <li><i className="fa fa-tag"></i> Technology</li>
                                                </ul>
                                                <h4 className="title">
                                                    <Link  to="/news-details">Professional technology information & solutions are just like…</Link >
                                                </h4>
                                            </div>
                                            <div className="bottom-box">
                                                <Link  to="/news-details" className="read-more">
                                                    Read More <i className="fa fa-long-arrow-alt-right"></i>
                                                </Link >
                                                <div className="comments"><i className="fa fa-comments"></i> 02</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                {[NewsImage1, NewsImage2, NewsImage3].map((image, index) => (
                                    <SwiperSlide key={index} className="news-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link  to="/news-details"><img src={image} alt={`News ${index + 1}`} /></Link >
                                                </figure>
                                                <span className="date"><b>28</b> OCT</span>
                                            </div>
                                            <div className="content-box">
                                                <ul className="post-info">
                                                    <li><i className="fa fa-user"></i> by Admin</li>
                                                    <li><i className="fa fa-tag"></i> Technology</li>
                                                </ul>
                                                <h4 className="title">
                                                    <Link  to="/news-details">Professional technology information & solutions are just like…</Link >
                                                </h4>
                                            </div>
                                            <div className="bottom-box">
                                                <Link  to="/news-details" className="read-more">
                                                    Read More <i className="fa fa-long-arrow-alt-right"></i>
                                                </Link >
                                                <div className="comments"><i className="fa fa-comments"></i> 02</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;
