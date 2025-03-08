import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import FaqImage from '../../assets/images/resource/faq.jpg';
import BackgroundImage from '../../assets/images/background/3.jpg'; 

function FaqHomeOne({ className }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`faqs-section style-two ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    {/* FAQ Column */}
                    <div className="faq-column col-xl-6 col-lg-12 col-md-12 order-4">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Questions & answers</span>
                                <h2>See Frequently Asked Questions</h2>
                            </div>

                            <ul className="accordion-box wow fadeInRight">
                                {/* FAQ Item 1 */}
                                <li className={`accordion block ${activeIndex === 0 ? 'active-block' : ''}`}>
                                    <div 
                                        className={`acc-btn ${activeIndex === 0 ? 'active' : ''}`} 
                                        onClick={() => handleToggle(0)}
                                    >
                                        Is my technology allowed on tech?
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className={`acc-content ${activeIndex === 0 ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">
                                                There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words believable.
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* FAQ Item 2 */}
                                <li className={`accordion block ${activeIndex === 1 ? 'active-block' : ''}`}>
                                    <div 
                                        className={`acc-btn ${activeIndex === 1 ? 'active' : ''}`} 
                                        onClick={() => handleToggle(1)}
                                    >
                                        How to soft launch your business?
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className={`acc-content ${activeIndex === 1 ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">
                                                There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words believable.
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* FAQ Item 3 */}
                                <li className={`accordion block ${activeIndex === 2 ? 'active-block' : ''}`}>
                                    <div 
                                        className={`acc-btn ${activeIndex === 2 ? 'active' : ''}`} 
                                        onClick={() => handleToggle(2)}
                                    >
                                        How to turn visitors into contributors?
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className={`acc-content ${activeIndex === 2 ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">
                                                There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words believable.
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* FAQ Item 4 */}
                                <li className={`accordion block ${activeIndex === 3 ? 'active-block' : ''}`}>
                                    <div 
                                        className={`acc-btn ${activeIndex === 3 ? 'active' : ''}`} 
                                        onClick={() => handleToggle(3)}
                                    >
                                        How can I find my solutions?
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className={`acc-content ${activeIndex === 3 ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">
                                                There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words believable.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-xl-6 col-lg-12 col-md-12">
                        <div className="inner-column">
                            <figure className="image">
                                <img src={FaqImage} alt="FAQ Illustration" />
                            </figure>
                            <div className="info-box">
                                <div className="inner">
                                    <span className="icon flaticon-business-063-diamond"></span>
                                    <h3 className="title">Trusted IT Solution<br /> & Service Business Agency</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqHomeOne;
