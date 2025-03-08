import React from 'react';
import { Link  } from 'react-router-dom';
import NewsImage1 from '../../assets/images/resource/news-1.jpg';
import NewsImage2 from '../../assets/images/resource/news-2.jpg';
import NewsImage3 from '../../assets/images/resource/news-3.jpg';

function NewsSection({ className }) {
    return (
        <section className={`news-section ${className || ''}`}>
            <div className="bg-shape2"></div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">from the blog</span>
                    <h2>News & Articles</h2>
                </div>

                <div className="row">
                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/news-details">
                                        <img src={NewsImage1} alt="News 1" />
                                    </Link >
                                </figure>
                                <span className="date"><b>28</b> OCT</span>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fa fa-user"></i> by Admin</li>
                                    <li><i className="fa fa-tag"></i> Technology</li>
                                </ul>
                                <h4 className="title">
                                    <Link  to="/news-details">Professional technology information & solutions are just like…</Link >
                                </h4>
                            </div>
                            <div className="bottom-box">
                                <Link  to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link >
                                <div className="comments"><i className="fa fa-comments"></i> 02</div>
                            </div>
                        </div>
                    </div>

                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/news-details">
                                        <img src={NewsImage2} alt="News 2" />
                                    </Link >
                                </figure>
                                <span className="date"><b>28</b> OCT</span>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fa fa-user"></i> by Admin</li>
                                    <li><i className="fa fa-tag"></i> Technology</li>
                                </ul>
                                <h4 className="title">
                                    <Link  to="/news-details">Professional technology information & solutions are just like…</Link >
                                </h4>
                            </div>
                            <div className="bottom-box">
                                <Link  to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link >
                                <div className="comments"><i className="fa fa-comments"></i> 02</div>
                            </div>
                        </div>
                    </div>

                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/news-details">
                                        <img src={NewsImage3} alt="News 3" />
                                    </Link >
                                </figure>
                                <span className="date"><b>28</b> OCT</span>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fa fa-user"></i> by Admin</li>
                                    <li><i className="fa fa-tag"></i> Technology</li>
                                </ul>
                                <h4 className="title">
                                    <Link  to="/news-details">Professional technology information & solutions are just like…</Link >
                                </h4>
                            </div>
                            <div className="bottom-box">
                                <Link  to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link >
                                <div className="comments"><i className="fa fa-comments"></i> 02</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;
