import React from 'react';
import { Link  } from 'react-router-dom';
function LocationsSectionTwo({ className }) {
    return (
        <section className={`locations-section-two pt-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Get an awesome service</span>
                    <h2>Our Customer Points <br />Worldwide</h2>
                </div>

                <div className="row">
                    {/* Location 1 */}
                    <div className="location-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <h5 className="title">New York</h5>
                            <ul className="info-list">
                                <li>66 Road Broklyn Street, New York</li>
                                <li><Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                                <li><Link  to="tel:+926668889999">+92 666 888 9999</Link ></li>
                            </ul>
                        </div>
                    </div>

                    {/* Location 2 */}
                    <div className="location-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <h5 className="title">Washington</h5>
                            <ul className="info-list">
                                <li>66 Road Broklyn Street, Washington</li>
                                <li><Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                                <li><Link  to="tel:+926668889999">+92 33633133364</Link ></li>
                            </ul>
                        </div>
                    </div>

                    {/* Location 3 */}
                    <div className="location-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <h5 className="title">Boston</h5>
                            <ul className="info-list">
                                <li>66 Road Broklyn Street, Boston</li>
                                <li><Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                                <li><Link  to="tel:+923363313364">+92 3363313364</Link ></li>
                            </ul>
                        </div>
                    </div>

                    {/* Location 4 */}
                    <div className="location-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner-box">
                            <h5 className="title">Chicago</h5>
                            <ul className="info-list">
                                <li>66 Road Broklyn Street, Chicago</li>
                                <li><Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                                <li><Link  to="tel:+923363313364">+92 3363313364</Link ></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationsSectionTwo;
