import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import BackgroundImage from '../../assets/images/background/1.jpg'; 
import IconLogo from '../../assets/images/resource/icon-logo.png';  

function CallToAction({ className }) {

    return (
        <section className={`call-to-action ${className || ''}`} style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="auto-container">
                <div className="title-box">
                    <div className="icon bounce-y">
                        <img src={IconLogo} alt="Icon Logo" />
                    </div>
                    <h1 className="title">IT Solutions & Services <br />at your Fingertips</h1>
                    <Link  to="/services" className="theme-btn btn-style-one">
                        <span className="btn-title">Get in touch</span>
                    </Link >
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
