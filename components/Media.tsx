import React from 'react';
import { MEDIA_ITEMS } from '../constants';

const Media: React.FC = () => {
    return (
        <section id="media" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Media</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {MEDIA_ITEMS.map((item) => (
                        <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
                            <div className="aspect-video w-full bg-black relative">
                                <iframe
                                    src={`https://www.youtube.com/embed/${item.youtubeId}`}
                                    title={item.title}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-neuro-600 transition-colors leading-tight">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Media;
