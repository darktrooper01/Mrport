import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Work from './pages/Work'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchSection from './components/SearchSection'
import Projcard from './components/Projcard'
import Skills from './components/Skills'
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
              <Hero />
              <Projcard />
              <Skills/>
              <Footer/>
              
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