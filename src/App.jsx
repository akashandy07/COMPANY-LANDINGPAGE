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
import ProtectedRoute from './login/ProtectedRoute'
import LoginPage from './login/LoginPage'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <IndexPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/service"
            element={
              <ProtectedRoute>
                <ServicePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/insight"
            element={
              <ProtectedRoute>
                <InsightPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/carrer"
            element={
              <ProtectedRoute>
                <CarrerPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ApplyForm"
            element={
              <ProtectedRoute>
                <ApplyForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App