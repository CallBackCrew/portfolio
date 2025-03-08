import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import BackToTop from '../BackToTop.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';

import PricingImage1 from '../../assets/images/resource/pricing-1.png';
import PricingImage2 from '../../assets/images/resource/pricing-1.png';
import PricingImage3 from '../../assets/images/resource/pricing-1.png';

function Pricing() {
  const [activeIndex, setActiveIndex] = useState(1); 

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const togglePricing = () => {
    setActiveIndex((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <>
      <HomeOneHeader />
      <HeroPageTitle
        title="Pricing"
        breadcrumb={[
          { Link : '/', title: 'Home' },
          { Link : '/pricing', title: 'Pricing Switcher' },
        ]}
      />

      <section>
        <div className="container pb-70">
          <div className="sec-title-app-no-subborder text-center">
            <span className="sub-title">Welcome to tech</span>
            <h2>See Our Pricing Plans</h2>
          </div>

          {/* Pricing Plan Switcher */}
          <div className="tm-pricing-plan-switcher text-center">
            <span
              className={`title-normal ${activeIndex === 1 ? 'active' : ''}`}
              onClick={() => handleOnClick(1)}
              style={{ cursor: 'pointer' }}
            >
              Monthly
            </span>
            <div className="price-switcher" onClick={togglePricing} style={{ cursor: 'pointer' }}>
              <div className={`pricing-switcher-btn ${activeIndex === 2 ? 'right' : ''}`}>
                <a 
                  aria-label="Pricing" 
                  className={`btn-toggle ${activeIndex === 2 ? 'secondary-active' : ''}`}>
                  <span className="round"></span>
                </a>
              </div>
            </div>
            <span
              className={`title-secondary ${activeIndex === 2 ? 'active' : ''}`}
              onClick={() => handleOnClick(2)}
              style={{ cursor: 'pointer' }}
            >
              Yearly
            </span>
            <span className="price-offer">20% Off</span>
          </div>

          <div className="row">
            {/* Monthly Pricing Plans */}
            {activeIndex === 1 && (
              <>
                <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-column wow fadeInLeft">
                    <div className="tm-pricing-table pricing-block">
                      <div className="inner-box">
                        <figure className="image">
                          <img src={PricingImage1} alt="" />
                        </figure>
                        <div className="price-box price-normal">
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
                          <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                            <span className="btn-title">Choose plan</span>
                          </Link >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-column wow fadeInLeft">
                    <div className="tm-pricing-table pricing-block">
                      <div className="inner-box">
                        <figure className="image">
                          <img src={PricingImage2} alt="" />
                        </figure>
                        <div className="price-box price-normal">
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
                          <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                            <span className="btn-title">Choose plan</span>
                          </Link >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-column wow fadeInLeft">
                    <div className="tm-pricing-table pricing-block">
                      <div className="inner-box">
                        <figure className="image">
                          <img src={PricingImage3} alt="" />
                        </figure>
                        <div className="price-box price-normal">
                          <h4 className="price"><sup>$</sup>125</h4>
                          <span className="validaty">/ Monthly</span>
                        </div>
                        <h4 className="title">Pro Plan</h4>
                        <ul className="features">
                          <li>24/7 system monitoring</li>
                          <li>Security management</li>
                          <li>Patch management</li>
                          <li>Remote support</li>
                        </ul>
                        <div className="btn-box">
                          <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                            <span className="btn-title">Choose plan</span>
                          </Link >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Yearly Pricing Plans */}
            {activeIndex === 2 && (
              <>
                <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-column wow fadeInLeft">
                    <div className="tm-pricing-table pricing-block">
                      <div className="inner-box">
                        <figure className="image">
                          <img src={PricingImage1} alt="" />
                        </figure>
                        <div className="price-box price-secondary">
                          <h4 className="price"><sup>$</sup>128</h4>
                          <span className="validaty">/ Yearly</span>
                        </div>
                        <h4 className="title">Basic Plan</h4>
                        <ul className="features">
                          <li>24/7 system monitoring</li>
                          <li>Security management</li>
                          <li>Patch management</li>
                          <li>Remote support</li>
                        </ul>
                        <div className="btn-box">
                          <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                            <span className="btn-title">Choose plan</span>
                          </Link >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-column wow fadeInLeft">
                    <div className="tm-pricing-table pricing-block">
                      <div className="inner-box">
                        <figure className="image">
                          <img src={PricingImage2} alt="" />
                        </figure>
                        <div className="price-box price-secondary">
                          <h4 className="price"><sup>$</sup>199</h4>
                          <span className="validaty">/ Yearly</span>
                        </div>
                        <h4 className="title">Premium Plan</h4>
                        <ul className="features">
                          <li>24/7 system monitoring</li>
                          <li>Security management</li>
                          <li>Patch management</li>
                          <li>Remote support</li>
                        </ul>
                        <div className="btn-box">
                          <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                            <span className="btn-title">Choose plan</span>
                          </Link >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-column wow fadeInLeft">
                    <div className="tm-pricing-table pricing-block">
                      <div className="inner-box">
                        <figure className="image">
                          <img src={PricingImage3} alt="" />
                        </figure>
                        <div className="price-box price-secondary">
                          <h4 className="price"><sup>$</sup>299</h4>
                          <span className="validaty">/ Yearly</span>
                        </div>
                        <h4 className="title">Pro Plan</h4>
                        <ul className="features">
                          <li>24/7 system monitoring</li>
                          <li>Security management</li>
                          <li>Patch management</li>
                          <li>Remote support</li>
                        </ul>
                        <div className="btn-box">
                          <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                            <span className="btn-title">Choose plan</span>
                          </Link >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

	  <section>
      <div className="container pb-70">
        <div className="sec-title-app-no-subborder text-center">
          <span className="sub-title">Welcome to tech</span>
          <h2>See Our Pricing Plans</h2>
        </div>

        {/* Pricing Plan Switcher */}
        <div className="tm-pricing-smart-switcher-button text-center">
          <ul className="switch-buttons justify-content-center mb-60">
            <li className={activeIndex === 1 ? 'active' : ''}>
              <a
                href="javascript:"
                className={`btn-toggle ${activeIndex === 1 ? 'active' : ''}`}
                onClick={() => handleOnClick(1)}
              >
                <span className="title">Monthly</span>
              </a>
            </li>
            <li className={activeIndex === 2 ? 'active' : ''}>
              <a
                href="javascript:"
                className={`btn-toggle ${activeIndex === 2 ? 'active' : ''}`}
                onClick={() => handleOnClick(2)}
              >
                <span className="title">Yearly</span>
                <span className="price-offer">20% Off</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="row">
          {/* Monthly Pricing Plans */}
          {activeIndex === 1 && (
            <>
              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage1} alt="" />
                      </figure>
                      <div className="price-box price-normal">
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
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage2} alt="" />
                      </figure>
                      <div className="price-box price-normal">
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
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage3} alt="" />
                      </figure>
                      <div className="price-box price-normal">
                        <h4 className="price"><sup>$</sup>125</h4>
                        <span className="validaty">/ Monthly</span>
                      </div>
                      <h4 className="title">Pro Plan</h4>
                      <ul className="features">
                        <li>24/7 system monitoring</li>
                        <li>Security management</li>
                        <li>Patch management</li>
                        <li>Remote support</li>
                      </ul>
                      <div className="btn-box">
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Yearly Pricing Plans */}
          {activeIndex === 2 && (
            <>
              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage1} alt="" />
                      </figure>
                      <div className="price-box price-secondary">
                        <h4 className="price"><sup>$</sup>128</h4>
                        <span className="validaty">/ Yearly</span>
                      </div>
                      <h4 className="title">Basic Plan</h4>
                      <ul className="features">
                        <li>24/7 system monitoring</li>
                        <li>Security management</li>
                        <li>Patch management</li>
                        <li>Remote support</li>
                      </ul>
                      <div className="btn-box">
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage2} alt="" />
                      </figure>
                      <div className="price-box price-secondary">
                        <h4 className="price"><sup>$</sup>199</h4>
                        <span className="validaty">/ Yearly</span>
                      </div>
                      <h4 className="title">Premium Plan</h4>
                      <ul className="features">
                        <li>24/7 system monitoring</li>
                        <li>Security management</li>
                        <li>Patch management</li>
                        <li>Remote support</li>
                      </ul>
                      <div className="btn-box">
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage3} alt="" />
                      </figure>
                      <div className="price-box price-secondary">
                        <h4 className="price"><sup>$</sup>299</h4>
                        <span className="validaty">/ Yearly</span>
                      </div>
                      <h4 className="title">Pro Plan</h4>
                      <ul className="features">
                        <li>24/7 system monitoring</li>
                        <li>Security management</li>
                        <li>Patch management</li>
                        <li>Remote support</li>
                      </ul>
                      <div className="btn-box">
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>

	 <section>
      <div className="container pb-70">
        <div className="sec-title-app-no-subborder text-center">
          <span className="sub-title">Welcome to tech</span>
          <h2>See Our Pricing Plans</h2>
        </div>

        {/* Pricing Plan Switcher */}
        <div className="tm-pricing-smart-switcher-button round-switch-btn text-center">
          <ul className="switch-buttons justify-content-center mb-60">
            <li className={activeIndex === 1 ? 'active' : ''}>
              <a
                href="javascript:"
                className={`btn-toggle ${activeIndex === 1 ? 'active' : ''}`}
                onClick={() => handleOnClick(1)}
                style={{ cursor: 'pointer' }}
              >
                <span className="title">Monthly</span>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className={`btn-toggle ${activeIndex === 2 ? 'active' : ''}`}
                onClick={() => handleOnClick(2)}
                style={{ cursor: 'pointer' }}
              >
                <span className="title">Yearly</span>
                <span className="price-offer">20% Off</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="row">
          {/* Monthly Pricing Plans */}
          {activeIndex === 1 && (
            <>
              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage1} alt="" />
                      </figure>
                      <div className="price-box price-normal">
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
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage2} alt="" />
                      </figure>
                      <div className="price-box price-normal">
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
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage3} alt="" />
                      </figure>
                      <div className="price-box price-normal">
                        <h4 className="price"><sup>$</sup>125</h4>
                        <span className="validaty">/ Monthly</span>
                      </div>
                      <h4 className="title">Pro Plan</h4>
                      <ul className="features">
                        <li>24/7 system monitoring</li>
                        <li>Security management</li>
                        <li>Patch management</li>
                        <li>Remote support</li>
                      </ul>
                      <div className="btn-box">
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Yearly Pricing Plans */}
          {activeIndex === 2 && (
            <>
              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage1} alt="" />
                      </figure>
                      <div className="price-box price-secondary">
                        <h4 className="price"><sup>$</sup>128</h4>
                        <span className="validaty">/ Yearly</span>
                      </div>
                      <h4 className="title">Basic Plan</h4>
                      <ul className="features">
                        <li>24/7 system monitoring</li>
                        <li>Security management</li>
                        <li>Patch management</li>
                        <li>Remote support</li>
                      </ul>
                      <div className="btn-box">
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage2} alt="" />
                      </figure>
                      <div className="price-box price-secondary">
                        <h4 className="price"><sup>$</sup>199</h4>
                        <span className="validaty">/ Yearly</span>
                      </div>
                      <h4 className="title">Premium Plan</h4>
                      <ul className="features">
                        <li>24/7 system monitoring</li>
                        <li>Security management</li>
                        <li>Patch management</li>
                        <li>Remote support</li>
                      </ul>
                      <div className="btn-box">
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="tm-pricing-table pricing-block">
                    <div className="inner-box">
                      <figure className="image">
                        <img src={PricingImage3} alt="" />
                      </figure>
                      <div className="price-box price-secondary">
                        <h4 className="price"><sup>$</sup>299</h4>
                        <span className="validaty">/ Yearly</span>
                      </div>
                      <h4 className="title">Pro Plan</h4>
                      <ul className="features">
                        <li>24/7 system monitoring</li>
                        <li>Security management</li>
                        <li>Patch management</li>
                        <li>Remote support</li>
                      </ul>
                      <div className="btn-box">
                        <Link  to="/pricing" className="theme-btn btn-style-one hvr-light">
                          <span className="btn-title">Choose plan</span>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>

      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default Pricing;
