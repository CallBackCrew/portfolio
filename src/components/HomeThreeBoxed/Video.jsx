import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import VideoThumbnail from '../../assets/images/resource/video-img.jpg'; // Adjust the path as necessary

function VideoHomeTwo({ className }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className={`video-section ${className || ''}`}>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box text-center">
                            <h3 className="title">Trusted IT Solution<br />& Service Business Agency</h3>
                            <div className="text">
                                Web designing is not just a profession; it's a passion <br />for our company. We tend to believe...
                            </div>
                        </div>
                        <div className="video-box wow fadeInUp">
                            <figure className="image">
                                <img src={VideoThumbnail} alt="Video Thumbnail" />
                            </figure>
                            <div className="content">
                                <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                    <i className="icon fa fa-play"></i>
                                </a>
                                <h2 className="title">Watch Video</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="Fvae8nxzVz4" // Use your video ID here
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default VideoHomeTwo;
