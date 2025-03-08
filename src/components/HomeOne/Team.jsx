import React from 'react';
import { Link  } from 'react-router-dom';

import TeamImage1 from '../../assets/images/resource/team-1.jpg';
import TeamImage2 from '../../assets/images/resource/team-2.jpg';
import TeamImage3 from '../../assets/images/resource/team-3.jpg';

function TeamSection({ className }) {
    return (
        <section className={`team-section pt-0 pb-0 ${className || ''}`}>
            <div className="anim-icons">
                <span className="icon icon-lines bounce-x"></span>
                <span className="icon icon-dots bounce-y"></span>
            </div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our feedbacks</span>
                    <h2>EXPERTS READY TO SERVE</h2>
                </div>

                <div className="row">
                    {/* Team Block 1 */}
                    <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details">
                                        <img src={TeamImage1} alt="Kevin Hardson" />
                                    </Link >
                                </figure>
                            </div>
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details">Kevin Hardson</Link >
                                </h5>
                                <span className="designation">Designer</span>
                                <div className="social-Link s">
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Block 2 */}
                    <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details">
                                        <img src={TeamImage2} alt="Jessica Brown" />
                                    </Link >
                                </figure>
                            </div>
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details">Jessica Brown</Link >
                                </h5>
                                <span className="designation">Developer</span>
                                <div className="social-Link s">
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Block 3 */}
                    <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details">
                                        <img src={TeamImage3} alt="Michale Smith" />
                                    </Link >
                                </figure>
                            </div>
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details">Michale Smith</Link >
                                </h5>
                                <span className="designation">Co Founder</span>
                                <div className="social-Link s">
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
