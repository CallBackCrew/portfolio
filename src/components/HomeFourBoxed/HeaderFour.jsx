import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import logo1 from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo-2.png';
import StickyMenu from '../../lib/StickyMenu.js';
import Navigation from '../Navigation.jsx';

function Header({ action, className, scroll }) {
    useEffect(() => {
        StickyMenu(); // Initialize the sticky menu
    }, []);

    return (
        <header className={`main-header header-style-four ${className || ''}`}>
            {/* Header Lower */}
            <div className="header-lower">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link  to="/"><img src={logo1} alt="Oitech" title="Oitech" /></Link >
                        </div>
                    </div>

                    <div className="nav-outer">
                        {/* Navigation */}
                        <nav className="nav main-menu">
                            <Navigation />
                        </nav>
                    </div>

                    <div className="outer-box">
                        <Link  to="tel:+92(8800)9806" className="info-btn">
                            <i className="icon fa fa-phone"></i>
                            <small>Call Anytime</small><br /> + 88 ( 9800 ) 6802
                        </Link >

                        {/* Mobile Nav toggler */}
                        <div className="mobile-nav-toggler" onClick={action}>
                            <span className="icon lnr-icon-bars"></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Header Lower */}

            {/* Mobile Menu */}
            <div className="mobile-menu">
                <div className="menu-backdrop"></div>

                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link  to="/"><img src={logo1} alt="" title="" /></Link >
                        </div>
                        <div className="close-btn"><i className="icon fa fa-times"></i></div>
                    </div>

                    <ul className="navigation clearfix">
                        {/* Keep This Empty / Menu will come through Javascript */}
                    </ul>
                    <ul className="contact-list-one">
                        <li>
                            <div className="contact-info-box">
                                <i className="icon lnr-icon-phone-handset"></i>
                                <span className="title">Call Now</span>
                                <Link  to="tel:+92880098670">+92 (8800) - 98670</Link >
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-envelope1"></span>
                                <span className="title">Send Email</span>
                                <Link  to="mailto:help@company.com">help@company.com</Link >
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-clock"></span>
                                <span className="title">Opening Hours</span>
                                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div>
                        </li>
                    </ul>

                    <ul className="social-Link s">
                        <li><Link  to="#"><i className="fab fa-twitter"></i></Link ></li>
                        <li><Link  to="#"><i className="fab fa-facebook-f"></i></Link ></li>
                        <li><Link  to="#"><i className="fab fa-pinterest"></i></Link ></li>
                        <li><Link  to="#"><i className="fab fa-instagram"></i></Link ></li>
                    </ul>
                </nav>
            </div>
            {/* End Mobile Menu */}

            {/* Sticky Header */}
            <div className={`sticky-header ${scroll ? 'fixed-header animated slideInDown' : ''}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo">
                            <Link  to="/"><img src={logo2} alt="Oitech" /></Link >
                        </div>

                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <Navigation />
                                </div>
                            </nav>

                            <div className="mobile-nav-toggler" onClick={action}>
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Sticky Header */}
        </header>
    );
}

export default Header;
