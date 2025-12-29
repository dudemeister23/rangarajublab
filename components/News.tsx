import React, { useState } from 'react';
import { NEWS_ITEMS } from '../constants';

const News: React.FC = () => {
    const [selectedNews, setSelectedNews] = useState<string | null>(null);

    const activeNews = NEWS_ITEMS.find(item => item.id === selectedNews);

    const closeModal = () => setSelectedNews(null);

    return (
        <section id="news" className="pt-24 pb-16 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 text-center">
                    <span className="text-neuro-600 font-bold tracking-wider uppercase text-sm">Latest Updates</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">News & Events</h2>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {NEWS_ITEMS.map((item) => (
                        <article
                            key={item.id}
                            onClick={() => setSelectedNews(item.id)}
                            className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-neuro-200 hover:scale-[1.03] group"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-0.5 bg-neuro-50 text-neuro-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                        {item.category || 'News'}
                                    </span>
                                    <time dateTime={new Date(item.date).toISOString().split('T')[0]} className="text-[10px] text-slate-400 font-medium">
                                        {item.date}
                                    </time>
                                </div>
                                <h3 className="font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-neuro-600 transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            {activeNews && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header Image */}
                        <div className="relative bg-slate-900">
                            <img
                                src={activeNews.image}
                                alt={activeNews.title}
                                className="w-full max-h-80 object-contain"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 transition-colors shadow-lg"
                                aria-label="Close modal"
                            >
                                <i className="fa-solid fa-xmark text-lg"></i>
                            </button>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-neuro-600 text-white text-xs font-bold rounded-full">
                                        {activeNews.category || 'News'}
                                    </span>
                                    <time dateTime={new Date(activeNews.date).toISOString().split('T')[0]} className="text-white/80 text-sm font-medium">
                                        {activeNews.date}
                                    </time>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    {activeNews.title}
                                </h2>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 md:p-8 max-h-[50vh] overflow-y-auto">
                            {activeNews.audioUrl && (
                                <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 bg-neuro-100 rounded-full flex items-center justify-center text-neuro-600">
                                            <i className="fa-solid fa-volume-high text-sm"></i>
                                        </div>
                                        <span className="text-sm font-bold text-slate-900">Audio Podcast</span>
                                    </div>
                                    <audio controls className="w-full h-10">
                                        <source src={activeNews.audioUrl} type="audio/mpeg" />
                                    </audio>
                                </div>
                            )}

                            <div className="prose prose-slate max-w-none">
                                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap">
                                    {activeNews.content}
                                </p>
                            </div>

                            {activeNews.externalLink && (
                                <div className="mt-8">
                                    <a
                                        href={activeNews.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-neuro-600 hover:bg-neuro-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Read Full Story
                                        <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default News;
