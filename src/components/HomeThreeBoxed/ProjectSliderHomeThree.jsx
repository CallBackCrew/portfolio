import React from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import ProjectImage1 from '../../assets/images/resource/project-8.jpg'; 
import ProjectImage2 from '../../assets/images/resource/project-9.jpg'; 
import ProjectImage3 from '../../assets/images/resource/project-10.jpg';
import ProjectImage4 from '../../assets/images/resource/project-11.jpg'; 

// Swiper options
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 4,
        },
    }
};

function ProjectSliderHomeThree({ className }) {
    return (
        <>
            <section className={`project-section-three ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title light">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <span className="sub-title">Recently Completed Work</span>
                                <h2>Improve & Enhance the <br />Tech Projects</h2>
                            </div>
                            <div className="col-lg-5 text-end btn-box">
                                <Link  to="/projects" className="theme-btn btn-style-two bg-light">
                                    <span className="btn-title text-black">View all work</span>
                                </Link >
                            </div>
                        </div>
                    </div>

                    <div className="carousel-outer">
                        <Swiper {...swiperOptions} className="project-carousel-three">
                            <SwiperSlide className="project-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link  to="/projects-details"><img src={ProjectImage1} alt="Project 1" /></Link >
                                        </figure>
                                        <div className="overlay-box">
                                            <Link  to="/projects-details" className="icon">
                                                <i className="fa fa-long-arrow-alt-right"></i>
                                            </Link >
                                            <h4 className="title">
                                                <Link  to="/projects-details">Tech Solutions</Link >
                                            </h4>
                                            <span className="cat">DESIGN / IDEAS</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link  to="/projects-details"><img src={ProjectImage2} alt="Project 2" /></Link >
                                        </figure>
                                        <div className="overlay-box">
                                            <Link  to="/projects-details" className="icon">
                                                <i className="fa fa-long-arrow-alt-right"></i>
                                            </Link >
                                            <h4 className="title">
                                                <Link  to="/projects-details">Tech Solutions</Link >
                                            </h4>
                                            <span className="cat">DESIGN / IDEAS</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link  to="/projects-details"><img src={ProjectImage3} alt="Project 3" /></Link >
                                        </figure>
                                        <div className="overlay-box">
                                            <Link  to="/projects-details" className="icon">
                                                <i className="fa fa-long-arrow-alt-right"></i>
                                            </Link >
                                            <h4 className="title">
                                                <Link  to="/projects-details">Tech Solutions</Link >
                                            </h4>
                                            <span className="cat">DESIGN / IDEAS</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link  to="/projects-details"><img src={ProjectImage4} alt="Project 4" /></Link >
                                        </figure>
                                        <div className="overlay-box">
                                            <Link  to="/projects-details" className="icon">
                                                <i className="fa fa-long-arrow-alt-right"></i>
                                            </Link >
                                            <h4 className="title">
                                                <Link  to="/projects-details">Tech Solutions</Link >
                                            </h4>
                                            <span className="cat">DESIGN / IDEAS</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link  to="/projects-details"><img src={ProjectImage1} alt="Project 1" /></Link >
                                        </figure>
                                        <div className="overlay-box">
                                            <Link  to="/projects-details" className="icon">
                                                <i className="fa fa-long-arrow-alt-right"></i>
                                            </Link >
                                            <h4 className="title">
                                                <Link  to="/projects-details">Tech Solutions</Link >
                                            </h4>
                                            <span className="cat">DESIGN / IDEAS</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link  to="/projects-details"><img src={ProjectImage2} alt="Project 2" /></Link >
                                        </figure>
                                        <div className="overlay-box">
                                            <Link  to="/projects-details" className="icon">
                                                <i className="fa fa-long-arrow-alt-right"></i>
                                            </Link >
                                            <h4 className="title">
                                                <Link  to="/projects-details">Tech Solutions</Link >
                                            </h4>
                                            <span className="cat">DESIGN / IDEAS</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link  to="/projects-details"><img src={ProjectImage3} alt="Project 3" /></Link >
                                        </figure>
                                        <div className="overlay-box">
                                            <Link  to="/projects-details" className="icon">
                                                <i className="fa fa-long-arrow-alt-right"></i>
                                            </Link >
                                            <h4 className="title">
                                                <Link  to="/projects-details">Tech Solutions</Link >
                                            </h4>
                                            <span className="cat">DESIGN / IDEAS</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link  to="/projects-details"><img src={ProjectImage4} alt="Project 4" /></Link >
                                        </figure>
                                        <div className="overlay-box">
                                            <Link  to="/projects-details" className="icon">
                                                <i className="fa fa-long-arrow-alt-right"></i>
                                            </Link >
                                            <h4 className="title">
                                                <Link  to="/projects-details">Tech Solutions</Link >
                                            </h4>
                                            <span className="cat">DESIGN / IDEAS</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectSliderHomeThree;
