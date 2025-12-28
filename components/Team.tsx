import React, { useState } from 'react';
import { TEAM_MEMBERS, TEAM_REEL } from '../constants';

const Team: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === TEAM_REEL.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? TEAM_REEL.length - 1 : prev - 1));
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-neuro-600 font-bold tracking-wider uppercase text-sm">Our People</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">The Lab Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-20">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center group">
              <div className="relative mb-4 w-32 h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 rounded-full border-2 border-neuro-100 group-hover:border-neuro-500 transition-colors duration-300"></div>
                <img
                  src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f0fdfa&color=0d9488&size=256`}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover p-1"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
              <p className="text-sm text-neuro-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Full Team Photo Gallery Section */}
        <div className="mt-20 pt-20 border-t border-slate-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Life at The Rangaraju Lab</h3>
            <p className="text-slate-500 mt-2">Connecting science, community, and innovation</p>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-neuro-600 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-100 aspect-[4/3] md:aspect-[3/2]">
              {/* Slides */}
              <div className="w-full h-full relative">
                {TEAM_REEL.map((photo, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIdx ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img
                      src={photo.url}
                      alt={`Lab photo ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=2000';
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all z-10 opacity-0 group-hover:opacity-100"
              >
                <i className="fa-solid fa-chevron-left text-xl"></i>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all z-10 opacity-0 group-hover:opacity-100"
              >
                <i className="fa-solid fa-chevron-right text-xl"></i>
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {TEAM_REEL.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIdx(index)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIdx ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-neuro-600 text-white font-bold rounded-xl shadow-lg shadow-neuro-200 hover:bg-neuro-700 hover:-translate-y-0.5 transition-all duration-300">
            Join the Lab <i className="fa-solid fa-paper-plane text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;