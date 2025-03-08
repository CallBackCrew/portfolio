import React, { useEffect, useState  } from 'react';
import { Link  } from 'react-router-dom';
import logo1 from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo-2.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';

function HomeTwoHeader({ action, className, scroll }) {
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
        <header className={`main-header header-style-two ${className || ''}`}>
            <div className="header-top">
    			<div className="inner-container">
    				<div className="top-left">
    					<ul className="list-style-one">
    						<li><i className="fa fa-envelope"></i> <Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
    						<li><i className="fa fa-map-marker"></i> 88 Broklyn Golden Street. New York</li>
    					</ul>
    				</div>

    				<div className="top-right">
    					<ul className="useful-Link s">
    						<li><Link  to="#">Help</Link ></li>
    						<li><Link  to="#">Suppppt</Link ></li>
    						<li><Link  to="#">Contact</Link ></li>
    					</ul>
    				</div>
    			</div>

    			<div className="outer-box">
    				<ul className="social-icon-one">
    					<li><Link  to="#"><span className="fab fa-twitter"></span></Link ></li>
    					<li><Link  to="#"><span className="fab fa-facebook-square"></span></Link ></li>
    					<li><Link  to="#"><span className="fab fa-pinterest-p"></span></Link ></li>
    					<li><Link  to="#"><span className="fab fa-instagram"></span></Link ></li>
    				</ul>
    			</div>
    		</div>
            <div className="header-lower">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link  to="/"><img src={logo2} alt="" title="Amiso"/></Link >
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
    							<Link  to="#" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></Link >
    						</div>
                            <Link  href="tel:+92(8800)9806" className="info-btn">
                                <i className="icon fa fa-phone"></i>
                                <small>Call Anytime</small><br /> +92 (8800) 9806
                            </Link >
    						<Link  to="/contact" className="theme-btn btn-style-one">
                                <span className="btn-title">get solution</span>
                            </Link >

    						<div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars"></span>
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
                                    <a href="tel:+92880098670">+92 (8800) - 98670</a>
                                </div>
                            </li>
                            <li>
                                {/*<!-- Contact Info Box -->*/}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1"></span>
                                    <span className="title">Send Email</span>
                                    <a href="mailto:help@company.com">help@company.com</a>
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
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
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
                
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link  to="/" ><img src={logo2} alt=""  /></Link >
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                    <Navigation />
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={(e) => action(e)}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </div>
        </header>
     </>
    );
}

export default HomeTwoHeader;
