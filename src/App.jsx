import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* global background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(124,58,237,0.15),transparent_60%),radial-gradient(ellipse_at_80%_10%,rgba(8,145,178,0.15),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
