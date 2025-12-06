import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import RevealOnScroll from './components/RevealOnScroll';
import VillageScrollBackground from './components/VillageScrollBackground';
import TechMarquee from './components/TechMarquee';
import SoundButton from './components/SoundButton';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-akatsuki-black text-white selection:bg-akatsuki-red selection:text-white overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Global Background */}
          <div className="fixed inset-0 z-0">
            <img
              src={`${import.meta.env.BASE_URL}background.gif`}
              className="w-full h-full object-cover opacity-60"
              alt="Akatsuki Background"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
          </div>

          <div className="relative z-10">
            <VillageScrollBackground />
            <Navbar />
            <SoundButton />
            <main>
              <Hero />

              <div className="my-10">
                <TechMarquee />
              </div>

              <RevealOnScroll>
                <About />
              </RevealOnScroll>
              <RevealOnScroll>
                <Skills />
              </RevealOnScroll>
              <RevealOnScroll>
                <Projects />
              </RevealOnScroll>
              <RevealOnScroll>
                <Contact />
              </RevealOnScroll>
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
