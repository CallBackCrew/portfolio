import React from 'react';
import { Link  } from 'react-router-dom';
import BackgroundImage from '../../assets/images/background/5.jpg';

function ServicesSectionFive({ className }) {
    return (
        <section 
            className={`services-section-five ${className || ''}`} 
            style={{ backgroundImage: `url(${BackgroundImage})` }} 
        >
            <div className="auto-container">
                <div className="sec-title light text-center">
                    <span className="sub-title">Services we’re offering</span>
                    <h2>We Provide our Clients <br />Best IT Services</h2>
                </div>

                <div className="row">
                    {/* Service Block Five */}
                    <div className="service-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-business-035-helpline"></i>
                            </div>
                            <h4 className="title">
                                <Link  to="/service-details">Consultancy</Link >
                            </h4>
                            <div className="text">Taking seamless key performance indicators offline to maximise the tail.</div>
                        </div>
                    </div>

                    {/* Service Block Five */}
                    <div className="service-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-business-010-startup"></i>
                            </div>
                            <h4 className="title">
                                <Link  to="/service-details">Development</Link >
                            </h4>
                            <div className="text">Taking seamless key performance indicators offline to maximise the tail.</div>
                        </div>
                    </div>

                    {/* Service Block Five */}
                    <div className="service-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-business-032-megaphone"></i>
                            </div>
                            <h4 className="title">
                                <Link  to="/service-details">Marketing</Link >
                            </h4>
                            <div className="text">Taking seamless key performance indicators offline to maximise the tail.</div>
                        </div>
                    </div>

                    {/* Service Block Five */}
                    <div className="service-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-business-063-diamond"></i>
                            </div>
                            <h4 className="title">
                                <Link  to="/service-details">Softwares</Link >
                            </h4>
                            <div className="text">Taking seamless key performance indicators offline to maximise the tail.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSectionFive;
