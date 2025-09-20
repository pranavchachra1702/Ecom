import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import FeaturesPage from './Pages/FeaturesPage'
import ServicesPage from './Pages/ServicesPage'
import ShopPage from './Pages/ShopPage'
import ProductPage from './Pages/ProductPage'
import TestimonialPage from './Pages/TestimonialPage'
import ContactusPage from './Pages/ContactusPage'
import ErrorPage from './Pages/ErrorPage'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/features' element={<FeaturesPage/>}/>
                <Route path='/services' element={<ServicesPage/>}/>
                <Route path='/shop' element={<ShopPage/>}/>
                <Route path='/product/:id' element={<ProductPage/>}/>
                <Route path='/testimonials' element={<TestimonialPage/>}/>
                <Route path='/contactus' element={<ContactusPage/>}/>


                
                <Route path='/*' element={<ErrorPage/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
