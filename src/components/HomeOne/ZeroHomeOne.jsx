import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image1 from '../../assets/images/main-slider/1.jpg'; 

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

   
    const contentBoxStyle = {
        marginTop: '-150px' 
    };
    const buttonStyle = {
        marginTop: '30px' 
    };

   
    const subTitleStyle = {
        position: 'relative',
        display: 'inline-block',
        lineHeight: '30px',
        padding: '7px 30px',
        paddingLeft: '80px',
        fontSize: '14px',
        color: '#ffffff',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.01em',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    };

    
    const beforeStyle = {
        position: 'absolute',
        left: '30px',
        top: '38.5%',
        transform: 'translateY(-50%)',
        height: '2px',
        width: '40px',
        content: '""'
    };

    return (
        <>
            <section className={`banner-section-two ${className || ''}`}>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                    {/* Slide Item 1 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>
                        <div className="auto-container">
                            <div className="content-box" style={contentBoxStyle}>
                                {/* Simulating the ::before pseudo-element */}
                                <div style={beforeStyle}></div>
                                <span className="sub-title animate-2" style={subTitleStyle}> Solutions for your businesses </span>
                                <h1 className="title" style={{ color: '#fff' }}> IT Solutions <br /> <span style={{ color: '#ffaa17' }}>&</span> Technology </h1>
                                <div className="text" style={{ color: '#ffffff80' }}>
                                Empowering the IT community to drive positive change through 
                                <br/>knowledge sharing and innovation
                                    
                                </div>
                                <div className="btn-box animate-4" style={buttonStyle}>
                                    <Link  to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">get in touch</span>
                                    </Link >
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide Item 2 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>
                        <div className="auto-container">
                            <div className="content-box" style={contentBoxStyle}>
                                {/* Simulating the ::before pseudo-element */}
                                <div style={beforeStyle}></div>
                                <span className="sub-title animate-2" style={subTitleStyle}>
                                    Solutions for your businesses
                                </span>
                                <h1 className="title" style={{ color: '#fff' }}>
                                    IT Solutions <br />
                                    <span style={{ color: '#ffaa17' }}>&</span> Technology
                                </h1>
                                <div className="text" style={{ color: '#ffffff80' }}>
                                Empowering the IT community to drive positive change through 
                                <br/>knowledge sharing and innovation
                                </div>
                                <div className="btn-box animate-4" style={buttonStyle}>
                                    <Link  to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">get in touch </span>
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

export default BannerSectionTwo;
