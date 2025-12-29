import React from 'react';
import { HERO_BACKGROUND } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BACKGROUND}
          alt="Neural Network Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-neuro-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-neuro-100 uppercase bg-neuro-600/30 rounded-full border border-neuro-500/50 backdrop-blur-sm">
            Max Planck Florida Institute for Neuroscience
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Deciphering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neuro-100 to-teal-300">
              Neuroenergetics
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Investigating how neurons manage their complex energy landscapes to fuel biological processes, plasticity, and health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#research"
              className="px-8 py-3.5 bg-neuro-600 hover:bg-neuro-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 flex items-center justify-center gap-2"
            >
              Explore Research <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
            <a
              href="#publications"
              className="px-8 py-3.5 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              View Publications
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#bio" className="text-white/50 hover:text-white transition-colors">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;