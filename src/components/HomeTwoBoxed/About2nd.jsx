import React from 'react';
import { Link  } from 'react-router-dom';
import AboutImage1 from '../../assets/images/resource/about-7.jpg';
import AboutImage2 from '../../assets/images/resource/about-8.jpg';
import FounderThumb from '../../assets/images/resource/thumb-1.jpg';
import IconLogo from '../../assets/images/resource/icon-logo-2.png';

function AboutSectionFour() {
    return (
        <section className="about-section-four">
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">What else here</span>
                                <h2>We’re Leading in IT Technology Market</h2>
                                <div className="text">
                                    There are many variations of passages of lorem free market available, but the majority have alteration in some form, by injected humour, or randomised words.
                                </div>
                            </div>

                            <blockquote className="blockquote-style-one">
                                Lorem Ipsum is simply dummy available typesetting industry been the industry standard.
                            </blockquote>

                            <div className="btn-box d-flex">
                                <Link  to="/about-us" className="theme-btn btn-style-one">
                                    <span className="btn-title">get in touch</span>
                                </Link >
                                <div className="founder-info">
                                    <div className="thumb">
                                        <img src={FounderThumb} alt="Kevin Martin" />
                                    </div>
                                    <h5 className="name">Kevin Martin</h5>
                                    <span className="designation">Co Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                        <div className="inner-column">
                            <span className="float-text">oitech</span>
                            <figure className="image-1 overlay-anim wow fadeInUp">
                                <img src={AboutImage1} alt="About Image 1" />
                            </figure>
                            <figure className="image-2 overlay-anim wow fadeInRight">
                                <img src={AboutImage2} alt="About Image 2" />
                            </figure>
                            <div className="icon-box">
                                <img src={IconLogo} alt="Icon Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionFour;
