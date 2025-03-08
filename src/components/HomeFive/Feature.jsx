import React from 'react';
import { Link  } from 'react-router-dom';

function FeaturesSectionSix() {

    return (
        <section className="features-section-six">
            <div className="auto-container">
                <div className="row">
                    {/*<!-- Feature Block Six -->*/}
                    <div className="feature-block-six col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box ">
                            <span className="icon">46+</span>
                            <h3 className="title"><Link  href="#">Internet &<br/> Cyber Security <br/>Solutions</Link ></h3>
                            <Link  href="page-services" className="theme-btn btn-style-two small hvr-light"><span className="btn-title">Find Your Solution</span></Link >
                        </div>
                    </div>

                    {/*<!-- Feature Block Six -->*/}
                    <div className="feature-block-six col-lg-4 hide-md ">
                        <div className="inner-box ">
                            <figure className="image"><img src="./src/assets/images/resource/feature-bg-6.jpg" alt=""/></figure>
                        </div>
                    </div>

                    {/*<!-- Feature Block Six -->*/}
                    <div className="feature-block-six col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box ">
                            <span className="icon flaticon-business-030-settings"></span>
                            <h3 className="title"><Link  href="#">Expert IT <br/>Consultants <br/>Available</Link ></h3>
                            <Link  href="page-team" className="theme-btn btn-style-two small hvr-light"><span className="btn-title">Find Your Solution</span></Link >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionSix;
