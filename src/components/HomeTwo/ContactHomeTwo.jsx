import React from 'react';
import { Link  } from 'react-router-dom';
import ContactImage from '../../assets/images/resource/contact.jpg'; // Adjust the path as needed
import BackgroundImage from '../../assets/images/background/3.jpg'; // Adjust the path as needed

function ContactSection({ className }) {
    return (
        <section className={`contact-section ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12 order-4">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={ContactImage} alt="Contact" />
                                </figure>
                                <div className="info-box">
                                    <span className="icon flaticon-business-035-helpline"></span>
                                    <span className="sub-title">Call us and book now</span>
                                    <h3 className="title">
                                        <Link  to="tel:012333444">012 333 444</Link >
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="form-bg" style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Connect with us</span>
                                <h2>Feel free to contact us with any questions.</h2>
                                <div className="text">
                                    There are many variations of passages of lorem available, but the majority have been altered in some form, either by injected humor or randomization.
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="contact-form-two wow fadeInLeft">
                                <form method="post" action="get" id="contact-form">
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-md-12">
                                            <input type="text" name="full_name" placeholder="Full Name" required />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-12">
                                            <input type="text" name="email" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-12">
                                            <input type="text" name="phone" placeholder="Your Phone" required />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-12">
                                            <input type="text" name="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form">
                                                <span className="btn-title">Send a message</span>
                                            </button>
                                        </div>
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

export default ContactSection;
