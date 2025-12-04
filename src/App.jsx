import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-akatsuki-black text-white selection:bg-akatsuki-red selection:text-white overflow-x-hidden relative">
      {/* Global Background */}
      <div className="fixed inset-0 z-0">
        <img src={`${import.meta.env.BASE_URL}background.gif`} className="w-full h-full object-cover opacity-40" alt="Akatsuki Background" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
