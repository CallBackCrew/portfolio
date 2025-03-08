import React, { useEffect } from 'react';
import logo1 from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo-2.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation.jsx';
import { Link  } from 'react-router-dom';

function Header({ action, className, scroll }) {
    useEffect(() => {
        StickyMenu(); 
    }, []);

    return (
        <header 
            className={`main-header header-style-one ${className || ''}`}
            style={{ backgroundColor: '#fff' }} 
        >
            {/* Header Top */}
            <div className="header-top">
                <div className="inner-container">
                    <div className="top-left">
                        <ul className="list-style-one">
                            <li><i className="fa fa-envelope" /> <Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link ></li>
                            <li><i className="fa fa-map-marker" /> 88 Broklyn Golden Street. New York</li>
                        </ul>
                    </div>
                </div>
                <div className="outer-box">
                    <ul className="social-icon-one">
                        <li><Link  to="#"><span className="fab fa-twitter" /></Link ></li>
                        <li><Link  to="#"><span className="fab fa-facebook-square" /></Link ></li>
                        <li><Link  to="#"><span className="fab fa-pinterest-p" /></Link ></li>
                        <li><Link  to="#"><span className="fab fa-instagram" /></Link ></li>
                    </ul>
                </div>
            </div>

            {/* Header Lower */}
            <div className="header-lower">
                <div className="container-fluid">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo">
                                <Link  to="/"><img src={logo1} alt="Company Logo" title="Company" /></Link >
                            </div>
                        </div>

                        <div className="nav-outer">
                            {/* Navigation */}
                            <nav className="nav main-menu">
                                <Navigation />
                            </nav>
                        </div>
                    </div>
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

                            <div className="mobile-nav-toggler" onClick={action}>
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
