import React from 'react';
import ContactImage from '../../assets/images/resource/contact.jpg'; 

function ContactSectionTwo() {
    return (
        <section className="contact-section-two pull-up">
            <div className="auto-container">
                <div className="row">
                    {/* Info Column */}
                    <div className="info-column col-xl-7 col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column wow fadeInRight">
                            <div className="sec-title">
                                <div className="sub-title">Get to know</div>
                                <h3>Keep your Vision to Our Projects</h3>
                            </div>
                            <figure className="image overlay-anim">
                                <img src={ContactImage} alt="Contact" />
                            </figure>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h5 className="title">Cloud Based Services</h5>
                                <div className="text">
                                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free
                                </div>
                            </div>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h5 className="title">End to End Solutions</h5>
                                <div className="text">
                                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="form-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Contact Form */}
                            <div className="contact-form light wow fadeInLeft">
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
                                        <input type="text" name="Email" placeholder="Email Address" required />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="Phone" placeholder="Phone Number" required />
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

export default ContactSectionTwo;
