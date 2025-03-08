import React from 'react';
import { Link  } from 'react-router-dom';


function CallToActionHomeTwo({ className }) {
    return (
        <>
        <section className={`call-to-action-three p-0 ${className || ''}`}>
        <div className="auto-container">
			<div className="outer-box">
				<div className="title-box">
					<span className="icon fa fa-network-wired"></span>
					<h5 className="title">Need IT solutions & services consultation?</h5>
				</div>
				<div className="btn-box">
					<Link  to="/services" className="theme-btn btn-style-one bg-light">
                        <span className="btn-title">get solution</span>
                    </Link >
				</div>
			</div>
		</div>
        </section>
        </>
    );
}

export default CallToActionHomeTwo;
