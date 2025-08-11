import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Goals from './components/Goals';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Features />
      <Benefits />
      <Goals />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;