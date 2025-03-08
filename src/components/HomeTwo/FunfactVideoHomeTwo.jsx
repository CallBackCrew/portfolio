import React, { useState } from 'react';
import CounterUp from '../../lib/CounterUp.jsx'; 
import ModalVideo from 'react-modal-video';
import ServiceHomeTwo from './ServiceHomeTwo.jsx';


import Image4 from '../../assets/images/resource/image-4.jpg';

function FunfactVideoHomeTwo({ className }) {
    const percentage1 = 32;
    const percentage2 = 32;
    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
            <section className="services-section-two">
                <div className="bg bg-pattern-10"></div>

                <div className="auto-container">
                    <div className="upper-box row">
                        <div className="left-column col-lg-6 col-md-12">
                            <div className="sec-title light">
                                <span className="sub-title">What We’re Offering</span>
                                <h2>Services we’re <br/>offering to customer to <br/>grow business</h2>
                            </div>
                        </div>

                        <div className="right-column col-lg-6 col-md-12">
                            <div className="fact-counter-three">
                                <div className="counter-block-three wow fadeInUp">
                                    <div className="inner">
                                        <div className="count-box">
                                            <CounterUp count={percentage1} time={3} />+
                                        </div>
                                        <h6 className="counter-title">Winning Awards</h6>
                                    </div>
                                </div>

                                <div className="counter-block-three" data-wow-delay="300ms">
                                    <div className="inner">
                                        <div className="count-box">
                                            <CounterUp count={percentage2} time={3} />+
                                        </div>
                                        <h6 className="counter-title">Team Members</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="video-box">
                                <figure className="image">
                                    <img src={Image4} alt="Service Image 4" />
                                </figure>
                                <a onClick={() => setOpen(true)} className="play-btn">
                                    <i className="icon far fa-play" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <ServiceHomeTwo />
                </div>
            </section>

            <ModalVideo 
                channel='youtube' 
                autoplay 
                isOpen={isOpen} 
                videoId="L61p2uyiMSo" 
                onClose={() => setOpen(false)} 
            />
        </>
    );
}

export default FunfactVideoHomeTwo;
