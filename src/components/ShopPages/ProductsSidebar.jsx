import React from 'react';
import { Link  } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import RangeSlider from '../../lib/RangeSlider.jsx';
import PortfolioFilter2 from './PortfolioFilter2.jsx';
import ProductDetailsImg1 from '../../assets/images/resource/products/thumb-1.jpg';
import ProductDetailsImg2 from '../../assets/images/resource/products/thumb-2.jpg';
import ProductDetailsImg3 from '../../assets/images/resource/products/thumb-3.jpg';

function Products() {
    
    return (
        <>
        <HomeOneHeader /><HeroPageTitle
        title="Shop"
        breadcrumb={[
            { Link : '/', title: 'Home' },
            { Link : '/products-sidebar', title: 'Products Sidebar' },
        ]}
     />
        <section className="featured-products">
		<span className="bg-shape"></span>
		<div className="auto-container">
			<div className="row clearfix">
				<div className="col-lg-3 col-md-12 col-sm-12">
					<div className="shop-sidebar">
						<div className="sidebar-search">
							<form action="shop-products" method="post" className="search-form">
								<div className="form-group">
									<input type="search" name="search-field" placeholder="Search..." required="" />
									<button><i className="lnr lnr-icon-search"></i></button>
								</div>
							</form>
						</div>
						<div className="sidebar-widget category-widget">
							<div className="widget-title">
								<h5 className="widget-title">Categories</h5>
							</div>
							<div className="widget-content">
								<ul className="category-list clearfix">
									<li><Link  to="/products-details">Cloud Solution</Link ></li>
									<li><Link  to="/products-details">Cyber Data</Link ></li>
									<li><Link  to="/products-details">SEO Marketing</Link ></li>
									<li><Link  to="/products-details">UI/UX Design</Link ></li>
									<li><Link  to="/products-details">Web Development</Link ></li>
									<li><Link  to="/products-details">Artifical Intelligence</Link ></li>
								</ul>
							</div>
						</div>
						<div className="sidebar-widget price-filters">
							<div className="widget-title">
								<h5 className="widget-title">Filter by Price</h5>
							</div>
							<RangeSlider/>
						</div>
						<div className="sidebar-widget post-widget">
							<div className="widget-title">
								<h5 className="widget-title">Popular Products</h5>
							</div>
							<div className="post-inner">
								<div className="post">
									<figure className="post-thumb"><Link  to="shop-details"><img src={ProductDetailsImg1} alt="Product Thumb" /></Link ></figure>
									<Link  to="/products-details">Best Headset</Link >
									<span className="price">$45.00</span>
								</div>
								<div className="post">
									<figure className="post-thumb"><Link  to="shop-details"><img src={ProductDetailsImg2} alt="Product Thumb" /></Link ></figure>
									<Link  to="/products-details">Quality Battery</Link >
									<span className="price">$34.00</span>
								</div>
								<div className="post">
									<figure className="post-thumb"><Link  to="shop-details"><img src={ProductDetailsImg3} alt="Product Thumb" /></Link ></figure>
									<Link  to="/products-details">Smart Watch</Link >
									<span className="price">$29.00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-9 col-md-12 col-sm-12 content-side">
					<div className="mixitup-gallery">
						<PortfolioFilter2 />
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

export default Products;
