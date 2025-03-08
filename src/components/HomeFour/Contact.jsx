import React from 'react';
import { Link  } from 'react-router-dom';
function ContactSectionThree() {
    return (
        <section className="contact-section-three pull-up">
            <div className="auto-container">
                <div className="row">
                    {/* Info Column */}
                    <div className="info-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column wow fadeInRight">
                            <div className="sec-title light">
                                <div className="sub-title">Get in Touch</div>
                                <h2>Get a free quote today</h2>
                                <div className="text">
                                    Web designing in a powerful way of just not an only profession, however, in a passion for our company
                                </div>
                            </div>

                            <div className="contact-info-box-two">
                                <span className="icon fa fa-map-marker-alt"></span>
                                <h6 className="title">Visit Us</h6>
                                <div className="text">66 Road Broklyn Street, 600 New York, USA</div>
                            </div>

                            <div className="contact-info-box-two">
                                <span className="icon fa fa-envelope"></span>
                                <h6 className="title">Email address</h6>
                                <div className="text">
                                    <Link  to="mailto:hr.callbackcrew@gmail.com">hr.callbackcrew@gmail.com</Link >
                                </div>
                            </div>

                            <div className="contact-info-box-two">
                                <span className="icon fa fa-phone"></span>
                                <h6 className="title">Call now</h6>
                                <div className="text">
                                    <Link  to="tel:+999000111222">+999 3363313364</Link >
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="contact-form-two style-two wow fadeInLeft">
                                <form method="post" action="get" id="contact-form">
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text" name="full_name" placeholder="Your Name" required />
                                        </div>

                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="email" name="Email" placeholder="Email Address" required />
                                        </div>

                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text" name="Phone" placeholder="Phone Number" required />
                                        </div>

                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text" name="subject" placeholder="Subject" required />
                                        </div>

                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <textarea name="message" placeholder="Write Message" required></textarea>
                                        </div>

                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <button className="theme-btn btn-style-one hvr-light" type="submit" name="submit-form">
                                                <span className="btn-title">Send a message</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSectionThree;
