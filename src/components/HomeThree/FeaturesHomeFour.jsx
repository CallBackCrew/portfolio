import React from 'react';

// Import background images
import FeatureBg1 from '../../assets/images/resource/feature-bg-1.jpg';
import FeatureBg2 from '../../assets/images/resource/feature-bg-2.jpg';

function FeaturesSectionFour({ className }) {
    return (
        <section className={`features-section-four pull-down p-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="row g-0">
                    {/* Feature Block */}
                    <div className="feature-block-four col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                        <div className="inner-box">
                            <div
                                className="content"
                                style={{ backgroundImage: `url(${FeatureBg1})` }}
                            >
                                <span className="icon flaticon-business-030-settings"></span>
                                <h5 className="title">End to End Development</h5>
                                <div className="text">There are many variations of available</div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block */}
                    <div className="feature-block-four col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
                        <div className="inner-box">
                            <div
                                className="content"
                                style={{ backgroundImage: `url(${FeatureBg2})` }}
                            >
                                <span className="icon flaticon-business-035-helpline"></span>
                                <h5 className="title">End to End Development</h5>
                                <div className="text">There are many variations of available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionFour;
