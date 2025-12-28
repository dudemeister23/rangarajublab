import React from 'react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  
  // Helper to bold specific author name
  const formatCitation = (text: string) => {
    // Regex to find Rangaraju, V. or V. Rangaraju and bold it
    // Using a simpler approach for React rendering: split string parts
    const parts = text.split(/(Rangaraju, V\.|V\. Rangaraju)/g);
    return (
      <span>
        {parts.map((part, i) => 
          part.match(/(Rangaraju, V\.|V\. Rangaraju)/) ? <strong key={i} className="text-slate-900 font-bold underline decoration-neuro-500 decoration-2 underline-offset-2">{part}</strong> : part
        )}
      </span>
    );
  };

  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-4">
           <div>
             <span className="text-neuro-600 font-bold tracking-wider uppercase text-sm">Scientific Output</span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Selected Publications</h2>
           </div>
           <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center text-sm font-semibold text-slate-500 hover:text-neuro-600 transition-colors mt-4 md:mt-0">
             View Google Scholar <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
           </a>
        </div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-neuro-200 transition-colors">
              <div className="flex flex-col sm:flex-row gap-4">
                 <div className="sm:w-16 flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-neuro-50 text-neuro-700 text-sm font-bold rounded">
                        {pub.year}
                    </span>
                 </div>
                 <div>
                    <p className="text-slate-700 leading-relaxed">
                        {formatCitation(pub.citation)}
                    </p>
                    <div className="mt-2">
                        <a href={pub.link} className="text-xs font-bold text-slate-400 hover:text-neuro-600 uppercase tracking-wide">
                            <i className="fa-solid fa-link mr-1"></i> Link to Paper
                        </a>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
         <div className="mt-8 md:hidden text-center">
             <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-neuro-600">
             View all on Google Scholar
           </a>
         </div>
      </div>
    </section>
  );
};

export default Publications;