import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx';
import OurValueImage1 from '../../assets/images/resource/our-value.jpg'; 
import OurValueImage2 from '../../assets/images/resource/our-value-2.jpg';

function FunfactSection({ className }) {
    // Define the values for each counter
    const projectCompleted = 4520;
    const itSpecialists = 325;
    const satisfiedClients = 1357;
    const smartSolutions = 238;

    return (
        <section className={`contact-section-four pt-0 ${className || ''}`}>
            <div className="auto-container">
                {/* Fact Counter */}
                <div className="fact-counter">
                    <div className="row">
                        {/* Counter block */}
                        <div className="counter-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner">
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={projectCompleted} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">Project completed</h6>
                            </div>
                        </div>

                        {/* Counter block */}
                        <div className="counter-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={itSpecialists} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">IT specialists</h6>
                            </div>
                        </div>

                        {/* Counter block */}
                        <div className="counter-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={satisfiedClients} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">Satisfied clients</h6>
                            </div>
                        </div>

                        {/* Counter block */}
                        <div className="counter-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={smartSolutions} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">Smart solutions</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Info Column */}
                    <div className="info-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInRight">
                            <div className="title-box">
                                <h3 className="title">Best IT Technology <br /> Services you can Trust</h3>
                            </div>

                            <div className="our-values">
                                <figure className="image"><img src={OurValueImage1} alt="Our Value 1" /></figure>
                                <div className="content">
                                    <h5 className="title">Manage Tech Services</h5>
                                    <div className="text">
                                        Web designing in a powerful way of just not only professions, however, it’s a passion for our company. We believe in the idea that smart looking...
                                    </div>
                                </div>
                            </div>

                            <div className="info-box">
                                <figure className="image"><img src={OurValueImage2} alt="Our Value 2" /></figure>
                                {/* Counter block */}
                                <div className="counter-block-two">
                                    <div className="count-box">
                                        <span className="count-text">
                                            <CounterUp count={projectCompleted} time={3} />
                                        </span>
                                    </div>
                                    <h6 className="counter-title">Clients worldwide took Professional IT services</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="form-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Contact Form */}
                            <div className="contact-form-three wow fadeInLeft">
                                <div className="title-box">
                                    <h3 className="title">Get a Free <br /> Quote</h3>
                                    <div className="text">There are many variations of passages</div>
                                </div>
                                {/* Contact Form */}
                                <form method="post" action="get" id="contact-form">
                                    <div className="form-group">
                                        <input type="text" name="full_name" placeholder="Your Name" required />
                                    </div>

                                    <div className="form-group">
                                        <input type="email" name="Email" placeholder="Email Address" required />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="Phone" placeholder="Phone Number" required />
                                    </div>

                                    <div className="form-group">
                                        <select className="custom-select">
                                            <option value="Product Development">Prompt Engineering Generative Ai</option>
                                            <option value="UI/UX Designing"> Web development</option>
                                            <option value="Digital Marketing">Mobile Applications,</option>
                                        </select>
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

export default FunfactSection;
