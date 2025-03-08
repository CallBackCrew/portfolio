import React from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// Importing images
import ClientImage from '../../assets/images/resource/client.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
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
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 5,
        },
    }
};

function ClientHomeOne({ className }) {
    return (
        <>
            <section className="clients-section">
                <div className="auto-container">
                    <div className="sponsors-outer">
                        <Swiper {...swiperOptions} className="clients-carousel">
                            <SwiperSlide className="slide-item">
                                <Link  to="#"><img src={ClientImage} alt="Client 1" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="slide-item">
                                <Link  to="#"><img src={ClientImage} alt="Client 2" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="slide-item">
                                <Link  to="#"><img src={ClientImage} alt="Client 3" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="slide-item">
                                <Link  to="#"><img src={ClientImage} alt="Client 4" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="slide-item">
                                <Link  to="#"><img src={ClientImage} alt="Client 5" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="slide-item">
                                <Link  to="#"><img src={ClientImage} alt="Client 6" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="slide-item">
                                <Link  to="#"><img src={ClientImage} alt="Client 7" /></Link >
                            </SwiperSlide>
                            <SwiperSlide className="slide-item">
                                <Link  to="#"><img src={ClientImage} alt="Client 8" /></Link >
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ClientHomeOne;
