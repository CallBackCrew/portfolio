import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx'; 

function FunFactSectionTwo() {
    const countProjectCompleted = 4520;
    const countITSpecialists = 326;
    const countSatisfiedClients = 8600;
    const countSmartSolutions = 238;

    return (
        <section className="fun-fact-section-two">
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        {/* First Counter Block */}
                        <div className="counter-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner">
                            <i className="icon flaticon-business-060-graph"></i>
                                <div className="count-box">
                                    <CounterUp count={countProjectCompleted} time={3} />
                                </div>
                                <h6 className="counter-title">Project completed</h6>
                            </div>
                        </div>

                        {/* Second Counter Block */}
                        <div className="counter-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                            <i className="icon flaticon-business-035-helpline"></i>
                                <div className="count-box">
                                    <CounterUp count={countITSpecialists} time={3} />
                                </div>
                                <h6 className="counter-title">IT specialists</h6>
                            </div>
                        </div>

                        {/* Third Counter Block */}
                        <div className="counter-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">
                            <i className="icon flaticon-business-020-hierarchy"></i>
                                <div className="count-box">
                                    <CounterUp count={countSatisfiedClients} time={3} />
                                </div>
                                <h6 className="counter-title">Satisfied clients</h6>
                            </div>
                        </div>

                        {/* Fourth Counter Block */}
                        <div className="counter-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                            <i className="icon flaticon-business-048-coin"></i>
                                <div className="count-box">
                                    <CounterUp count={countSmartSolutions} time={3} />
                                </div>
                                <h6 className="counter-title">Smart solutions</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FunFactSectionTwo;
