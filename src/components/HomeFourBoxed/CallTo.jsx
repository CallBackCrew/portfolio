import React from 'react';
import { Link  } from 'react-router-dom';
import Image from '../../assets/images/resource/image-2.jpg'; // Import your image

function CallToActionTwo({ className }) {
    return (
        <section className={`call-to-action-two alternate p-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box wow fadeIn">
                    {/* Image Box */}
                    <div className="image-box">
                        <figure className="image">
                            <img src={Image} alt="" />
                        </figure>
                    </div>
                    {/* Content Box */}
                    <div className="content-box">
                        <div className="title-box">
                            <h3 className="title">We’re Ready <br />Develop Your Site!</h3>
                        </div>
                        <div className="btn-box">
                            <Link  to="/services" className="theme-btn btn-style-two hvr-light">
                                <span className="btn-title">More Services</span>
                            </Link >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToActionTwo;
