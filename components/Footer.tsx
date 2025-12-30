import React from 'react';
import { LAB_LOGO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-10 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8 text-center md:text-left">

          {/* Lab Brand */}
          <div className="flex items-center gap-6">
            <div className="h-16 w-auto flex items-center justify-center">
              <img
                src={LAB_LOGO}
                alt="The Rangaraju Lab"
                className="h-full w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://fav.farm/🧠'; // Fun fallback
                }}
              />
            </div>
            <div className="flex flex-col border-l border-slate-800 pl-5">
              <span className="text-white font-bold tracking-tight text-xl">The Rangaraju Lab</span>
              <span className="text-xs uppercase tracking-[0.2em] text-neuro-500 font-semibold">Neuroenergetics</span>
            </div>
          </div>

          {/* Partner Logos */}

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-900 gap-8">
          <div className="text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} The Rangaraju Lab. Investigating neuroenergetics.
          </div>

          <div className="flex gap-10 text-sm">
            <a href="#home" className="text-slate-800 hover:text-neuro-600 transition-colors">
              <i className="fa-solid fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;