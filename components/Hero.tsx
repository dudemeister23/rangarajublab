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
        <div className="relative isolate overflow-hidden animate-fade-in-up w-fit max-w-4xl mx-auto rounded-[2.5rem] border border-white/25 bg-slate-950/25 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.20),inset_0_-1px_0_rgba(255,255,255,0.06)] ring-1 ring-inset ring-white/10 backdrop-blur-md backdrop-saturate-125 md:p-12">
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/[0.02] to-neuro-950/15"></span>
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent"></span>
          <span aria-hidden="true" className="pointer-events-none absolute -left-28 -top-20 h-80 w-44 -rotate-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent blur-sm"></span>
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-24 bottom-0 h-px bg-gradient-to-r from-transparent via-neuro-200/25 to-transparent"></span>

          <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight drop-shadow-md">
            <span className="text-[0.88em]">Cracking</span> <br />
            <span className="inline-block leading-none align-baseline">
              <span className="sr-only">Brain Energetics</span>
              <svg
                viewBox="0 0 1100 160"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ height: '1em', width: 'auto' }}
              >
                <text
                  x="550"
                  y="128"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontWeight="700"
                  fontSize="140"
                  letterSpacing="-3"
                >
                  <tspan fill="#f6b91a">Brain</tspan>
                  <tspan fill="#159b91"> Energetics</tspan>
                </text>
              </svg>
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-100 mb-10 leading-relaxed font-semibold drop-shadow">
            We investigate how neurons manage their complex energy landscapes to fuel biological processes, plasticity, and health.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
            <a
              href="#research"
              className="w-full sm:w-[220px] px-8 py-3.5 bg-neuro-600 hover:bg-neuro-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 flex items-center justify-center gap-2"
            >
              Explore Research <i className="fa-solid fa-microscope text-sm"></i>
            </a>
            <a
              href="#trainee-voices"
              className="w-full sm:w-[220px] px-8 py-3.5 bg-neuro-600 hover:bg-neuro-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 flex items-center justify-center gap-2"
            >
              Meet the Team <i className="fa-solid fa-users text-sm"></i>
            </a>
            <a
              href="#publications"
              className="w-full sm:w-[220px] px-8 py-3.5 bg-neuro-600 hover:bg-neuro-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 flex items-center justify-center gap-2"
            >
              View Publications <i className="fa-solid fa-book-open text-sm"></i>
            </a>
          </div>
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
