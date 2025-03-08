import React from 'react';
import { Link  } from 'react-router-dom';
import MenImage from '../../assets/images/resource/men.png'; 

function AboutSectionSix({ className }) {
    return (
        <section className={`about-section-six pt-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">About Our Company</span>
                                <h2>Always Deliver More than you Expected</h2>
                                <div className="text">
                                    Sed non odio non elit porttitor tincidunt. Donec fermentum, elit sit amet gravida molestie, orci dui eleifend sem, at blandit ipsum diam non purus. Duis dapibus nisi eget vehicula dignissim.
                                </div>
                            </div>

                            <div className="content-box">
                                <div className="about-block-four">
                                    <i className="icon flaticon-business-018-startup"></i>
                                    <h5 className="title">End to End Development</h5>
                                    <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum, elit sit amet.</div>
                                </div>

                                <div className="about-block-four">
                                    <i className="icon flaticon-business-027-world"></i>
                                    <h5 className="title">Software IT Outsource</h5>
                                    <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum, elit sit amet.</div>
                                </div>

                                <ul className="list-style-three">
                                    <li>Sed non odio non elit porttitor tincidunt donec</li>
                                    <li>Sed non odio non elit porttitor tinc</li>
                                </ul>
                            </div>

                            <div className="btm-box">
                                <Link  to="/about-us" className="theme-btn btn-style-one">
                                    <span className="btn-title">get in touch</span>
                                </Link >
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            <div className="image-box">
                                <figure className="image wow fadeIn">
                                    <img src={MenImage} alt="About Us" />
                                </figure>
                                <div className="completed-projects">
                                    <strong>870+</strong>
                                    <div className="text">PROJECT DONE</div>
                                </div>
                                <div className="experience bounce-y">
                                    <strong>25</strong>
                                    <div className="text">Years of <br />Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionSix;
