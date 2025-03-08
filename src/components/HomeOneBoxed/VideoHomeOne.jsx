import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import Benefit1 from '../../assets/images/resource/benefit-1.jpg';
import Benefit2 from '../../assets/images/resource/benefit-2.jpg';
import Benefit3 from '../../assets/images/resource/benefit-3.jpg';
import FavIcon from '../../assets/images/resource/fav-icon.png';

function VideoHomeOne({ className }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section className={`why-choose-us ${className || ''}`}>
            <div className="bg bg-pattern-2"></div>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
                        data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Company Benefits</span>
                                <h2>We’re more than an agency</h2>
                                <div className="text">There are many variations of passages of available but the majority have
                                    suffered. Alteration in some form, lipsum is simply free text by injected humor or
                                    randomised words even believable.</div>
                            </div>
    
                            <blockquote className="blockquote-one">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                                sed do eiusmod</blockquote>
    
                            <div className="btn-box">
                                <a onClick={() => setOpen(true)} className="play-now-two"><i className="icon far fa-play" aria-hidden="true"></i>Watch our <br/>few minutes video</a>
                                <Link  to="/service-details" className="theme-btn btn-style-one"><span
                                        className="btn-title">Explore now</span></Link >
                            </div>
                        </div>
                    </div>
    
                    <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            <div className="image-box">
                                <span className="bg-shape"></span>
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src={Benefit1}
                                        alt="Benefit 1"/></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src={Benefit2}
                                        alt="Benefit 2"/></figure>
                                <figure className="image-3 overlay-anim wow fadeInRight"><img src={Benefit3}
                                        alt="Benefit 3"/></figure>
                                <figure className="logo"><img src={FavIcon} alt="Fav Icon"/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
}

export default VideoHomeOne;
