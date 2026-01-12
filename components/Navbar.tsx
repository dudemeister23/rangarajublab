import React, { useState, useEffect } from 'react';
import { NAV_LINKS, LAB_LOGO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-slate-900/20 backdrop-blur-sm py-5 border-b border-white/10'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="h-16 w-auto flex items-center justify-center transition-all duration-300">
            <img
              src={LAB_LOGO}
              alt="Rangaraju Lab Logo"
              className="h-16 w-auto object-contain drop-shadow-sm"
            />
          </div>
          <span className={`text-[32px] font-bold font-serif tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Rangaraju Lab
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-lg font-medium transition-colors hover:text-neuro-500 ${isScrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid fa-bars text-xl ${isScrolled ? 'text-slate-800' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
          <div className="flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-6 py-3 text-xl text-slate-700 hover:bg-slate-50 hover:text-neuro-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;