import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Work from './pages/Work'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchSection from './components/SearchSection'
import Aurora from './components/Aurora'
import Contact from './pages/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Aurora />
              <Hero />
              <SearchSection />
              <Footer />
            </>
          } 
        />

        <Route 
          path="/Work" 
          element={
          <>
          <Work />
          <Footer/>
          </> 
          } 
        
        />

        <Route 
          path="/Contact" 
          element={
          <>
          <Contact />
          <Footer/>
          </> 
          } 
        
        />

        
      </Routes>
    </div>
  )
}

export default App