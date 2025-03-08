import React from 'react';
import { Link  } from 'react-router-dom';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import BackToTop from '../BackToTop.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';

import PricingImage1 from '../../assets/images/resource/pricing-1.png';
import PricingImage2 from '../../assets/images/resource/pricing-2.png';
import PricingImage3 from '../../assets/images/resource/pricing-1.png';

function Pricing() {
    return (
        <>
         <HomeOneHeader /><HeroPageTitle
        title="Pricing"
        breadcrumb={[
            { Link : '/', title: 'Home' },
            { Link : '/pricing', title: 'Pricing' },
        ]}
     />
        <section className="">
		<div className="container pb-70">
			<div className="row">
				<div className="col-xl-4 col-lg-4">
					<div className="pricing-block">
						<div className="inner-box">
							<figure className="image"><img src={PricingImage1} alt="" /></figure>
							<div className="price-box">
								<h4 className="price"><sup>$</sup>49</h4>
								<span className="validaty">/ Monthly</span>
							</div>
							<h4 className="title">Basic Plan</h4>
							<ul className="features">
								<li>24/7 system monitoring</li>
								<li>Security management</li>
								<li>Patch management</li>
								<li>Remote support</li>
							</ul>
							<div className="btn-box">
								<Link  to="/pricing" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Choose plan</span></Link >
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4">
					<div className="pricing-block">
						<div className="inner-box">
							<figure className="image"><img src={PricingImage2} alt="" /></figure>
							<div className="price-box">
								<h4 className="price"><sup>$</sup>69</h4>
								<span className="validaty">/ Monthly</span>
							</div>
							<h4 className="title">Advance Plan</h4>
							<ul className="features">
								<li>24/7 system monitoring</li>
								<li>Security management</li>
								<li>Patch management</li>
								<li>Remote support</li>
							</ul>
							<div className="btn-box">
								<Link  to="/pricing" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Choose plan</span></Link >
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4">
					<div className="pricing-block">
						<div className="inner-box">
							<figure className="image"><img src={PricingImage3} alt="" /></figure>
							<div className="price-box">
								<h4 className="price"><sup>$</sup>99</h4>
								<span className="validaty">/ Monthly</span>
							</div>
							<h4 className="title">Premium Plan</h4>
							<ul className="features">
								<li>24/7 system monitoring</li>
								<li>Security management</li>
								<li>Patch management</li>
								<li>Remote support</li>
							</ul>
							<div className="btn-box">
								<Link  to="/pricing" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Choose plan</span></Link >
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        <FooterHomeOne />
		<BackToTop />
        </>
    );
}

export default Pricing;
