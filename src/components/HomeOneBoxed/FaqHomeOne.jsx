import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import FaqImage from '../../assets/images/icons/pattern-2.jpg'; // Replace with your actual image path
import BackgroundImage from '../../assets/images/background/3.jpg'; // Replace with your actual background image path

function FaqHomeOne({ className }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`faqs-section ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    {/* FAQ Column */}
                    <div className="faq-column col-lg-6 col-md-12 col-sm-12 order-4">
                        <div className="faq-bg" style={{ backgroundImage: `url(${FaqImage})` }}></div>
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Questions & answers</span>
                                <h2>See Frequently Asked Questions</h2>
                            </div>

                            <ul className="accordion-box wow fadeInRight">
                                {/* FAQ Item 1 */}
                                <li className={`accordion block ${activeIndex === 0 ? 'active-block' : ''}`}>
                                    <div className={`acc-btn ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleToggle(0)}>
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
                                    <div className={`acc-btn ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleToggle(1)}>
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
                                    <div className={`acc-btn ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleToggle(2)}>
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
                                    <div className={`acc-btn ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleToggle(3)}>
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

                    {/* Form Column */}
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="form-bg" style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
                        <div className="inner-column">
                            {/* Contact Form */}
                            <div className="contact-form wow fadeInLeft">
                                <div className="title-box">
                                    <span className="sub-title">Contact us</span>
                                    <h3>Write Email</h3>
                                </div>

                                {/* Contact Form */}
                                <form method="post" action="get" id="contact-form">
                                    <div className="form-group">
                                        <input type="text" name="full_name" placeholder="Your Name" required />
                                    </div>

                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email Address" required />
                                    </div>

                                    <div className="form-group">
                                        <input type="tel" name="phone" placeholder="Phone Number" required />
                                    </div>

                                    <div className="form-group">
                                        <textarea name="message" placeholder="Write a Message" required></textarea>
                                    </div>

                                    <div className="form-group">
                                        <button className="theme-btn btn-style-one" type="submit" name="submit-form">
                                            <span className="btn-title">Send a message</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* End Contact Form */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqHomeOne;
