import React from 'react';
import { Link  } from 'react-router-dom';
import TeamImage1 from '../../assets/images/resource/team-4.jpg';
import TeamImage2 from '../../assets/images/resource/team-5.jpg';
import TeamImage3 from '../../assets/images/resource/team-6.jpg';
import TeamImage4 from '../../assets/images/resource/team-7.jpg';

function TeamSectionTwo() {
    return (
        <section className="team-section-two">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our team expert</span>
                    <h2>Meet Professionals</h2>
                </div>

                <div className="row">
                    {/* Team block */}
                    <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details">Adman Michel</Link >
                                </h5>
                                <span className="designation">Web Developer</span>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-Link s">
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details">
                                        <img src={TeamImage1} alt="Adman Michel" />
                                    </Link >
                                </figure>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details">Jessica Brown</Link >
                                </h5>
                                <span className="designation">Web Developer</span>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-Link s">
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details">
                                        <img src={TeamImage2} alt="Jessica Brown" />
                                    </Link >
                                </figure>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details">Richerd William</Link >
                                </h5>
                                <span className="designation">Web Developer</span>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-Link s">
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details">
                                        <img src={TeamImage3} alt="Richerd William" />
                                    </Link >
                                </figure>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box">
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details">Sara Albert</Link >
                                </h5>
                                <span className="designation">Web Developer</span>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-Link s">
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details">
                                        <img src={TeamImage4} alt="Sara Albert" />
                                    </Link >
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSectionTwo;
