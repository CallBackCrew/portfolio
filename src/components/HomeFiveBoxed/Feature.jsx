import React from 'react';
import { Link  } from 'react-router-dom';
import FeatureBg6 from '../../assets/images/resource/feature-bg-6.jpg'; 

function FeaturesSectionSix() {
    const features = [
        {
            id: 1,
            icon: '46+',
            title: 'Internet & Cyber Security Solutions',
            Link : '/page-services',
        },
        {
            id: 2,
            image: FeatureBg6,
            title: 'Expert IT Consultants Available',
            Link : '/page-team',
        },
        {
            id: 3,
            icon: 'flaticon-business-030-settings',
            title: 'Expert IT Consultants Available',
            Link : '/page-team',
        }
    ];

    return (
        <section className="features-section-six">
            <div className="auto-container">
                <div className="row">
                    {features.map((feature, index) => (
                        <div key={feature.id} className="feature-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                {feature.icon ? (
                                    <span className="icon">{feature.icon}</span>
                                ) : (
                                    <figure className="image">
                                        <img src={feature.image} alt={feature.title} />
                                    </figure>
                                )}
                                <h3 className="title">
                                    <Link  to={feature.Link }>{feature.title}</Link >
                                </h3>
                                <Link  to={feature.Link } className="theme-btn btn-style-two small hvr-light">
                                    <span className="btn-title">Find Your Solution</span>
                                </Link >
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionSix;
