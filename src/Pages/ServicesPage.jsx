import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Features from '../Components/Features'
import Services from '../Components/Services'
import Testimonial from '../Components/Testimonial'

export default function ServicesPage() {
  return (
    <>
    <Breadcrum title="Services"/>
    <Services/>
    <Features/>
    <Testimonial/>
    </>
  )
}
