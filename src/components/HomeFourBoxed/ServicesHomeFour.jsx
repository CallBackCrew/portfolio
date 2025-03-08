import React from 'react';
import { Link  } from 'react-router-dom';


function ServicesHomeFour({ className }) {
    return (
        <>
        <section className={`services-section-four ${className || ''}`}>
		<div className="auto-container">
			<div className="sec-title text-center">
				<span className="sub-title">Services we’re offering</span>
				<h2>We Provide our Clients <br/>Best IT Services</h2>
			</div>

			<div className="row">
				<div className="service-block-four col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
					<div className="inner-box ">
						<div className="icon-box">
							<i className="icon flaticon-business-002-graph"></i>
						</div>
						<h5 className="title"><Link  to="/service-details">Product <br/>Development</Link ></h5>
						<div className="text">Providing the solutions for tech business</div>
					</div>
				</div>

				<div className="service-block-four col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
					<div className="inner-box ">
						<div className="icon-box">
							<i className="icon flaticon-business-012-startup"></i>
						</div>
						<h5 className="title"><Link  to="/service-details">Digital <br/>Marketing</Link ></h5>
						<div className="text">Providing the solutions for tech business</div>
					</div>
				</div>
				<div className="service-block-four col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
					<div className="inner-box ">
						<div className="icon-box">
							<i className="icon flaticon-business-046-like"></i>
						</div>
						<h5 className="title"><Link  to="/service-details">Security <br/>System</Link ></h5>
						<div className="text">Providing the solutions for tech business</div>
					</div>
				</div>
				<div className="service-block-four col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
					<div className="inner-box ">
						<div className="icon-box">
							<i className="icon flaticon-business-006-target"></i>
						</div>
						<h5 className="title"><Link  to="/service-details">UI/UX <br/>Designing</Link ></h5>
						<div className="text">Providing the solutions for tech business</div>
					</div>
				</div>
			</div>
		</div>
        </section>      
        </>
    );
}

export default ServicesHomeFour;
