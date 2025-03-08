import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import TestimonialImage1 from '../../assets/images/resource/testi-thumb-3.jpg';
import TestimonialImage2 from '../../assets/images/resource/testi-thumb-3.jpg';
import BackgroundImage from '../../assets/images/resource/testimonial-bg.png'; 

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
};

const testimonials = [
    {
        image: TestimonialImage1,
        name: 'Jessica Brown',
        designation: 'Co Founder',
        text: 'Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.',
        rating: 5,
    },
    {
        image: TestimonialImage2,
        name: 'Jessica Brown',
        designation: 'Co Founder',
        text: 'Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.',
        rating: 5,
    },
    // Add more testimonials as needed
];

function TestimonialCarousel() {
    return (
        <section className="testimonial-section-four">
            <div className="auto-container">
                <div className="row">
                    {/* Title Column */}
                    <div className="title-column col-xl-5 col-lg-6 col-md-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Our feedbacks</span>
                                <h2>What They’re Talking About Us</h2>
                                <div className="text">
                                    There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words believable.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-column col-xl-7 col-lg-6 col-md-12">
                        <div className="carousel-outer">
                            <div
                                className="testimonial-bg"
                                style={{ backgroundImage: `url(${BackgroundImage})` }} 
                            ></div>
                            <Swiper {...swiperOptions} className="testimonial-carousel-four">
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index} className="testimonial-block-four">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <span className="icon icon-quote"></span>
                                                <div className="rating">
                                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                        <i key={i} className="fa fa-star"></i>
                                                    ))}
                                                </div>
                                                <div className="text">{testimonial.text}</div>
                                            </div>
                                            <div className="info-box">
                                                <figure className="thumb">
                                                    <img src={testimonial.image} alt={testimonial.name} />
                                                </figure>
                                                <h5 className="name">{testimonial.name}</h5>
                                                <span className="designation">{testimonial.designation}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialCarousel;
