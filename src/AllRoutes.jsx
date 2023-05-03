import React from 'react'
import {HashRouter as Router,  Route} from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import LandingPage from './pages/LandingPage/LandingPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ServicePage from './pages/ServicePage/ServicePage'
import GalleryPage from './pages/GalleryPage/GalleryPage'



function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage /> } />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>  
  )
}

export default AllRoutes
