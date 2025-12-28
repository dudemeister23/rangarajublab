import React from 'react';
import { PUBLICATIONS, PREPRINTS } from '../constants';

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
        {/* Preprints Section */}
        <div className="mb-20 border-b border-slate-200 pb-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Preprints</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PREPRINTS.map(preprint => (
              <a
                key={preprint.id}
                href={preprint.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-4 rounded-xl border border-slate-100 hover:border-neuro-200 hover:shadow-md transition-all duration-300 flex items-start gap-4 group h-full"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-slate-50 rounded-lg p-1 border border-slate-100 flex items-center justify-center">
                  <img src={preprint.coverImage} alt="Preprint Source" className="w-full h-full object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-xs font-bold text-slate-800 leading-tight mb-1 line-clamp-3 group-hover:text-neuro-600 transition-colors">
                    {preprint.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 line-clamp-2 mt-1 italic">
                    {preprint.citation}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Publications</h2>
          </div>
          <a href="https://scholar.google.com/citations?hl=en&user=uudWngwAAAAJ" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center text-sm font-semibold text-slate-500 hover:text-neuro-600 transition-colors mt-4 md:mt-0">
            View Google Scholar <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-neuro-200 transition-all duration-300 group flex flex-col h-full">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Magazine Cover / Figure Preview */}
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-48 flex-shrink-0 block mx-auto sm:mx-0"
                >
                  <div className="relative aspect-[3/4] bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm group-hover:shadow-lg transition-all duration-500">
                    {pub.coverImage ? (
                      <img
                        src={pub.coverImage}
                        alt={`Cover for ${pub.title}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-200 bg-slate-50">
                        <i className="fa-solid fa-book-open text-5xl"></i>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 bg-neuro-600 text-white text-xs font-bold rounded-lg shadow-lg">
                        {pub.year}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-neuro-900/0 group-hover:bg-neuro-900/10 transition-colors duration-300 flex items-center justify-center">
                      <i className="fa-solid fa-arrow-up-right-from-square text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl"></i>
                    </div>
                  </div>
                </a>

                {/* Publication Details */}
                <div className="flex-grow">
                  <a href={pub.link} target="_blank" rel="noreferrer" className="block group/link">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover/link:text-neuro-600 transition-colors line-clamp-3">
                      {pub.title}
                    </h3>
                  </a>
                  <div className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-4">
                    {formatCitation(pub.citation)}
                  </div>

                  {pub.link && pub.link !== '#' && (
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-neuro-600 text-white text-xs font-bold rounded-lg shadow-neuro-200 shadow-lg hover:bg-neuro-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group/btn"
                      >
                        Read Article
                        <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[10px] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <a href="https://scholar.google.com/citations?hl=en&user=uudWngwAAAAJ" target="_blank" rel="noreferrer" className="text-sm font-semibold text-neuro-600">
            View all on Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;