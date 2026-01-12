import React from 'react';
import { LAB_LOGO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Lab Brand */}
        <div className="flex items-center justify-center gap-6">
          <div className="h-14 w-auto flex items-center justify-center">
            <img
              src={LAB_LOGO}
              alt="The Rangaraju Lab"
              className="h-full w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://fav.farm/🧠'; // Fun fallback
              }}
            />
          </div>
          <div className="flex flex-col items-start border-l border-slate-800 pl-5 text-left">
            <span className="text-white font-bold font-sans tracking-tight text-xl">The Rangaraju Lab</span>
            <span className="text-xs uppercase tracking-[0.2em] text-neuro-500 font-semibold">Neuroenergetics</span>
          </div>
        </div>

        {/* Website Credit - Equidistant between logo above and copyright below */}
        <div className="mt-5 mb-5 text-center">
          <div className="text-base text-slate-500">
            Website created by <a href="https://fabianbresan.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-neuro-400 underline underline-offset-4 decoration-slate-700 hover:decoration-neuro-400 transition-all">Fabian Bresan</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-center pt-5 text-center">
          <div className="text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} The Rangaraju Lab. Investigating neuroenergetics.
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;