import React, { useState } from 'react';
import { MEDIA_ITEMS } from '../constants';
import type { MediaItem } from '../types';

const SpotifyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.421-1.02.599-1.56.3z" />
    </svg>
);

const MediaCard: React.FC<{ item: MediaItem }> = ({ item }) => {
    const [played, setPlayed] = useState(false);
    const useFacade = !!(item.youtubeId && item.poster && !played);

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="aspect-video w-full bg-black relative">
                {item.videoUrl ? (
                    <video
                        controls
                        poster={item.poster}
                        preload={item.poster ? 'none' : 'metadata'}
                        className="absolute inset-0 w-full h-full"
                    >
                        <source src={item.videoUrl} type="video/mp4" />
                    </video>
                ) : useFacade ? (
                    <button
                        type="button"
                        onClick={() => setPlayed(true)}
                        aria-label={`Play ${item.title}`}
                        className="absolute inset-0 w-full h-full group/play focus:outline-none focus-visible:ring-4 focus-visible:ring-neuro-400"
                    >
                        <img
                            src={item.poster}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                        <span className="absolute inset-0 flex items-center justify-center">
                            <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/60 group-hover/play:bg-black/80 transition-colors backdrop-blur-sm shadow-lg">
                                <svg viewBox="0 0 24 24" fill="white" aria-hidden="true" className="w-7 h-7 md:w-9 md:h-9 ml-1">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </span>
                        </span>
                    </button>
                ) : (
                    <iframe
                        src={`https://www.youtube.com/embed/${item.youtubeId}${played ? '?autoplay=1' : ''}`}
                        title={item.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-neuro-600 transition-colors leading-tight">
                    {item.title}
                </h3>
                {item.spotifyUrl && (
                    <a
                        href={item.spotifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-white text-sm font-semibold transition-colors"
                    >
                        <SpotifyIcon className="w-4 h-4" />
                        Listen on Spotify
                    </a>
                )}
            </div>
        </div>
    );
};

const Media: React.FC = () => {
    return (
        <section id="media" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Media</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {MEDIA_ITEMS.map((item) => (
                        <MediaCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Media;
