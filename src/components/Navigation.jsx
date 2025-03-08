import React from 'react';
import { Link  } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="nav main-menu">
        <ul className="navigation">
            <li className="current dropdown"><Link  href="/">Home</Link >
                <ul>
                    <li><Link  to="/">Home Layout 1</Link ></li>
                    <li><Link  to="/home-two">Home Layout 2</Link ></li>
                    <li><Link  to="/home-three">Home Layout 3</Link ></li>
                    <li><Link  to="/home-four">Home Layout 4</Link ></li>
                    <li><Link  to="/home-five">Home Layout 5</Link ></li>
                    {/*<li className="dropdown"><Link  href="#">Boxed</Link >
                        <ul>
                            <li><Link  to="/home-one-boxed">Home Boxed 1</Link ></li>
                            <li><Link  to="/home-two-boxed">Home Boxed 2</Link ></li>
                            <li><Link  to="/home-three-boxed">Home Boxed 3</Link ></li>
                            <li><Link  to="/home-four-boxed">Home Boxed 4</Link ></li>
                            <li><Link  to="/home-five-boxed">Home Boxed 5</Link ></li>
                            
                        </ul>
                    </li>*/}
                    <li className="dropdown"><Link  href="#">Header Styles</Link >
                        <ul>
                            <li><Link  to="/">Header Style 1</Link ></li>
                            <li><Link  to="/home-two">Header Style 2</Link ></li>
                            <li><Link  to="/home-three">Header Style 3</Link ></li>
                            <li><Link  to="/home-four">Header Style 4</Link ></li>
                            <li><Link  to="/home-five">Header Style 5</Link ></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="dropdown"><Link  href="#">Pages</Link >
                <ul>
                    <li><Link  to="/about-us">About</Link ></li>
                    <li className="dropdown"><Link  href="#">Projects</Link >
                        <ul>
                            <li><Link  to="/projects">Projects List</Link ></li>
                            <li><Link  to="/projects-details">Project Details</Link ></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link  href="#">Team</Link >
                        <ul>
                            <li><Link  to="/team">Team List</Link ></li>
                            <li><Link  to="/team-details">Team Details</Link ></li>
                        </ul>
                    </li>
                    <li><Link  to="/testimonial">Testimonial</Link ></li>
                    <li><Link  to="/pricing">Pricing</Link ></li>
                    <li><Link  to="/pricing-switcher">Pricing Switcher</Link ></li>
                    <li><Link  to="/faq">FAQ</Link ></li>
                    <li><Link  to="/error">Page 404</Link ></li>
                </ul>
            </li>
            <li className="dropdown"><Link  href="#">Services</Link >
                <ul>
                    <li><Link  to="/services">Services List</Link ></li>
                    <li><Link  to="/service-details">Service Details</Link ></li>
                </ul>
            </li>
            <li className="dropdown"><Link  href="#">Shop</Link >
                <ul>
                    <li><Link  to="/products">Products</Link ></li>
                    <li><Link  to="/products-sidebar">Products with Sidebar</Link ></li>
                    <li><Link  to="/products-details">Product Details</Link ></li>
                    <li><Link  to="/cart">Cart</Link ></li>
                    <li><Link  to="/checkout">Checkout</Link ></li>
                </ul>
            </li>
            <li className="dropdown"><Link  href="#">News</Link >
                <ul>
                    <li><Link  to="/news">News Grid</Link ></li>
                    <li><Link  to="/news-details">News Details</Link ></li>
                </ul>
            </li>
            <li><Link  to="/contact-pages">Contact</Link ></li>
        </ul>
    </nav>
    );
}

export default Navigation;
