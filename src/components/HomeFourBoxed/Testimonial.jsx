import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import TestimonialImage1 from '../../assets/images/resource/test-thumb-7.jpg';
import TestimonialImage2 from '../../assets/images/resource/test-thumb-8.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
    }
};

function TestimonialCarousel() {
    const testimonials = [
        {
            image: TestimonialImage1,
            name: 'Mike Hardson',
            designation: 'Designer',
            text: 'We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology to create a better and smarter environment.',
            rating: 5
        },
        {
            image: TestimonialImage2,
            name: 'Jessica Brown',
            designation: 'Designer',
            text: 'We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology to create a better and smarter environment.',
            rating: 5
        }
    ];

    return (
        <section className="testimonial-section-three">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our feedbacks</span>
                    <h2>What They’re Talking<br /> About Company</h2>
                </div>

                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="testimonial-carousel-three">
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="testimonial-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="thumb">
                                            <img src={testimonial.image} alt={testimonial.name} />
                                        </figure>
                                        <span className="icon fa fa-quote-right"></span>
                                    </div>
                                    <div className="content-box">
                                        <div className="info-box">
                                            <div className="rating">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <i key={i} className="fa fa-star"></i>
                                                ))}
                                            </div>
                                            <h5 className="name">{testimonial.name}</h5>
                                            <span className="designation">{testimonial.designation}</span>
                                        </div>
                                        <div className="text">{testimonial.text}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="testimonial-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="thumb">
                                            <img src={testimonial.image} alt={testimonial.name} />
                                        </figure>
                                        <span className="icon fa fa-quote-right"></span>
                                    </div>
                                    <div className="content-box">
                                        <div className="info-box">
                                            <div className="rating">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <i key={i} className="fa fa-star"></i>
                                                ))}
                                            </div>
                                            <h5 className="name">{testimonial.name}</h5>
                                            <span className="designation">{testimonial.designation}</span>
                                        </div>
                                        <div className="text">{testimonial.text}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default TestimonialCarousel;
