import React, { useState } from 'react';
import { NEWS_ITEMS } from '../constants';

const News: React.FC = () => {
    const [activeNewsId, setActiveNewsId] = useState(NEWS_ITEMS[0].id);

    const activeNews = NEWS_ITEMS.find(item => item.id === activeNewsId) || NEWS_ITEMS[0];

    return (
        <section id="news" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <span className="text-neuro-600 font-bold tracking-wider uppercase text-sm">Latest Updates</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">News & Events</h2>
                </div>

                {/* Desktop View: Split Screen */}
                <div className="hidden lg:grid grid-cols-12 gap-12 items-start h-[700px]">
                    {/* Left Side: Scrollable List with Thumbnails */}
                    <div className="col-span-4 h-full overflow-y-auto pr-6 space-y-4 custom-scrollbar">
                        {NEWS_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveNewsId(item.id)}
                                className={`w-full text-left p-4 rounded-2xl transition-all duration-500 border flex items-center gap-5 ${activeNewsId === item.id
                                    ? 'bg-neuro-50 border-neuro-200 shadow-sm'
                                    : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-100'
                                    }`}
                            >
                                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-slate-100 bg-white">
                                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <span className="text-[10px] font-bold text-neuro-600 uppercase tracking-widest mb-1 block">
                                        {item.category || 'News'}
                                    </span>
                                    <h3 className={`font-bold text-sm mb-1 leading-tight line-clamp-2 ${activeNewsId === item.id ? 'text-slate-900' : 'text-slate-700'}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-[10px] text-slate-400 font-medium">{item.date}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Side: Detail View */}
                    <div className="col-span-8 h-full bg-slate-50 rounded-[2.5rem] relative overflow-hidden group">
                        {/* Background Overlay Image (Fixed) */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={activeNews.image}
                                alt=""
                                className="w-full h-full object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-700"
                            />
                        </div>

                        {/* Scrollable Content Container */}
                        <div className="relative z-10 h-full overflow-y-auto custom-scrollbar p-10 pr-6">
                            <div className="max-w-none">
                                {/* Featured Image - Frame wraps image tightly */}
                                <div className="w-fit mx-auto rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-white bg-white transform transition-transform duration-700 hover:scale-[1.01]">
                                    <img
                                        src={activeNews.image}
                                        alt={activeNews.title}
                                        className="h-auto max-h-[600px] w-auto block"
                                    />
                                </div>

                                {/* Content Details */}
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-4 py-1.5 bg-neuro-600 text-white text-xs font-bold rounded-full shadow-lg shadow-neuro-200">
                                        {activeNews.category || 'News'}
                                    </span>
                                    <span className="text-slate-400 font-semibold text-sm">{activeNews.date}</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                                    {activeNews.title}
                                </h2>

                                {activeNews.audioUrl && (
                                    <div className="mb-10 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-10 h-10 bg-neuro-100 rounded-full flex items-center justify-center text-neuro-600">
                                                <i className="fa-solid fa-volume-high"></i>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900">Audio Preview</p>
                                                <p className="text-xs text-slate-500">Listen to the WiN podcast with Vidhya Rangaraju</p>
                                            </div>
                                        </div>
                                        <audio controls className="w-full">
                                            <source src={activeNews.audioUrl} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                )}

                                <div className="prose prose-slate max-w-none">
                                    <div className="text-slate-600 text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                                        <span className="text-6xl font-bold text-neuro-600 mr-4 float-left mt-1 leading-[0.8] mb-1">
                                            {activeNews.content.charAt(0)}
                                        </span>
                                        {activeNews.content.slice(1)}
                                    </div>

                                    {activeNews.externalLink && (
                                        <div className="mt-10">
                                            <a
                                                href={activeNews.externalLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-8 py-4 bg-neuro-600 hover:bg-neuro-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-neuro-200 hover:shadow-xl hover:-translate-y-1"
                                            >
                                                <span>Read Full Story</span>
                                                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                                            </a>
                                        </div>
                                    )}

                                    <div className="h-20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet View: Expandable List */}
                <div className="lg:hidden space-y-6">
                    {NEWS_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className={`rounded-3xl border transition-all duration-500 overflow-hidden ${activeNewsId === item.id
                                ? 'bg-white border-neuro-100 shadow-xl'
                                : 'bg-slate-50 border-transparent'
                                }`}
                        >
                            <button
                                onClick={() => setActiveNewsId(activeNewsId === item.id ? '' : item.id)}
                                className="w-full text-left p-6 flex gap-5 items-center"
                            >
                                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-slate-100 bg-white">
                                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <span className="text-[10px] font-bold text-neuro-600 uppercase tracking-[0.2em] mb-1 block">
                                        {item.category || 'News'}
                                    </span>
                                    <h3 className="font-bold text-lg text-slate-900 leading-tight line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-[10px] text-slate-400 mt-1 font-medium">{item.date}</p>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 flex-shrink-0 ${activeNewsId === item.id ? 'bg-neuro-600 text-white rotate-180' : 'bg-white text-slate-400'
                                    }`}>
                                    <i className="fa-solid fa-chevron-down text-xs"></i>
                                </div>
                            </button>

                            <div className={`transition-all duration-500 ease-in-out ${activeNewsId === item.id ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-6 pb-10">
                                    <div className="w-fit mx-auto rounded-2xl overflow-hidden mb-8 shadow-lg bg-white border border-slate-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-auto max-h-[500px] w-auto block mx-auto"
                                        />
                                    </div>

                                    {item.audioUrl && (
                                        <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="flex items-center gap-3 mb-4">
                                                <i className="fa-solid fa-volume-high text-neuro-600"></i>
                                                <span className="text-sm font-bold text-slate-900">Audio Podcast</span>
                                            </div>
                                            <audio controls className="w-full h-10">
                                                <source src={item.audioUrl} type="audio/mpeg" />
                                            </audio>
                                        </div>
                                    )}

                                    <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-wrap">
                                        {item.content}
                                    </p>

                                    {item.externalLink && (
                                        <div className="mt-8">
                                            <a
                                                href={item.externalLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-neuro-600 text-white font-bold rounded-xl text-sm transition-all"
                                            >
                                                <span>Read Full Story</span>
                                                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0891b2; /* neuro-600 */
          border-radius: 10px;
          border: 2px solid #f1f5f9;
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0e7490; /* neuro-700 */
        }
      `}</style>
        </section>
    );
};

export default News;
