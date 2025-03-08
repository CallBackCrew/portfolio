import React from 'react';
import { Link  } from 'react-router-dom';
function IndustriesSection() {
    return (
        <section className="industries-section style-two">
           <div className="auto-container">
			<div className="sec-title text-center light">
				<span className="sub-title">Services we’re offering</span>
				<h2>We’re Dedicated to Serve <br/>you All Time</h2>
			</div>
			<div className="row justify-content-center">
				<div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-011-dollar"></i>
						<h6 className="title"><Link  to="/service-details">Banking</Link ></h6>
					</div>
				</div>

				<div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-049-presentation"></i>
						<h6 className="title"><Link  to="/service-details">Healthcare</Link ></h6>
					</div>
				</div>

				<div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-061-meeting"></i>
						<h6 className="title"><Link  to="/service-details">Education</Link ></h6>
					</div>
				</div>
				<div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-030-settings"></i>
						<h6 className="title"><Link  to="/service-details">Manufacturing</Link ></h6>
					</div>
				</div>

				<div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-054-graph"></i>
						<h6 className="title"><Link  to="/service-details">Capital Markets</Link ></h6>
					</div>
				</div>
				<div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<i className="icon flaticon-business-020-hierarchy"></i>
						<h6 className="title"><Link  to="/service-details">Networking</Link ></h6>
					</div>
				</div>

			</div>
		</div>
        </section>
    );
}

export default IndustriesSection;
