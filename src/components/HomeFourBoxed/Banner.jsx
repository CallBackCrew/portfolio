import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import Image1 from '../../assets/images/main-slider/4.jpg'; // First image
import Image2 from '../../assets/images/main-slider/2.jpg'; // Second image

const swiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
};

function BannerSectionThree({ className }) {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
            <section className={`banner-section-three ${className || ''}`}>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                    {/* Slide Item 1 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-1">Innovations</h1>
                                <h2 className="sub-title animate-2">Technology Partners</h2>
                                <div className="btn-box animate-3">
                                    <Link  to="/about-us" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">Discover more</span>
                                    </Link >
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide Item 2 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image2})` }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-1">Innovations</h1>
                                <h2 className="sub-title animate-2">Technology Partners</h2>
                                <div className="btn-box animate-3">
                                    <Link  to="/about-us" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">Discover more</span>
                                    </Link >
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
}

export default BannerSectionThree;
