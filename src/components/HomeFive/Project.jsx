import React from 'react';
import { Link  } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import ProjectImage1 from '../../assets/images/resource/project-1.jpg'; 
import ProjectImage2 from '../../assets/images/resource/project-2.jpg'; 
import ProjectImage3 from '../../assets/images/resource/project-3.jpg';
import ProjectImage4 from '../../assets/images/resource/project-4.jpg'; 

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
    },
};

function ProjectSliderHomeThree() {
    // Project titles
    const projectTitles = [
        'Tech Solutions',
        'Smart Visions',
        'Platform Integration',
        'Web Development'
    ];

    return (
        <section className="project-section alternate pb-0">
            <div className="auto-container">
                <div className="sec-title">
                    <div className="row">
                        <div className="col-lg-7">
                            <span className="sub-title">Recently Completed Work</span>
                            <h2>Improve & Enhance the <br />Tech Projects</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="text">
                                There are many variations of passages of available but the majority have suffered
                                alteration in some form, by humor or random words which don't look even slightly believable.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="project-carousel">
                        {[ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4].map((image, index) => (
                            <SwiperSlide key={index} className="project-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link  to={`/projects-details/${index + 1}`}>
                                                <img src={image} alt={`Project ${index + 1}`} />
                                            </Link >
                                        </figure>
                                        <Link  to={`/projects-details/${index + 1}`} className="icon">
                                            <i className="fa fa-long-arrow-alt-right"></i>
                                        </Link >
                                    </div>
                                    <div className="content-box">
                                        <h4 className="title">
                                            <Link  to={`/projects-details/${index + 1}`}>{projectTitles[index]}</Link >
                                        </h4>
                                        <span className="cat">DESIGN / IDEAS</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {[ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4].map((image, index) => (
                            <SwiperSlide key={index} className="project-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link  to={`/projects-details/${index + 1}`}>
                                                <img src={image} alt={`Project ${index + 1}`} />
                                            </Link >
                                        </figure>
                                        <Link  to={`/projects-details/${index + 1}`} className="icon">
                                            <i className="fa fa-long-arrow-alt-right"></i>
                                        </Link >
                                    </div>
                                    <div className="content-box">
                                        <h4 className="title">
                                            <Link  to={`/projects-details/${index + 1}`}>{projectTitles[index]}</Link >
                                        </h4>
                                        <span className="cat">DESIGN / IDEAS</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default ProjectSliderHomeThree;
