import React from 'react'
import About from '../Components/About'
import Features from '../Components/Features'
import ProductSlider from '../Components/ProductSlider'
import Services from '../Components/Services'
import Products from '../Components/Products'
import Testimonial from '../Components/Testimonial'

export default function HomePage() {
    return (
        <>
            <div class="container-fluid pb-5 hero-header bg-light mb-5">
                <div class="container py-5">
                    <div class="row g-5 align-items-center mb-5">
                        <div class="col-lg-6">
                            <h1 class="display-1 mb-4 animated slideInRight">We Make Your <span class="text-primary">Home</span>
                                Better</h1>
                            <h5 class="d-inline-block border border-2 border-white py-3 px-5 mb-0 animated slideInRight">
                                An Award Winning Studio Since 1990</h5>
                        </div>
                        <div class="col-lg-6">
                            <div class="owl-carousel header-carousel animated fadeIn">
                                <img class="img-fluid" src="img/hero-slider-1.jpg" alt="" />
                                <img class="img-fluid" src="img/hero-slider-2.jpg" alt="" />
                                <img class="img-fluid" src="img/hero-slider-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="row g-5 animated fadeIn">
                        <div class="col-md-6 col-lg-3">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i class="fa fa-robot text-primary"></i>
                                </div>
                                <h5 class="lh-base mb-0">Crafted Furniture</h5>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i class="fa fa-robot text-primary"></i>
                                </div>
                                <h5 class="lh-base mb-0">Sustainable Material</h5>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i class="fa fa-robot text-primary"></i>
                                </div>
                                <h5 class="lh-base mb-0">Innovative Architects</h5>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i class="fa fa-robot text-primary"></i>
                                </div>
                                <h5 class="lh-base mb-0">Budget Friendly</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About/>
            <Features/>
            <ProductSlider/>
            <Services/>
            <Products/>
            <Testimonial/>
        </>
    )
}
