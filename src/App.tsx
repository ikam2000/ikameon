import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <About />
        <Testimonials />
        <Blog />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;