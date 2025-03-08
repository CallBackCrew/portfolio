import React from 'react';
import { Link  } from 'react-router-dom';
import BackgroundImage from '../../assets/images/background/1.jpg';
import IconLogo from '../../assets/images/resource/icon-logo.png'; 
function CallToActionHomeTwo({ className }) {
    return (
        <section
            className={`call-to-action alternate ${className || ''}`}
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="auto-container">
                <div className="title-box wow fadeInUp">
                    <div className="icon bounce-y">
                        <img src={IconLogo} alt="Icon Logo" />
                    </div>
                    <h1 className="title">
                        IT Solutions & Services <br /> at your Fingertips
                    </h1>
                    <Link  to="/page-services" className="theme-btn btn-style-one hvr-light">
                        <span className="btn-title">get in touch</span>
                    </Link >
                </div>
            </div>
        </section>
    );
}

export default CallToActionHomeTwo;
