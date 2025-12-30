import React from 'react';
import { LAB_LOGO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-10 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center gap-8 mb-8 text-center">

          {/* Lab Brand */}
          <div className="flex items-center justify-center gap-6">
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
            <div className="flex flex-col items-start border-l border-slate-800 pl-5 text-left">
              <span className="text-white font-bold tracking-tight text-xl">The Rangaraju Lab</span>
              <span className="text-xs uppercase tracking-[0.2em] text-neuro-500 font-semibold">Neuroenergetics</span>
            </div>
          </div>

          {/* Partner Logos */}

        </div>

        <div className="flex flex-col items-center justify-center pt-6 border-t border-slate-900 gap-6 text-center">
          <div className="text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} The Rangaraju Lab. Investigating neuroenergetics.
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;