import React from 'react';
import { Link  } from 'react-router-dom';
// Import background images
import FeatureBg3 from '../../assets/images/resource/feature-bg-3.jpg';
import FeatureBg4 from '../../assets/images/resource/feature-bg-4.jpg';
import FeatureBg5 from '../../assets/images/resource/feature-bg-5.jpg';

function FeaturesSectionFive() {
    const features = [
        {
            id: 1,
            image: FeatureBg3,
            title: 'Product Designing',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor.',
            count: '01',
            Link : '/page-about'
        },
        {
            id: 2,
            image: FeatureBg4,
            title: 'Custom Solutions',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor.',
            count: '02',
            Link : '/page-about'
        },
        {
            id: 3,
            image: FeatureBg5,
            title: 'Tech Outsourc',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor.',
            count: '03',
            Link : '/page-about'
        }
    ];

    return (
        <section className="features-section-five">
            <div className="auto-container">
                <div className="row">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" style={{ animationDelay: `${index * 300}ms` }}>
                            <div className="inner-box">
                                <figure className="bg-image">
                                    <img src={feature.image} alt={feature.title} />
                                </figure>
                                <h4 className="title">
                                    <Link  to={feature.Link }>{feature.title}</Link >
                                </h4>
                                <div className="text">{feature.text}</div>
                                <span className="count">{feature.count}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionFive;
