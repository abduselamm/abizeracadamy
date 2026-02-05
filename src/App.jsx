import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-void text-white selection:bg-secondary selection:text-void font-sans overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-glass-border">
        © {new Date().getFullYear()} Abizer Online Quran Academy. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
