import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importing the images
import ArrowIcon from '../../assets/images/main-slider/arrow.png'; // Arrow icon
import Image1 from '../../assets/images/main-slider/3.jpg'; // First image
import Image2 from '../../assets/images/main-slider/3.jpg'; // Second image (use a different image if needed)

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
};

function BannerSectionTwo({ className }) {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
            <section className={`banner-section-two ${className || ''}`}>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                    {/* Slide Item 1 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-2">Solutions for your businesses</span>
                                <h1 className="title animate-3">Technology Solutions for Future</h1>
                                <div className="btn-box animate-4">
                                    <Link  to="/about-us" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link >
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide Item 2 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image2})` }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-2">Solutions for your businesses</span>
                                <h1 className="title animate-3">Technology Solutions for Future</h1>
                                <div className="btn-box animate-4">
                                    <Link  to="/about-us" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link >
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

export default BannerSectionTwo;
