import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WorkImage1 from '../../assets/images/resource/work-1.jpg';

const WorkTabs = () => {
    const [activeTab, setActiveTab] = useState(2);

    const tabsData = [
        {
            id: 1,
            title: 'Gaming',
            heading: 'We Execute Our ideas From The Start to Finish',
            content: 'Web designing in a powerful way of just not an only profession, however, in a passion for our Company.',
            services: [
                { title: 'Cloud Based Services', text: 'Web designing in a powerful way of just' },
                { title: 'End to End Solutions', text: 'Web designing in a powerful way of just' }
            ]
        },
        {
            id: 2,
            title: 'Entertainment',
            heading: 'We Execute Our ideas From The Start to Finish',
            content: 'Web designing in a powerful way of just not an only profession, however, in a passion for our Company.',
            services: [
                { title: 'Cloud Based Services', text: 'Web designing in a powerful way of just' },
                { title: 'End to End Solutions', text: 'Web designing in a powerful way of just' }
            ]
        },
        {
            id: 3,
            title: 'Tech Solution',
            heading: 'We Execute Our ideas From The Start to Finish',
            content: 'Web designing in a powerful way of just not an only profession, however, in a passion for our Company.',
            services: [
                { title: 'Cloud Based Services', text: 'Web designing in a powerful way of just' },
                { title: 'End to End Solutions', text: 'Web designing in a powerful way of just' }
            ]
        }
    ];

    return (
        <section className="work-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Tech Management</span>
                    <h2>The Best Source for <br /> IT Solutions</h2>
                </div>

                <div className="tabs-box work-tabs">
                    {/* Tabs Buttons */}
                    <ul className="tab-buttons clearfix">
                        {tabsData.map((tab) => (
                            <li
                                key={tab.id}
                                className={`tab-btn ${activeTab === tab.id ? 'active-btn' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.title}
                            </li>
                        ))}
                    </ul>

                    {/* Tabs Content */}
                    <div className="tabs-content">
                        {tabsData.map((tab) => (
                            <div key={tab.id} className={`tab ${activeTab === tab.id ? 'active-tab' : ''}`}>
                                <div className="row">
                                    {/* Content Column */}
                                    <div className="content-column col-xl-7 col-lg-6 col-md-12 order-2">
                                        <div className="inner-column">
                                            <h3>{tab.heading}</h3>
                                            <div className="text">{tab.content}</div>

                                            <div className="content-box">
                                                {tab.services.map((service, index) => (
                                                    <div key={index} className="about-block-two">
                                                        <h5 className="title">
                                                            <i className="icon fa fa-angle-right"></i> {service.title}
                                                        </h5>
                                                        <p className="text">{service.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Column */}
                                    <div className="image-column col-xl-5 col-lg-6 col-md-12">
                                        <figure className="image overlay-anim">
                                            <img src={WorkImage1} alt={`Work Image ${tab.id}`} />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkTabs;
