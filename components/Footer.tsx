import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-neuro-600">
             <i className="fa-solid fa-bolt text-xs"></i>
          </div>
          <span className="text-slate-300 font-semibold tracking-tight">Rangaraju Lab</span>
        </div>

        <div className="text-sm">
          &copy; {new Date().getFullYear()} The Rangaraju Lab. All rights reserved.
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Max Planck Florida</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;