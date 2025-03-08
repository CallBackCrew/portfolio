import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import logo1 from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo-2.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';

function Header({ action, className, scroll }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
    useEffect(() => {
        StickyMenu();
    }, []);
    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };
    const toggleSearchPopup = () => setSearchPopupOpen((prev) => !prev); // Toggle search popup
    const closeSearchPopup = () => setSearchPopupOpen(false); // Close search popup

    return (
        <>
            <header className={`main-header header-style-one ${className || ''}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="inner-container">

                        <div className="top-left">
                            {/*<!-- Info List -->*/}
                            <ul className="list-style-one">
                                <li><i className="fa fa-envelope"></i> <Link  href="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                                <li><i className="fa fa-map-marker"></i> 88 Broklyn Golden Street. New York</li>
                            </ul>
                        </div>

                        <div className="top-right">
                            <ul className="useful-Link s">
                                <li><Link  href="#">Help</Link ></li>
                                <li><Link  href="#">Support</Link ></li>
                                <li><Link  href="#">Contact</Link ></li>
                            </ul>
                        </div>
                    </div>

                    <div className="outer-box">
                        <ul className="social-icon-one">
                            <li><Link  href="#"><span className="fab fa-twitter"></span></Link ></li>
                            <li><Link  href="#"><span className="fab fa-facebook-square"></span></Link ></li>
                            <li><Link  href="#"><span className="fab fa-pinterest-p"></span></Link ></li>
                            <li><Link  href="#"><span className="fab fa-instagram"></span></Link ></li>
                        </ul>
                    </div>
                </div>

                {/* Header Lower */}
                <div className="header-lower">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo">
                                <Link  to="/"><img src={logo1} alt="Company Logo" title="Company" /></Link >
                            </div>
                        </div>
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <Navigation />
                            </nav>
                            <div className="outer-box">
                                <div className="ui-btn-outer">
                                    <button className="ui-btn ui-btn search-btn" onClick={toggleSearchPopup}>
                                        <span className="icon lnr lnr-icon-search"></span>
                                    </button>
                                    <a href="#" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></a>
                                </div>
                                <Link  href="tel:+92(8800)9806" className="info-btn">
                                    <i className="icon fa fa-phone"></i>
                                    <small>Call Anytime</small><br/> + 92 3363313364
                                </Link >
                                <Link  to="/contact" className="theme-btn btn-style-one">
                                    <span className="btn-title">Get Solution</span>
                                </Link >
                                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                    <span className="icon lnr-icon-bars"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <div className="menu-backdrop" onClick={closeMobileMenu} />
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo">
                                <Link  to="/"><img src={logo1} alt="Oitech" title="Oitech" /></Link >
                            </div>
                            <div className="close-btn" onClick={closeMobileMenu}>
                                <i className="icon fa fa-times" />
                            </div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/*<!-- Contact Info Box -->*/}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset"></i>
                                    <span className="title">Call Now</span>
                                    <Link  href="tel:+923363313364">+92 3363313364</Link >
                                </div>
                            </li>
                            <li>
                                {/*<!-- Contact Info Box -->*/}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1"></span>
                                    <span className="title">Send Email</span>
                                    <Link  href="hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link >
                                </div>
                            </li>
                            <li>
                                {/*<!-- Contact Info Box -->*/}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock"></span>
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-Link s">
                            <li><Link  href="#"><i className="fab fa-twitter"></i></Link ></li>
                            <li><Link  href="#"><i className="fab fa-facebook-f"></i></Link ></li>
                            <li><Link  href="#"><i className="fab fa-pinterest"></i></Link ></li>
                            <li><Link  href="#"><i className="fab fa-instagram"></i></Link ></li>
                        </ul>
                    </nav>
                </div>

                {/* Search Popup */}
                <div className={`search-popup ${isSearchPopupOpen ? 'active' : ''}`}>
                    <span className="search-back-drop" onClick={closeSearchPopup} />
                    <button className="close-search" onClick={closeSearchPopup}>
                        <span className="fa fa-times" />
                    </button>
                    <div className="search-inner">
                        <form method="post" action="/">
                            <div className="form-group">
                                <input
                                    type="search"
                                    name="search-field"
                                    placeholder="Search..."
                                    required
                                />
                                <button type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Sticky Header */}
                <div className={`sticky-header ${scroll ? 'fixed-header animated slideInDown' : ''}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/* Logo */}
                            <div className="logo">
                                <Link  to="/"><img src={logo2} alt="Company Logo" /></Link >
                            </div>

                            {/* Main Menu */}
                            <div className="nav-outer">
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <Navigation />
                                    </div>
                                </nav>

                                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                    <span className="icon lnr-icon-bars"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
          
        </>
    );
}

export default Header;
