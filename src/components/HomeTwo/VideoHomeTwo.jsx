import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
// import VideoThumbnail from '../../assets/images/resource/video.jpg'; 

function VideoHomeTwo({ className }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className={`video-section-two p-0 ${className || ''}`}>
                <div className="auto-container">
                    <div className="video-box-two">
                        <figure className="image">
                            <img src={VideoThumbnail} alt="Video Thumbnail" />
                            <a onClick={() => setOpen(true)} className="play-now">
                                <i className="icon fa fa-play" aria-hidden="true"></i>
                                <span className="ripple"></span>
                            </a>
                        </figure>

                        <div className="info-box">
                            <h2 className="title">1599</h2>
                            <div className="text">Projects have been<br /> completed</div>
                        </div>
                    </div>
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

export default VideoHomeTwo;
