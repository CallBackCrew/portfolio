import React from 'react';
import BenefitsImage from '../../assets/images/resource/benefits-2.jpg'; 

function OfferSectionFour({ className }) {
    return (
        <section className={`offer-section-four ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-5 col-lg-6 col-md-12">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <span className="sub-title">Company Benefits</span>
                                    <h2>Always Deliver More than you Expected</h2>
                                </div>
                                <div className="info-box">
                                    <span className="count">01</span>
                                    <h5 className="title">End to End Development</h5>
                                    <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum tendency elit sit amet.</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">02</span>
                                    <h5 className="title">Software IT Outsource</h5>
                                    <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum tendency elit sit amet.</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">03</span>
                                    <h5 className="title">Digital Marketing</h5>
                                    <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum tendency elit sit amet.</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src={BenefitsImage} alt="Company Benefits" />
                                    </figure>
                                    <div className="caption">Execute your Ideas from start</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OfferSectionFour;
