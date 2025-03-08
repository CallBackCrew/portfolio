import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'; 
import Image6 from '../../assets/images/resource/image-6.jpg'; // Adjust path to your image
import ArrowIcon from '../../assets/images/icons/icon-arrow.png'; // Adjust path to your arrow icon

function OfferSectionTwo() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="offer-section-two">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Welcome to tech</span>
                                    <h2>Your Success with the Best IT Solutions</h2>
                                </div>
                                <div className="info-box">
                                    <span className="count">01</span>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer.</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">02</span>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer.</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src={Image6} alt="Offer Image 6" />
                                    </figure>
                                    <div className="video-box wow fadeIn">
                                        <h4 className="title">Watch our video</h4>
                                        <img className="arrow-icon" src={ArrowIcon} alt="Arrow Icon" />
                                        <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                            <i className="icon fa fa-play"></i>
                                        </a>
                                    </div>
                                </div>
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
                videoId="Fvae8nxzVz4"
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default OfferSectionTwo;
