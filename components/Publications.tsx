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

  // Determine font size based on citation length
  const getCitationClass = (text: string) => {
    // Thresholds relaxed to prioritize readability while fitting the card
    if (text.length > 550) return "text-xs leading-snug"; // 12px
    if (text.length > 400) return "text-[13px] leading-snug"; // 13px
    return "text-sm leading-relaxed"; // 14px
  };

  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Preprints Section */}
        <div className="mb-20">
          <div className="relative flex justify-center items-center mb-12 border-b border-slate-200 pb-4">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mt-1">Preprints</h3>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PREPRINTS.map(preprint => (
              <a
                key={preprint.id}
                href={preprint.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-8 rounded-3xl border-2 border-slate-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col group text-left"
              >
                {/* Top: Logo */}
                <div className="flex items-center gap-3 mb-5">
                  <img src={preprint.coverImage} alt={`${preprint.title} preprint source`} className="h-10 w-auto object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" loading="lazy" />
                  <span className="text-xs font-semibold text-slate-900 uppercase tracking-wide ml-auto">{preprint.year}</span>
                </div>
                {/* Middle: Title + Citation */}
                <div className="flex-grow min-h-0 overflow-hidden">
                  <h4 className="text-base font-bold text-slate-800 leading-snug mb-3 group-hover:text-neuro-600 transition-colors">
                    {preprint.title}
                  </h4>
                  <p className="text-sm text-slate-500 italic leading-relaxed">
                    {formatCitation(preprint.citation)}
                  </p>
                </div>
                {/* Bottom: Button */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div
                    className="inline-flex items-center px-4 py-2 bg-neuro-600 text-white text-xs font-bold rounded-full shadow-neuro-200 shadow-lg group-hover:bg-neuro-700 group-hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    Read Article
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-center mb-12 border-b border-slate-200 pb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Publications</h2>
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
            <a href="https://scholar.google.com/citations?hl=en&user=uudWngwAAAAJ" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-2.5 bg-neuro-600 text-white text-sm font-bold rounded-full shadow-neuro-200 shadow-lg hover:bg-neuro-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
              View Google Scholar <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PUBLICATIONS.map((pub) => (
            <a
              key={pub.id}
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-200 hover:scale-[1.02] transition-all duration-300 group flex flex-col h-full relative"
              itemScope
              itemType="https://schema.org/ScholarlyArticle"
            >
              <meta itemProp="datePublished" content={pub.year.toString()} />
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Magazine Cover / Figure Preview */}
                <div
                  className="w-full sm:w-48 flex-shrink-0 block mx-auto sm:mx-0"
                >
                  <div className="relative aspect-[3/4] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group-hover:shadow-lg transition-all duration-500">
                    {pub.coverImage ? (
                      <img
                        src={pub.coverImage}
                        alt={`Journal cover for ${pub.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        itemProp="image"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-200 bg-slate-50">
                        <i className="fa-solid fa-book-open text-5xl"></i>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block px-3 py-1 bg-neuro-600 text-white text-xs font-bold rounded-full shadow-lg">
                        {pub.year}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Publication Details */}
                <div className="flex-grow flex flex-col sm:h-64">
                  <div className="flex-1 min-h-0">
                    <div className="block group/link">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover/link:text-neuro-600 transition-colors" itemProp="headline">
                        {pub.title}
                      </h3>
                    </div>
                    <div className={`text-slate-600 mb-4 ${getCitationClass(pub.citation)}`} itemProp="description">
                      {formatCitation(pub.citation)}
                    </div>
                  </div>

                  {pub.link && pub.link !== '#' && (
                    <div className="flex flex-wrap gap-3 mt-auto pt-4">
                      <div
                        className="inline-flex items-center px-4 py-2 bg-neuro-600 text-white text-xs font-bold rounded-full shadow-neuro-200 shadow-lg hover:bg-neuro-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group/btn"
                      >
                        Read Article

                      </div>
                    </div>
                  )}
                </div>
              </div>


            </a>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <a href="https://scholar.google.com/citations?hl=en&user=uudWngwAAAAJ" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-neuro-600 text-white font-bold rounded-full shadow-neuro-200 shadow-lg hover:bg-neuro-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
            View Google Scholar <i className="fa-solid fa-arrow-up-right-from-square ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
          </a>
        </div>
      </div>
    </section >
  );
};

export default Publications;