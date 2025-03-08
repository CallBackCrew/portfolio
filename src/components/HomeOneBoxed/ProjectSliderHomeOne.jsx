import React from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// Importing images
import BackgroundImage from '../../assets/images/background/2.jpg';
import Project1 from '../../assets/images/resource/project-1.jpg';
import Project2 from '../../assets/images/resource/project-2.jpg';
import Project3 from '../../assets/images/resource/project-3.jpg';
import Project4 from '../../assets/images/resource/project-4.jpg';

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
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    }
};

function ProjectSliderHomeOne({ className }) {
    return (
        <section className={`project-section ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="row">
                        <div className="col-lg-7">
                            <span className="sub-title">recently Completed work</span>
                            <h2>Improve & Enhance the <br />Tech Projects</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form, by humor or randomised words.</div>
                        </div>
                    </div>
                </div>

                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="project-carousel ">
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project1} alt="Project 1" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Tech Solutions</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project2} alt="Project 2" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Smart Visions</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project3} alt="Project 3" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Platform Integration</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project4} alt="Project 4" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Web Development</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project1} alt="Project 1" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Tech Solutions</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project2} alt="Project 2" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Smart Visions</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project3} alt="Project 3" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Platform Integration</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project4} alt="Project 4" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Web Development</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default ProjectSliderHomeOne;
