import React from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importing images
import Project5 from '../../assets/images/resource/project-5.jpg';
import Project6 from '../../assets/images/resource/project-6.jpg';
import Project7 from '../../assets/images/resource/project-7.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3, // Set based on the design requirements
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
            slidesPerView: 3,
        },
    }
};

function ProjectSliderHomeTwo({ className }) {
    return (
        <section className={`project-section-two ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Recently Completed Work</span>
                    <h2>Improve & Enhance the <br />Tech Projects</h2>
                </div>

                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="project-carousel-two">
                        {/* Project Slide 1 */}
                        <SwiperSlide className="project-block-two">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project5} alt="Tech Solutions" />
                                        </Link >
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <h5 className="title">
                                        <Link  to="/projects-details">Tech Solutions</Link >
                                    </h5>
                                    <span className="cat">DESIGN / IDEAS</span>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Project Slide 2 */}
                        <SwiperSlide className="project-block-two">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project6} alt="Smart Visions" />
                                        </Link >
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <h5 className="title">
                                        <Link  to="/projects-details">Smart Visions</Link >
                                    </h5>
                                    <span className="cat">DESIGN / IDEAS</span>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Project Slide 3 */}
                        <SwiperSlide className="project-block-two">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project7} alt="Platform Integration" />
                                        </Link >
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <h5 className="title">
                                        <Link  to="/projects-details">Platform Integration</Link >
                                    </h5>
                                    <span className="cat">DESIGN / IDEAS</span>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block-two">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project5} alt="Tech Solutions" />
                                        </Link >
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <h5 className="title">
                                        <Link  to="/projects-details">Tech Solutions</Link >
                                    </h5>
                                    <span className="cat">DESIGN / IDEAS</span>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Project Slide 2 */}
                        <SwiperSlide className="project-block-two">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project6} alt="Smart Visions" />
                                        </Link >
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <h5 className="title">
                                        <Link  to="/projects-details">Smart Visions</Link >
                                    </h5>
                                    <span className="cat">DESIGN / IDEAS</span>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Project Slide 3 */}
                        <SwiperSlide className="project-block-two">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={Project7} alt="Platform Integration" />
                                        </Link >
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <h5 className="title">
                                        <Link  to="/projects-details">Platform Integration</Link >
                                    </h5>
                                    <span className="cat">DESIGN / IDEAS</span>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default ProjectSliderHomeTwo;
