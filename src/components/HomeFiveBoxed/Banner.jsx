import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import Image1 from '../../assets/images/main-slider/5.jpg'; 
import Image2 from '../../assets/images/main-slider/4.jpg'; 

const swiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
};

function BannerSectionFour({ className }) {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
            <section className={`banner-section-four ${className || ''}`}>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                    {/* Slide Item 1 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-1">Tools For <br />Development</h1>
                                <div className="text animate-2">
                                Empowering the IT community to drive positive change through knowledge sharing and innovation.”

                                </div>
                                <div className="btn-box animate-3">
                                    <Link  to="/about-us" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">get in touch</span>
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
                                <h1 className="title animate-1">Tools For <br />Development</h1>
                                <div className="text animate-2">
                                Empowering the IT community to drive positive change through knowledge sharing and innovation.”

                                </div>
                                <div className="btn-box animate-3">
                                    <Link  to="/about-us" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">get in touch</span>
                                    </Link >
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
             </>
    );
}

export default BannerSectionFour;
