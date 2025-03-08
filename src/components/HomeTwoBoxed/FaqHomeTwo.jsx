import React, { useState } from 'react';
import FaqImage1 from '../../assets/images/resource/faq-2.jpg';
import FaqImage2 from '../../assets/images/resource/faq-3.jpg';

function FaqHomeTwo({ className }) {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };
    
    return (
        <>
            <section className={`faqs-section-two ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="sub-title">Company Benefits</span>
                                <h2>We’re more than an <br />agency</h2>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end">
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor
                                    incididunt ut labore et We are passionate about changing quis nostrud.</div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <figure className="image overlay-anim"><img src={FaqImage1} alt="FAQ Image 1" /></figure>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <figure className="image overlay-anim"><img src={FaqImage2} alt="FAQ Image 2" /></figure>
                                    </div>
                                </div>

                                <div className="faq-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <i className="icon flaticon-verification"></i>
                                            <h5 className="title">Best user interfaces</h5>
                                        </div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
                                            tempor incididunt ut labore et We are passionate about</div>
                                    </div>
                                </div>

                                <div className="faq-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <i className="icon flaticon-help"></i>
                                            <h5 className="title">Quality web design</h5>
                                        </div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
                                            tempor incididunt ut labore et We are passionate about</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="faq-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <ul className="accordion-box wow fadeInRight">
                                    <li
                                        onClick={() => openQuestion(1)}
                                        className={`accordion block ${showQues === 1 ? 'active-block' : ''}`}>
                                        <div className={`acc-btn ${showQues === 1 ? 'active' : ''}`}>
                                            Interdum et malesuada fames ac ante ipsum
                                            <div className="icon fa fa-angle-down"></div>
                                            <div className={`acc-content ${showQues === 1 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel.
                                                        Vestibulum leo ligula, vit
                                                        commodo nisl Sed luctus venenatis pellentesque.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        onClick={() => openQuestion(2)}
                                        className={`accordion block ${showQues === 2 ? 'active-block' : ''}`}>
                                        <div className={`acc-btn ${showQues === 2 ? 'active' : ''}`}>
                                            Maecenas condimentum sollicitudin ligula
                                            <div className="icon fa fa-angle-down"></div>
                                            <div className={`acc-content ${showQues === 2 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel.
                                                        Vestibulum leo ligula, vit
                                                        commodo nisl Sed luctus venenatis pellentesque.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        onClick={() => openQuestion(3)}
                                        className={`accordion block ${showQues === 3 ? 'active-block' : ''}`}>
                                        <div className={`acc-btn ${showQues === 3 ? 'active' : ''}`}>
                                            rhoncus orci ut metus rhoncus
                                            <div className="icon fa fa-angle-down"></div>
                                            <div className={`acc-content ${showQues === 3 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel.
                                                        Vestibulum leo ligula, vit
                                                        commodo nisl Sed luctus venenatis pellentesque.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeTwo;
