import React, { useState } from 'react';
import CounterUp from '../../lib/CounterUp.jsx';
import ModalVideo from 'react-modal-video'; 
import Image6 from '../../assets/images/resource/why-us-3.jpg'; 
function ChooseUs() {
    const [isOpen, setOpen] = useState(false);
    const skill1 = 86;
    const skill2 = 77;

    return (
        <>
            <section className="why-choose-us-two pt-0">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="inner-column wow fadeInLeft">
                                <div className="sec-title">
                                    <span className="sub-title">Why choose our company</span>
                                    <h2>Why you Should Choose Our Services?</h2>
                                    <div className="text">
                                        There are many variations of passages of but the majority have in some form, by injected humour or words which don't look even slightly believable.
                                    </div>
                                </div>

                                {/* Info Boxes */}
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="info-box">
                                            <i className="icon fa fa-check-circle"></i>
                                            <h6 className="title">Integer et massa sit</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="info-box">
                                            <i className="icon fa fa-check-circle"></i>
                                            <h6 className="title">Integer et massa sit</h6>
                                        </div>
                                    </div>
                                </div>

                                {/* Skills Section */}
                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Technology</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" style={{ width: '86%' }}>
                                                    <div className="skill-percentage">
                                                        <div className="count-box">
                                                            <span className="count-text"><CounterUp count={skill1} time={3} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Solutions</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" style={{ width: '77%' }}>
                                                    <div className="skill-percentage">
                                                        <div className="count-box">
                                                            <span className="count-text"><CounterUp count={skill2} time={3} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="image-box wow fadeInRight">
                                <figure className="image overlay-anim">
                                    <img src={Image6} alt="Why Choose Us" />
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                        <i className="icon fa fa-play"></i>
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="Fvae8nxzVz4" // YouTube video ID
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default ChooseUs;
