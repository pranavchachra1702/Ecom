import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className="container-fluid bg-primary newsletter p-0">
        <div className="container p-0">
            <div className="row g-0 align-items-center">
                <div className="col-md-5 ps-lg-0 text-start wow fadeIn" data-wow-delay="0.2s">
                    <img className="img-fluid w-100" src="img/newsletter.jpg" alt=""/>
                </div>
                <div className="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-5">
                        <h1 className="mb-5">Subscribe the <span
                                className="text-uppercase text-primary bg-white px-2">Newsletter</span></h1>
                        <div className="position-relative w-100 mb-2">
                            <input className="form-control border-0 w-100 ps-4 pe-5" type="text"
                                placeholder="Enter Your Email" style={{ height: '60px'}}/>
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-2 me-2"><i
                                    className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                        <p className="mb-0">Diam sed sed dolor stet amet eirmod</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <Link href="index.html" className="d-inline-block mb-3">
                        <h1 className="text-white">{import.meta.env.VITE_APP_SITE_NAME}</h1>
                    </Link>
                    <p className="mb-0 text-light">At ShopStudio, we bring style, quality, and convenience together. Discover curated collections, seamless shopping, and trusted service designed to make every purchase effortless, enjoyable, and uniquely yours.</p>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <h5 className="text-white mb-4">Get In Touch</h5>
                    <p><Link className='text-light' to={import.meta.env.VITE_APP_MAP2} target='_blank' rel='noreferrer'><i className="fs-5 fa fa-map-marker me-3"></i>{import.meta.env.VITE_APP_ADDRESS}</Link></p>
                    <p><Link className='text-light' to={`mailto:${import.meta.env.VITE_APP_EMAIL}`} target='_blank' rel='noreferrer'><i className="fs-5 fa fa-envelope me-3"></i>{import.meta.env.VITE_APP_EMAIL}</Link></p>
                    <p><Link className='text-light' to={`phone:${import.meta.env.VITE_APP_PHONE}`} target='_blank' rel='noreferrer'><i className="fs-5 fa fa-phone me-3"></i>{import.meta.env.VITE_APP_PHONE}</Link></p>
                    <p><Link className='text-light' to={`https://wa.me/${import.meta.env.VITE_APP_WHATSAPP}`} target='_blank' rel='noreferrer'><i className="fs-5 fa fa-whatsapp me-3"></i>{import.meta.env.VITE_APP_WHATSAPP}</Link></p>
                    <div className="d-flex pt-2">
                        <Link className="btn btn-outline-light btn-square border-2 me-2" to={import.meta.env.VITE_APP_TWITTER}><i
                                className="text-light fab fa-twitter"></i></Link>
                        <Link className="btn btn-outline-light btn-square border-2 me-2" to={import.meta.env.VITE_APP_FACEBOOK}><i
                                className="text-light fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-outline-light btn-square border-2 me-2" to={import.meta.env.VITE_APP_YOUTUBE}><i
                                className="text-light fab fa-youtube"></i></Link>
                        <Link className="btn btn-outline-light btn-square border-2 me-2" to={import.meta.env.VITE_APP_INSTAGRAM}><i
                                className="text-light fab fa-instagram"></i></Link>
                        <Link className="btn btn-outline-light btn-square border-2 me-2" to={import.meta.env.VITE_APP_LINKEDIN}><i
                                className="text-light fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-2 wow fadeIn" data-wow-delay="0.5s">
                    <h5 className="text-white mb-4">Popular Link</h5>
                    <Link className="btn btn-link text-light" to="/">Home</Link>
                    <Link className="btn btn-link text-light" to="/about">About Us</Link>
                    <Link className="btn btn-link text-light" to="/shop">Shop</Link>
                    <Link className="btn btn-link text-light" to="/features">Features</Link>
                    <Link className="btn btn-link text-light" to="/services">Services</Link>
                    <Link className="btn btn-link text-light" to="/contactus">Contact Us</Link>
                </div>
                <div className="col-md-6 col-lg-2 wow fadeIn" data-wow-delay="0.7s">
                    <h5 className="text-white mb-4">Our Services</h5>
                    <Link className="btn btn-link text-light" to="/testimonials">Testimonials</Link>
                    <Link className="btn btn-link text-light" to="/faq">FAQ</Link>
                    <Link className="btn btn-link text-light" to="#">T&C</Link>
                    <Link className="btn btn-link text-light" to="#">Privacy Policy</Link>
                    <Link className="btn btn-link text-light" to="#">Refund Policy</Link>
                    <Link className="btn btn-link text-light" to="#">Data Policy</Link>
                </div>
            </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <Link className="border-bottom" to="#!">{import.meta.env.VITE_APP_SITE_NAME}</Link>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <Link className="text-light" to="/">Home</Link>
                            <Link className="text-light" to="/about">About</Link>
                            <Link className="text-light" to="/shop">Shop</Link>
                            <Link className="text-light" to="/features">Features</Link>
                            <Link className="text-light" to="/services">Services</Link>
                            <Link className="text-light" to="/faq">FAQs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
