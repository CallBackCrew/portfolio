import React, { useState } from 'react';
import Image4 from '../../assets/images/resource/why-us-4.jpg'; 

function WhyChooseUs() {
    return (
        <section className="why-choose-us-three pt-0">
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Our Benefits</span>
                                <h2>Why Choose Our IT Services?</h2>
                                <div className="text">
                                    Choose our services to have custom software solutions for your business with the most reasonable price.
                                </div>
                            </div>

                            <div className="info-box">
                                <i className="icon flaticon-business-012-startup"></i>
                                <h4 className="title">Get Your IT Technology Solutions <br />in Few Easy Clicks</h4>
                            </div>

                            <ul className="list-style-three">
                                <li>The business applications</li>
                                <li>The business applications</li>
                                <li>Revolutionary catalysts change</li>
                                <li>Revolutionary catalysts change</li>
                                <li>Catalysts for change seamlessly</li>
                                <li>Catalysts for change seamlessly</li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                        <div className="image-box wow fadeInRight">
                            <figure className="image overlay-anim">
                                <img src={Image4} alt="Why Choose Us" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
