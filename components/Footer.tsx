import React from 'react';
import { LAB_LOGO, MPFI_LOGO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-10 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8 text-center md:text-left">

          {/* Lab Brand */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border border-slate-800 p-1">
              <img
                src={LAB_LOGO}
                alt="The Rangaraju Lab"
                className="w-full h-full object-contain"
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

          {/* MPFI Brand - Directly Clickable Image */}
          <a
            href="https://mpfi.org"
            target="_blank"
            rel="noreferrer"
            className="group relative transition-all duration-500 flex items-center p-4 rounded-full"
          >
            {/* Hover Ring/Glow Effect */}
            <div className="absolute inset-0 rounded-full border border-neuro-500/0 group-hover:border-neuro-500/30 group-hover:bg-neuro-500/5 transition-all duration-500 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100"></div>

            <img
              src={MPFI_LOGO}
              alt="Max Planck Florida Institute"
              className="h-20 w-auto opacity-100 transition-all duration-500 relative z-10"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://mpfi.org/wp-content/themes/mpfi-child-2023/assets/img/logo-white.svg';
              }}
            />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-900 gap-8">
          <div className="text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} The Rangaraju Lab. Investigating neuroenergetics.
          </div>

          <div className="flex gap-10 text-sm">
            <a href="#" className="hover:text-neuro-400 transition-colors uppercase tracking-widest text-[10px] font-bold">Privacy</a>
            <a href="#contact" className="hover:text-neuro-400 transition-colors uppercase tracking-widest text-[10px] font-bold">Contact</a>
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