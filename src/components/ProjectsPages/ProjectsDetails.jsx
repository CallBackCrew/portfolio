import React from 'react';
import { Link  } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// Import images
import projectDetailsImage from '../../assets/images/resource/project-details.jpg';
import project1 from '../../assets/images/resource/project-1.jpg';
import project2 from '../../assets/images/resource/project-2.jpg';
import project3 from '../../assets/images/resource/project-3.jpg';
import project4 from '../../assets/images/resource/project-4.jpg';

// Swiper configuration
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

function ProjectsDetails() {
    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Project Details"
                breadcrumb={[
                    { Link : '/', title: 'Home' },
                    { Link : '/project-details', title: 'Project Details' },
                ]}
            />

            <section className="project-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-details__top">
                                <div className="project-details__img">
                                    <img src={projectDetailsImage} alt="Project Details" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-details__content">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                            <div className="project-details__content-left">
							<h3 className="">Here to Know About This Project</h3>
							<p className="">There are many variations of passages of psum
								available, but the majority have suffered alteration in some form, by injected
								humour, or randomised words which don't look even slightly believable. If you are
								going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
								embarrassing hidden in the middle of text. Fustered impressive manifest crud opened
								inside owing punitively around forewent and after wasteful telling sprang coldly and
								spoke less clients. Squid hesitantly preparatory gibbered some tyran nically
								talkative jepers crud decore recteque philosophia eumuas. </p>
							<p className="mb-5">Beyond more stoic this along goodness hey this this
								wow manatee mongoose one as since a far flustered impressive manifest far crud
								opened inside owing punitively around forewent and after wasteful telling sprang
								coldly and spoke less clients. Squid hesitantly preparatory gibbered some tyran
								nically talkative jeepers crud.</p>
							<h3 className="">Project Challenges</h3>
							<p className="mb-5">Eque porro est qui dolorem ipsum quia quaed inventore
								veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
								quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is
								simply dummy text of the printing and typesetting.</p>
							<h3 className="">Organic Food Supply</h3>
							<p className="">When an unknown printer took a galley of type and
								scrambled it to make a type specimen book. It has survived not only five centuries,
								but also the leap into electronic typesetting, remaining essentially unchanged. It
								was popularised in the 1960s with the release of Letraset sheets containing. Neque
								porro est qui dolorem ipsumo.</p>
						</div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-details__content-right">
                                    <div className="project-details__details-box">
                                        <ul className="list-unstyled project-details__details-list">
                                            <li><p className="project-details__client">Date</p><h4 className="project-details__name">10 January, 2023</h4></li>
                                            <li><p className="project-details__client">Client</p><h4 className="project-details__name">Kodesolution Ltd</h4></li>
                                            <li><p className="project-details__client">Website</p><h4 className="project-details__name">www.domain.com</h4></li>
                                            <li><p className="project-details__client">Location</p><h4 className="project-details__name">New York, USA</h4></li>
                                            <li><p className="project-details__client">Value</p><h4 className="project-details__name">$12,367</h4></li>
                                            <li>
                                                <div className="project-details__social">
                                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                                    <Link  to="#"><i className="fab fa-facebook"></i></Link >
                                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-details__pagination-box">
                                <ul className="project-details__pagination list-unstyled clearfix">
                                    <li className="next">
                                        <div className="icon">
                                            <Link  to="#" aria-label="Previous"><i className="lnr lnr-icon-arrow-left"></i></Link >
                                        </div>
                                        <div className="content">Previous</div>
                                    </li>
                                    <li className="previous">
                                        <div className="content">Next</div>
                                        <div className="icon">
                                            <Link  to="#" aria-label="Next"><i className="lnr lnr-icon-arrow-right"></i></Link >
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ProjectsDetails;
