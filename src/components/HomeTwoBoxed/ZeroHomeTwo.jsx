import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SlideImage1 from '../../assets/images/main-slider/2.jpg';
import SlideImage2 from '../../assets/images/main-slider/1.jpg';

// Swiper configuration options
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 5000, // Adjust the delay as per your need
        disableOnInteraction: false,
    },
    loop: true,
    navigation: true,
};

function BannerSection({ className }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section className={`banner-section ${className || ''}`}>
            <Swiper {...swiperOptions} className="banner-carousel">
                {/* Slide Item 1 */}
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage1})` }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-1">Solutions for your businesses</span>
                            <h1 className="title animate-2">Innovative Tech <br />Solutions</h1>
                            <div className="btn-box animate-3">
                                <Link  to="/about-us" className="theme-btn btn-style-one">
                                    <span className="btn-title">Explore More</span>
                                </Link >
                                <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                    <i className="icon fa fa-play"></i>watch video
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide Item 2 */}
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage2})` }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-1">Solutions for your businesses</span>
                            <h1 className="title animate-2">Innovative Tech <br />Solutions</h1>
                            <div className="btn-box animate-3">
                                <Link  to="/about-us" className="theme-btn btn-style-one">
                                    <span className="btn-title">Explore More</span>
                                </Link >
                                <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                    <i className="icon fa fa-play"></i>watch video
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId="Fvae8nxzVz4"
        onClose={() => setOpen(false)}
    />
        </section>
        
    </>
    );
}

export default BannerSection;
