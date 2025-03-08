import React from 'react';
import { Link  } from 'react-router-dom';
function MapSection({ className }) {
    return (
        <section className={`map-section ${className || ''}`}>
            <iframe
                className="map"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Map"
                style={{ border: 0 }}
                allowFullScreen
            ></iframe>

            <div className="branches-outer">
                <div className="auto-container">
                    <div className="row">
                        {/* Branch Block for New York */}
                        <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-box">
                                <h5 className="title">New York</h5>
                                <ul className="info-list">
                                    <li><i className="fa fa-phone"></i> <Link  to="tel:3363313364">+92 3363313364</Link ><br /></li>
                                    <li><i className="fa fa-envelope"></i> <Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ><br /></li>
                                    <li><i className="fa fa-map-marker-alt"></i> 35 Deerfield Valdosta Road, United Kingdom</li>
                                </ul>
                            </div>
                        </div>

                        {/* Branch Block for Washington DC */}
                        <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-box">
                                <h5 className="title">Washington DC</h5>
                                <ul className="info-list">
                                    <li><i className="fa fa-phone"></i> <Link  to="tel:3363313364">+923363313364</Link ><br /></li>
                                    <li><i className="fa fa-envelope"></i> <Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ><br /></li>
                                    <li><i className="fa fa-map-marker-alt"></i> 35 Deerfield Valdosta Road, United Kingdom</li>
                                </ul>
                            </div>
                        </div>

                        {/* Branch Block for Las Vegas */}
                        <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-box">
                                <h5 className="title">Las Vegas</h5>
                                <ul className="info-list">
                                    <li><i className="fa fa-phone"></i> <Link  to="tel:666888000">+923363313364</Link ><br /></li>
                                    <li><i className="fa fa-envelope"></i> <Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ><br /></li>
                                    <li><i className="fa fa-map-marker-alt"></i> 35 Deerfield Valdosta Road, United Kingdom</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MapSection;
