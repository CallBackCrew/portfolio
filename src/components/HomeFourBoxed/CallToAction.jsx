import React from 'react';
import { Link  } from 'react-router-dom';

function CallToActionFive({ className }) {
    return (
        <section className={`call-to-action-five ${className || ''}`}>
            <div className="row g-0">
                <div className="column col-lg-6 col-md-12 col-sm-12">
                    <div className="title-box">
                        <h2 className="title">
                            <Link  to="/page-projects">Improve & Enhance the <br />Tech Projects</Link >
                        </h2>
                    </div>
                </div>
                <div className="column col-lg-6 col-md-12 col-sm-12">
                    <div className="title-box style-two">
                        <h2 className="title">
                            <Link  to="/services">The Best Source for <br />IT Solutions</Link >
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToActionFive;
