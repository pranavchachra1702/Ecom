import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import About from '../Components/About'
import Features from '../Components/Features'
// import Services from '../Components/Services'
import Testimonial from '../Components/Testimonial'

export default function AboutPage() {
  return (
    <>
    <Breadcrum title="About Us"/>
    <About/>
    <Features/>
    {/* <Services/> */}
    <Testimonial/>
    </>
  )
}
