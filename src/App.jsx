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
import AdminHome from './Pages/Admin/AdminHome'
import AdminMaincategory from './Pages/Admin/Maincategory/AdminMaincategory'
import AdminCreateMaincategory from './Pages/Admin/Maincategory/AdminCreateMaincategory'
import AdminUpdateMaincategory from './Pages/Admin/Maincategory/AdminUpdateMaincategory'
import AdminUpdateSubcategory from './Pages/Admin/Subcategory/AdminUpdateSubcategory'
import AdminCreateSubcategory from './Pages/Admin/Subcategory/AdminCreateSubcategory'
import AdminSubcategory from './Pages/Admin/Subcategory/AdminSubcategory'
import AdminBrand from './Pages/Admin/Brand/AdminBrand'
import AdminCreateBrand from './Pages/Admin/Brand/AdminCreateBrand'
import AdminUpdateBrand from './Pages/Admin/Brand/AdminUpdateBrand'

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

                {/* Admin Pages */}
                <Route path='/admin' element={<AdminHome/>}/>
                <Route path='/admin/maincategory' element={<AdminMaincategory/>}/>
                <Route path='/admin/maincategory/create' element={<AdminCreateMaincategory/>}/>
                <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMaincategory/>}/>

                <Route path='/admin/subcategory' element={<AdminSubcategory/>}/>
                <Route path='/admin/subcategory/create' element={<AdminCreateSubcategory/>}/>
                <Route path='/admin/subcategory/update/:id' element={<AdminUpdateSubcategory/>}/>

                <Route path='/admin/brand' element={<AdminBrand/>}/>
                <Route path='/admin/brand/create' element={<AdminCreateBrand/>}/>
                <Route path='/admin/brand/update/:id' element={<AdminUpdateBrand/>}/>

                <Route path='/*' element={<ErrorPage/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
