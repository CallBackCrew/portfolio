import React from 'react';
import { Link  } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Image1 from '../../assets/images/background/2.jpg';
import Portfolio1 from '../../assets/images/resource/project-thumb-1.jpg';
import Portfolio2 from '../../assets/images/resource/project-thumb-2.jpg';
import Portfolio3 from '../../assets/images/resource/project-thumb-3.jpg';
import Portfolio4 from '../../assets/images/resource/project-thumb-4.jpg';
import Portfolio5 from '../../assets/images/resource/project-thumb-5.jpg';
import Portfolio6 from '../../assets/images/resource/project-thumb-6.jpg';

function FooterHomeOne({ className }) {
    return (
        <footer className={`main-footer ${className || ''}`}>
            <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>
            
            {/* Widgets Section */}
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Footer Column - About */}
                        <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                            <div className="footer-widget about-widget">
                                <div className="logo">
                                    <Link  to="/"><img src={logo} alt="Logo" /></Link >
                                </div>
                                <div className="text">Desires to obtain pain of itself, because it is pain, but occasionally circumstances.</div>
                                <ul className="social-icon-two">
                                    <li><Link  to="#"><i className="fab fa-twitter"></i></Link ></li>
                                    <li><Link  to="#"><i className="fab fa-facebook"></i></Link ></li>
                                    <li><Link  to="#"><i className="fab fa-pinterest"></i></Link ></li>
                                    <li><Link  to="#"><i className="fab fa-instagram"></i></Link ></li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer Column - Explore */}
                        <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget">
                                <h3 className="widget-title">Explore</h3>
                                <ul className="user-Link s">
                                    <li><Link  to="#">About Company</Link ></li>
                                    <li><Link  to="#">Meet the Team</Link ></li>
                                    <li><Link  to="#">News & Media</Link ></li>
                                    <li><Link  to="#">Our Projects</Link ></li>
                                    <li><Link  to="#">Contact</Link ></li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer Column - Contact */}
                        <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget contact-widget">
                                <h3 className="widget-title">Contact</h3>
                                <div className="widget-content">
                                    <div className="text">66 Road Broklyn Street, 600 New York, USA</div>
                                    <ul className="contact-info">
                                        <li><i className="fa fa-envelope"></i> <Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                                        <li><i className="fa fa-phone-square"></i> <Link  to="tel:+923363313364">+92 3363313364</Link ></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer Column - Gallery */}
                        <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget gallery-widget">
                                <h3 className="widget-title">Gallery</h3>
                                <div className="widget-content">
                                    <div className="outer clearfix">
                                        {[Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6].map((portfolio, index) => (
                                            <figure className="image" key={index}>
                                                <Link  to="#"><img src={portfolio} alt={`Portfolio ${index + 1}`} /></Link >
                                            </figure>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">&copy; Copyright reserved by <Link  to="/">kodesolution.com</Link ></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterHomeOne;
