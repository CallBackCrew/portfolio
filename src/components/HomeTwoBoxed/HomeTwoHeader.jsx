import React, { useEffect } from 'react';
import logo2 from '../../assets/images/logo-2.png';
import StickyMenu from '../../lib/StickyMenu.js';
import Navigation from '../Navigation.jsx';
import { Link  } from 'react-router-dom';

function HomeTwoHeader({
    action,
    className,
    scroll
}) {
    useEffect(() => {
        StickyMenu();
    });
    return (
        <header className={`main-header header-style-two ${className || ''}`}>
            
        <div className="header-top">
            <div className="inner-container">
                <div className="top-left">
                    <ul className="list-style-one">
                        <li><i className="fa fa-envelope"></i>
                            <Link  to="/mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link >
                        </li>
                        <li><i className="fa fa-map-marker"></i> 88 Broklyn Golden Street. New York</li>
                    </ul>
                </div>

                <div className="top-right">
                    <ul className="useful-Link s">
                        <li>
                            <Link  to="#">Help</Link >
                        </li>
                        <li>
                            <Link  to="#">Support</Link >
                        </li>
                        <li>
                            <Link  to="#">Contact</Link >
                        </li>
                    </ul>
                    <ul className="social-icon-one">
                        <li>
                            <Link  to="#"><span className="fab fa-twitter"></span></Link >
                        </li>
                        <li>
                            <Link  to="#"><span className="fab fa-facebook-square"></span></Link >
                        </li>
                        <li>
                            <Link  to="#"><span className="fab fa-pinterest-p"></span></Link >
                        </li>
                        <li>
                            <Link  to="#"><span className="fab fa-instagram"></span></Link >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="header-lower">
            <div className="container-fluid">
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
                    </div>

                    <div className="outer-box">
                       
                        <div className="mobile-nav-toggler" onClick={(e) => action(e)}><span className="icon lnr-icon-bars"></span>
                        </div>
                    </div>
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
    );
}

export default HomeTwoHeader;
