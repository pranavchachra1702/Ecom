import React from 'react'
import About from '../Components/About'
import Features from '../Components/Features'
import ProductSlider from '../Components/ProductSlider'
// import Services from '../Components/Services'
import Products from '../Components/Products'
import Testimonial from '../Components/Testimonial'

// Import Swiper React components: https://swiperjs.com/demos:

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules'
import "swiper/css";

export default function HomePage() {
    let sliderOptions = {
        loop: true,
        modules: [Autoplay],
        autoplay: {
          delay: 2000
        },
    }
    return (
        <>
            <div className="container-fluid pb-5 hero-header bg-light mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center mb-5">
                        <div className="col-lg-6">
                            <h1 className="display-1 mb-4 animated slideInRight">Curated <span className="text-primary">Collections, </span>
                                Crafted for You.</h1> 
                            <h5 className="d-inline-block border border-2 border-white py-3 px-5 mb-0 animated slideInRight">
                                Shop Smarter. Live Better.</h5>
                        </div>
                        <div className="col-lg-6">
                            <div className="header-carousel animated fadeIn">
                                <Swiper classNameName="mySwiper" {...sliderOptions}>
                                    <SwiperSlide><img className="img-fluid" src="img/hero-slider-1.jpg" alt="" /> </SwiperSlide>
                                    <SwiperSlide><img className="img-fluid" src="img/hero-slider-2.jpg" alt="" /> </SwiperSlide>
                                    <SwiperSlide><img className="img-fluid" src="img/hero-slider-3.jpg" alt="" /> </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 animated fadeIn">
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i className="fa fa-truck fs-3 text-primary"></i>
                                </div>
                                <h5 className="lh-base mb-0">Fastest Delivery</h5>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i className="fa fa-check-circle fs-3 text-primary"></i>
                                </div>
                                <h5 className="lh-base mb-0">100% Original</h5>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i className="fa fa-undo fs-4 text-primary"></i>
                                </div>
                                <h5 className="lh-base mb-0">7 Days Return Policy</h5>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i className="fa fa-percent fs-4 text-primary"></i>
                                </div>
                                <h5 className="lh-base mb-0">Upto 90% Off</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Features />
            <ProductSlider />
            {/* <Services /> */}
            <Products />
            <Testimonial />
        </>
    )
}
