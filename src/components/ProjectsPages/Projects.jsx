import React from 'react';
import { Link  } from 'react-router-dom';
// Importing the image files
import ProjectImage1 from '../../assets/images/resource/project-1.jpg';
import ProjectImage2 from '../../assets/images/resource/project-2.jpg';
import ProjectImage3 from '../../assets/images/resource/project-3.jpg';
import ProjectImage4 from '../../assets/images/resource/project-4.jpg';

function Projects() {
    return (
        <section className="">
            <div className="container">
                <div className="row g-3">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={ProjectImage1} alt="Tech Solutions" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Tech Solutions</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={ProjectImage2} alt="Smart Visions" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Smart Visions</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={ProjectImage3} alt="Platform Integration" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Platform Integration</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={ProjectImage4} alt="Web Development" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Web Development</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={ProjectImage1} alt="Tech Solutions" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Tech Solutions</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={ProjectImage2} alt="Smart Visions" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Smart Visions</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;
