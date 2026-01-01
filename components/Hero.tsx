import React, { useState, useEffect } from 'react';
import { HERO_BACKGROUND } from '../constants';

const Hero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BACKGROUND}
          alt="Neural Network Background"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white">
        <div className="animate-fade-in-up w-fit max-w-4xl mx-auto bg-slate-900/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight drop-shadow-md">
            Deciphering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neuro-100 to-teal-300 drop-shadow-none">
              Neuroenergetics
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-100 mb-10 leading-relaxed font-medium drop-shadow">
            Investigating how neurons manage their complex energy landscapes to fuel biological processes, plasticity, and health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#research"
              className="px-8 py-3.5 bg-neuro-600 hover:bg-neuro-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 flex items-center justify-center gap-2"
            >
              Explore Research <i className="fa-solid fa-microscope text-sm"></i>
            </a>
            <a
              href="#team"
              className="px-8 py-3.5 bg-neuro-600 hover:bg-neuro-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 flex items-center justify-center gap-2"
            >
              Meet the Team <i className="fa-solid fa-users text-sm"></i>
            </a>
            <a
              href="#publications"
              className="px-8 py-3.5 bg-neuro-600 hover:bg-neuro-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 flex items-center justify-center gap-2"
            >
              View Publications <i className="fa-solid fa-book-open text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Hidden after scroll */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <a href="#bio" className="text-white/50 hover:text-white transition-colors">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;