import React from 'react';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import BackToTop from '../BackToTop.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';


// Import images
import TestimonialImage1 from '../../assets/images/resource/testi-thumb-3.jpg'; 
import TestimonialImage2 from '../../assets/images/resource/testi-thumb-2.jpg';


function Testimonial() {
    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Testimonial"
                breadcrumb={[
                    { Link : '/', title: 'Home' },
                    { Link : '/testimonial', title: 'Testimonial' },
                ]}
            />
            <section>
                <div className="container">
                    <div className="row">
                        {/* Testimonial 1 */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="testimonial-block-four mb-md-30">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <span className="icon icon-quote"></span>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="text">
                                            Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <figure className="thumb">
                                            <img src={TestimonialImage1} alt="Jessica Brown" />
                                        </figure>
                                        <h5 className="name">Jessica Brown</h5>
                                        <span className="designation">Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="testimonial-block-four">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <span className="icon icon-quote"></span>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="text">
                                            Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <figure className="thumb">
                                            <img src={TestimonialImage2} alt="Alesha Brown" />
                                        </figure>
                                        <h5 className="name">Alesha Brown</h5>
                                        <span className="designation">Co Founder</span>
                                    </div>
                                </div>
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
export default Testimonial;
