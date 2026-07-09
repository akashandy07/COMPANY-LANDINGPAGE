import React from 'react'
import NavBar from './navbar/NavBar'
import AboutPage from './page/AboutPage'
import CarrerPage from './page/CarrerPage'
import ContactPage from './page/ContactPage'
import IndexPage from './page/IndexPage'
import ServicePage from './page/ServicePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import InsightPage from './page/InsightPage'
import ApplyForm from './page/ApplyForm'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/insight" element={<InsightPage />} />
          <Route path="/carrer" element={<CarrerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ApplyForm" element={<ApplyForm />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App