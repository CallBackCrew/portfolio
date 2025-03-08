import React from 'react';
import { Link  } from 'react-router-dom';

// Import images
import PricingImage1 from '../../assets/images/resource/pricing-1.png';
import PricingImage2 from '../../assets/images/resource/pricing-2.png';

function PricingSection() {
    return (
        <section className="pricing-section">
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-xl-6 col-lg-12 col-md-12">
                        <div className="inner-column wow fadeInRight">
                            <div className="sec-title">
                                <span className="sub-title">Our Pricing Plans</span>
                                <h2>Choose Your Optimal Pricing Plans</h2>
                            </div>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h5 className="title">Quality Services</h5>
                                <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
                            </div>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h5 className="title">Business Management</h5>
                                <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
                            </div>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h5 className="title">Expert IT Team</h5>
                                <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Column */}
                    <div className="pricing-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            {/* Pricing Block */}
                            <div className="pricing-block">
                                <div className="inner-box">
                                    <figure className="image"><img src={PricingImage1} alt="Basic Plan" /></figure>
                                    <div className="price-box">
                                        <h4 className="price"><sup>$</sup>49</h4>
                                        <span className="validaty">/ Monthly</span>
                                    </div>
                                    <h4 className="title">Basic Plan</h4>
                                    <ul className="features">
                                        <li>24/7 system monitoring</li>
                                        <li>Security management</li>
                                        <li>Patch management</li>
                                        <li>Remote support</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                                            <span className="btn-title">Choose Plan</span>
                                        </Link >
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Block */}
                            <div className="pricing-block style-two pull-left">
                                <div className="inner-box">
                                    <figure className="image"><img src={PricingImage2} alt="Pro Plan" /></figure>
                                    <div className="price-box">
                                        <h4 className="price"><sup>$</sup>69</h4>
                                        <span className="validaty">/ Monthly</span>
                                    </div>
                                    <h4 className="title">Pro Plan</h4>
                                    <ul className="features">
                                        <li>24/7 system monitoring</li>
                                        <li>Security management</li>
                                        <li>Patch management</li>
                                        <li>Remote support</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link  to="/pricing" className="theme-btn btn-style-three">
                                            <span className="btn-title">Choose Plan</span>
                                        </Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingSection;
