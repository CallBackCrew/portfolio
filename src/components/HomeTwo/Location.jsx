import React from 'react';
import { Link  } from 'react-router-dom';
import MapImage from '../../assets/images/icons/dotted-map.png';

function LocationsSection({ className }) {
    return (
        <section className={`locations-section ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Visit Us Today</span>
                    <h2>Our Locations</h2>
                </div>

                <div className="map-box">
                    <figure className="map">
                        <img src={MapImage} alt="Locations map" />
                    </figure>

                    {/* Location 1 */}
                    <div className="location location-1">
                        <span className="location-dot"></span>
                        <div className="location-info">
                            <ul className="info-list">
                                <li><Link  to="tel:+880123456789">+880123456789</Link ></li>
                                <li>88 Broklyn Golden Street.</li>
                                <li><Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                            </ul>
                        </div>
                    </div>

                    {/* Location 2 */}
                    <div className="location location-2">
                        <span className="location-dot"></span>
                        <div className="location-info">
                            <ul className="info-list">
                                <li><Link  to="tel:+923363313364">+923363313364</Link ></li>
                                <li>88 Broklyn Golden Street.</li>
                                <li><Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                            </ul>
                        </div>
                    </div>

                    {/* Location 3 */}
                    <div className="location location-3 align-center">
                        <span className="location-dot"></span>
                        <div className="location-info">
                            <ul className="info-list">
                                <li><Link  to="tel:+880123456789">+880123456789</Link ></li>
                                <li>88 Broklyn Golden Street.</li>
                                <li><Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                            </ul>
                        </div>
                    </div>

                    {/* Location 4 */}
                    <div className="location location-4 align-right">
                        <span className="location-dot"></span>
                        <div className="location-info">
                            <ul className="info-list">
                                <li><Link  to="tel:+9233633133364">+923363313364</Link ></li>
                                <li>88 Broklyn Golden Street.</li>
                                <li><Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                            </ul>
                        </div>
                    </div>

                    {/* Location 5 */}
                    <div className="location location-5 align-right">
                        <span className="location-dot"></span>
                        <div className="location-info">
                            <ul className="info-list">
                                <li><Link  to="tel:+923363313364">+923363313364</Link ></li>
                                <li>88 Broklyn Golden Street.</li>
                                <li><Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationsSection;
