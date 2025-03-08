import React from 'react';
import { Link  } from 'react-router-dom';


function ServicesHomeThree({ className }) {
    return (
        <>
        <section className={`services-section-three ${className || ''}`}>
        <div className="auto-container">
			<div className="sec-title text-center">
				<span className="sub-title">Services we’re offering</span>
				<h2>We Provide our Clients <br/>Best IT Services</h2>
			</div>
			<div className="outer-box">
				<div className="row justify-content-center">
					<div className="service-block-three col wow fadeInUp">
						<div className="inner-box ">
							<i className="icon flaticon-business-002-graph"></i>
							<h6 className="title"><Link  to="/service-details">Product <br/>Development</Link ></h6>
							<div className="text">Providing the solutions for tech business</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="200ms">
						<div className="inner-box ">
							<i className="icon flaticon-business-010-startup"></i>
							<h6 className="title"><Link  to="/service-details">Digital <br/>Marketing</Link ></h6>
							<div className="text">Providing the solutions for tech business</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="400ms">
						<div className="inner-box ">
							<i className="icon flaticon-business-030-settings"></i>
							<h6 className="title"><Link  to="/service-details">Security <br/>System</Link ></h6>
							<div className="text">Providing the solutions for tech business</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box ">
							<i className="icon flaticon-business-045-stationery"></i>
							<h6 className="title"><Link  to="/service-details">UI/UX <br/>Designing</Link ></h6>
							<div className="text">Providing the solutions for tech business</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<i className="icon flaticon-business-054-graph"></i>
							<h6 className="title"><Link  to="/service-details">Data <br/>Analysis</Link ></h6>
							<div className="text">Providing the solutions for tech business</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </section>      
        </>
    );
}

export default ServicesHomeThree;
