import React from 'react';
import { Link  } from 'react-router-dom';
import Service1 from '../../assets/images/resource/service-1.jpg';
import Service2 from '../../assets/images/resource/service-2.jpg';
import Service3 from '../../assets/images/resource/service-3.jpg';

function ServicesSection() {
    return (
        <section className="services-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Services we’re offering</span>
                    <h2>High quality products and services<br /> that we stand behind</h2>
                </div>

                <div className="row">
                    {/* Service Block 1 */}
                    <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/service-details">
                                        <img src={Service1} alt="Product Development" />
                                    </Link >
                                </figure>
                                <div className="icon-box">
                                    <i className="icon flaticon-business-010-startup"></i>
                                </div>
                            </div>
                            <div className="content-box">
                                <h5 className="title">
                                    <Link  to="/service-details">Product Development</Link >
                                </h5>
                                <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                <Link  to="/service-details" className="read-more">
                                    read More <i className="fa fa-long-arrow-alt-right"></i>
                                </Link >
                            </div>
                        </div>
                    </div>

                    {/* Service Block 2 */}
                    <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/service-details">
                                        <img src={Service2} alt="UI/UX Designing" />
                                    </Link >
                                </figure>
                                <div className="icon-box">
                                    <i className="icon flaticon-business-002-graph"></i>
                                </div>
                            </div>
                            <div className="content-box">
                                <h5 className="title">
                                    <Link  to="/service-details">UI/UX Designing</Link >
                                </h5>
                                <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                <Link  to="/service-details" className="read-more">
                                    read More <i className="fa fa-long-arrow-alt-right"></i>
                                </Link >
                            </div>
                        </div>
                    </div>

                    {/* Service Block 3 */}
                    <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/service-details">
                                        <img src={Service3} alt="Digital Marketing" />
                                    </Link >
                                </figure>
                                <div className="icon-box">
                                    <i className="icon flaticon-business-048-coin"></i>
                                </div>
                            </div>
                            <div className="content-box">
                                <h5 className="title">
                                    <Link  to="/service-details">Digital Marketing</Link >
                                </h5>
                                <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                <Link  to="/service-details" className="read-more">
                                    read More <i className="fa fa-long-arrow-alt-right"></i>
                                </Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
