import React from 'react';
import { Link  } from 'react-router-dom';

function FeatureHomeTwo({ className }) {
    return (
        <>
        <section className={`features-section-two ${className || ''}`}>
        <div className="auto-container">
			<div className="row justify-content-center">
				<div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-011-dollar"></i>
						<h6 className="title"><Link  to="/service-details">Banking</Link ></h6>
					</div>
				</div>
				<div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-049-presentation"></i>
						<h6 className="title"><Link  to="/service-details">Healthcare</Link ></h6>
					</div>
				</div>
				<div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-061-meeting"></i>
						<h6 className="title"><Link  to="/service-details">Education</Link ></h6>
					</div>
				</div>
				<div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-030-settings"></i>
						<h6 className="title"><Link  to="/service-details">Manufacturing</Link ></h6>
					</div>
				</div>
				<div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-054-graph"></i>
						<h6 className="title"><Link  to="/service-details">Capital Markets</Link ></h6>
					</div>
				</div>
				<div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-020-hierarchy"></i>
						<h6 className="title"><Link  to="/service-details">Networking</Link ></h6>
					</div>
				</div>

			</div>

			<div className="bottom-text">IT Technology services built specifically for your business. 
                <Link  to="/services" className="theme-btn btn-style-one small">
                    <span className="btn-title">Find Your Solution</span>
                </Link >
            </div>
		</div>
        </section>
        </>
    );
}

export default FeatureHomeTwo;
