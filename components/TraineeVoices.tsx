import React, { useState } from 'react';

const TraineeVoices: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const youtubeId = 'X5cndm5inOU';
    const videoTitle = 'ALS-linked protein VAP stabilizes mitochondria to support memory formation';
    const traineePerspectiveStart = 91;

    return (
        <section id="trainee-voices" className="relative overflow-hidden bg-slate-950 py-20 text-white">
            <div aria-hidden="true" className="absolute -left-32 top-8 h-80 w-80 rounded-full bg-neuro-600/20 blur-3xl" />
            <div aria-hidden="true" className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="container relative mx-auto px-6 md:px-12">
                <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.35fr] lg:gap-16">
                    <div>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-neuro-300">
                            Trainee perspective
                        </p>
                        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                            Life in the Rangaraju Lab
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                            Hear lab members describe the science they pursue, the mentorship they receive,
                            and what it is like to grow as a researcher on our team.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <img
                                src="assets/team/ojasee-bapat.jpg"
                                alt="Ojasee Bapat"
                                className="h-16 w-16 rounded-full border-2 border-neuro-300/70 object-cover shadow-lg"
                            />
                            <div>
                                <p className="text-lg font-bold text-white">Ojasee Bapat</p>
                                <p className="text-sm font-medium text-slate-400">IMPRS PhD Student</p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
                        <div className="relative aspect-video bg-black">
                            {isPlaying ? (
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&start=${traineePerspectiveStart}`}
                                    title={videoTitle}
                                    className="absolute inset-0 h-full w-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setIsPlaying(true)}
                                    aria-label={`Play ${videoTitle}`}
                                    className="group absolute inset-0 h-full w-full overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-neuro-300"
                                >
                                    <img
                                        src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                    <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/10" />
                                    <span className="absolute inset-0 flex items-center justify-center">
                                        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-neuro-700 shadow-2xl transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
                                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-1.5 h-9 w-9 md:h-11 md:w-11">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span className="absolute bottom-5 left-5 rounded-full bg-black/65 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                                        Watch Ojasee's perspective
                                    </span>
                                </button>
                            )}
                        </div>

                        <div className="px-6 py-5 md:px-8">
                            <p className="text-lg font-bold leading-snug text-white">{videoTitle}</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                Playback begins with Ojasee's perspective on her graduate experience in the lab.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TraineeVoices;
