import React from 'react';
import { Link  } from 'react-router-dom';
import About1 from '../../assets/images/resource/about-1.jpg';
import About2 from '../../assets/images/resource/about-2.jpg';
import About3 from '../../assets/images/resource/image-1.jpg';

function AboutHomeOne({ className }) {
    return (
        <section className={`about-section pt-0 ${className || ''}`}>
            {/* Features Section */}
            <div className="features-section pull-up pt-0">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            {/* Feature Block 1 */}
                            <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="title-box">
                                        <i className="icon flaticon-business-002-graph"></i>
                                        <h5 className="title"><Link  to="/about-us">Perfect Business Solutions</Link ></h5>
                                    </div>
                                    <div className="text">When an unknown printer took <br />a galley type book.</div>
                                </div>
                            </div>

                            {/* Feature Block 2 */}
                            <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                                <div className="inner-box">
                                    <div className="title-box">
                                        <i className="icon flaticon-business-012-startup"></i>
                                        <h5 className="title"><Link  to="/about-us">Perfect Business Solutions</Link ></h5>
                                    </div>
                                    <div className="text">When an unknown printer took <br />a galley type book.</div>
                                </div>
                            </div>

                            {/* Feature Block 3 */}
                            <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                                <div className="inner-box">
                                    <div className="title-box">
                                        <i className="icon flaticon-business-046-like"></i>
                                        <h5 className="title"><Link  to="/about-us">Perfect Business Solutions</Link ></h5>
                                    </div>
                                    <div className="text">When an unknown printer took <br />a galley type book.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">About Our Company</span>
                                <h2>We Execute Our Ideas From The Start to Finish</h2>
                                <div className="text">
                                    Web designing in a powerful way of just not an only professions, however, in a passion for our Company. 
                                    We have a tendency to believe the idea that a smart-looking website is the first impression on visitors.
                                </div>
                            </div>

                            <div className="content-box">
                                <div className="info-box">
                                    <h5 className="title">High Quality IT Solutions for Startup</h5>
                                    <Link  to="#" className="read-more">More <i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>

                                <div className="about-block">
                                    <i className="icon flaticon-business-018-startup"></i>
                                    <h5 className="title">Manage Tech Services</h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                </div>

                                <div className="about-block">
                                    <i className="icon flaticon-business-027-world"></i>
                                    <h5 className="title">Internal Networking</h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate.</div>
                                </div>
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
                            <figure className="image-1 overlay-anim wow fadeInUp">
                                <img src={About1} alt="About 1" />
                            </figure>
                            <figure className="image-2 overlay-anim wow fadeInRight">
                                <img src={About2} alt="About 2" />
                            </figure>
                            <div className="experience bounce-y">
                                <img src={About3} alt="Experience Icon" className="icon" />
                                <strong>3600+</strong> Satisfied Client
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHomeOne;
