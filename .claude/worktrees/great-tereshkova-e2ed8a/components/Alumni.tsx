import React, { useState } from 'react';
import { ALUMNI_DATA, AWARDS, PUBLICATIONS, PREPRINTS } from '../constants';

const Alumni: React.FC = () => {
    const [selectedAlumni, setSelectedAlumni] = useState<typeof ALUMNI_DATA[0]['members'][0] | null>(null);
    const [viewMode, setViewMode] = useState<'awards' | 'publications'>('awards');

    // Helper to bold specific author name (borrowed from Publications.tsx)
    const formatCitation = (text: string) => {
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
        <section id="alumni" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Lab Alumni</h3>
                    <p className="text-slate-500 mt-2">Celebrating the current positions and achievements of our former lab members</p>
                </div>

                <div className="space-y-10 max-w-7xl mx-auto">
                    {ALUMNI_DATA.map((group, idx) => (
                        <div key={idx} className="flex flex-col">
                            {/* Horizontal Band Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-2.5 h-2.5 rounded-full bg-neuro-500 flex-shrink-0"></div>
                                <h4 className="text-xs md:text-sm font-bold text-neuro-700 uppercase tracking-[0.15em] whitespace-nowrap">{group.category}</h4>
                                <div className="h-px bg-neuro-100 flex-grow"></div>
                            </div>

                            {/* 4-Column Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.members.map((member) => {
                                    const hasAwards = member.awardIds && member.awardIds.length > 0;
                                    const hasPublications = member.publicationIds && member.publicationIds.length > 0;
                                    const isClickable = hasAwards || hasPublications;

                                    return (
                                        <div
                                            key={member.id}
                                            onClick={() => {
                                                if (hasAwards) {
                                                    setViewMode('awards');
                                                    setSelectedAlumni(member);
                                                } else if (hasPublications) {
                                                    setViewMode('publications');
                                                    setSelectedAlumni(member);
                                                }
                                            }}
                                            className={`group p-5 bg-white border border-slate-100 rounded-3xl hover:border-neuro-200 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 flex gap-5 ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                                        >
                                            <div className="relative w-24 h-24 flex-shrink-0">
                                                <div className="w-full h-full rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-neuro-50 group-hover:text-neuro-500 transition-colors overflow-hidden border border-slate-100 shadow-sm">
                                                    {member.image ? (
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="w-full h-full object-cover scale-105"
                                                            style={{
                                                                objectPosition: member.objectPosition || 'center',
                                                                transform: member.scale ? `scale(${member.scale})` : undefined
                                                            }}
                                                        />
                                                    ) : (
                                                        <i className="fa-solid fa-user-graduate text-4xl"></i>
                                                    )}
                                                </div>

                                                {/* Unified Icons Container - Bottom Center */}
                                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20">
                                                    {/* Email Icon */}
                                                    {member.email && (
                                                        <a
                                                            href={`mailto:${member.email}`}
                                                            className="w-7 h-7 rounded-full bg-neuro-600 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-neuro-700 transition-all duration-200"
                                                            title={`Email ${member.name}`}
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <i className="fa-solid fa-envelope text-xs"></i>
                                                        </a>
                                                    )}

                                                    {/* Publication Icon Button - SAME AS IN TEAM SECTION */}
                                                    {hasPublications && (
                                                        <button
                                                            className={`w-7 h-7 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:scale-110 bg-neuro-600 hover:bg-neuro-700`}
                                                            title={`View ${member.name}'s Publications`}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setViewMode('publications');
                                                                setSelectedAlumni(member);
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-book-open text-[10px]"></i>
                                                        </button>
                                                    )}

                                                    {/* Award Icon Button */}
                                                    {hasAwards && (
                                                        <button
                                                            className="w-7 h-7 rounded-full bg-neuro-600 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-neuro-700 transition-all duration-200"
                                                            title="View Awards & Honors"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setViewMode('awards');
                                                                setSelectedAlumni(member);
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-trophy text-xs"></i>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center flex-grow py-1 min-w-0">
                                                <h5 className="text-xl font-bold text-slate-900 group-hover:text-neuro-700 transition-colors leading-tight mb-1.5 truncate">{member.name}</h5>
                                                <div className="space-y-1.5">
                                                    {member.labRole && (
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                                                                <i className="fa-solid fa-flask text-[8px] text-slate-500"></i>
                                                            </div>
                                                            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider leading-none truncate">{member.labRole}</p>
                                                        </div>
                                                    )}
                                                    {member.details && (
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-4 h-4 rounded-full bg-neuro-100 flex items-center justify-center flex-shrink-0">
                                                                <i className="fa-solid fa-location-dot text-[8px] text-neuro-600"></i>
                                                            </div>
                                                            <p className="text-xs text-neuro-600 font-bold leading-tight truncate">{member.details}</p>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Combined Modal for Awards and Publications */}
            {selectedAlumni && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedAlumni(null)}>
                    <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-neuro-100 flex items-center justify-between bg-neuro-50/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    {selectedAlumni.image ? (
                                        <img src={selectedAlumni.image} alt={selectedAlumni.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-neuro-100 flex items-center justify-center">
                                            <i className="fa-solid fa-user text-neuro-400"></i>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg leading-tight">{selectedAlumni.name}</h4>
                                    <p className="text-xs font-bold text-neuro-600 uppercase tracking-wider">
                                        {viewMode === 'awards' ? 'Awards & Honors' : 'Publications'}
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setSelectedAlumni(null)} className="w-8 h-8 rounded-full bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-600 flex items-center justify-center transition-colors">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        {/* View Switcher if user has both */}
                        {(selectedAlumni.awardIds && selectedAlumni.awardIds.length > 0 && selectedAlumni.publicationIds && selectedAlumni.publicationIds.length > 0) && (
                            <div className="px-6 pt-4">
                                <div className="flex gap-2 p-1 bg-neuro-50 rounded-xl">
                                    <button
                                        onClick={() => setViewMode('awards')}
                                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${viewMode === 'awards' ? 'bg-white text-neuro-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        <i className="fa-solid fa-trophy mr-2"></i> Awards
                                    </button>
                                    <button
                                        onClick={() => setViewMode('publications')}
                                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${viewMode === 'publications' ? 'bg-white text-neuro-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        <i className="fa-solid fa-book-open mr-2"></i> Publications
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">

                            {/* AWARDS VIEW */}
                            {viewMode === 'awards' && (
                                <div className="space-y-3">
                                    {selectedAlumni.awardIds?.map(aid => AWARDS.find(a => a.id === aid)).filter(Boolean).map((award, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-2xl border border-neuro-100 hover:border-neuro-300 hover:shadow-md transition-all">
                                            <div className="flex gap-3 items-center">
                                                <div className="w-10 h-10 bg-neuro-100 rounded-full flex-shrink-0 flex items-center justify-center">
                                                    {award?.type === 'honor' ? (
                                                        <img src="assets/icons/laurel-wreath.png" alt="Honor" className="w-6 h-6 object-contain opacity-80" />
                                                    ) : (
                                                        <i className="fa-solid fa-trophy text-neuro-600"></i>
                                                    )}
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold text-neuro-500 uppercase">
                                                        {award?.date}{award?.endDate ? ` – ${award.endDate}` : ''}
                                                    </span>
                                                    <h5 className="text-sm font-bold text-slate-800 leading-tight mb-1">{award?.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {(!selectedAlumni.awardIds || selectedAlumni.awardIds.length === 0) && (
                                        <p className="text-center text-slate-400 text-sm py-4">No awards listed.</p>
                                    )}
                                </div>
                            )}

                            {/* PUBLICATIONS VIEW */}
                            {viewMode === 'publications' && (
                                <div className="space-y-4">
                                    {selectedAlumni.publicationIds?.map(pid => [...PUBLICATIONS, ...PREPRINTS].find(p => p.id === pid)).filter(Boolean).map((pub, idx) => (
                                        <a
                                            key={idx}
                                            href={pub?.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block bg-white p-4 rounded-2xl border border-slate-200 hover:border-neuro-300 hover:shadow-md transition-all group/pub"
                                        >
                                            <div className="flex gap-3 items-center">
                                                {pub?.coverImage && (
                                                    <div className="w-12 h-16 bg-slate-100 rounded-lg flex-shrink-0 overflow-hidden border border-slate-100 p-1">
                                                        <img src={pub.coverImage} className="w-full h-full object-contain" alt="" />
                                                    </div>
                                                )}
                                                <div>
                                                    <span className="text-[10px] font-bold text-neuro-500 uppercase">{pub?.year}</span>
                                                    <h5 className="text-sm font-bold text-slate-800 leading-tight mb-1 group-hover/pub:text-neuro-700">{pub?.title}</h5>
                                                    <p className="text-[10px] text-slate-500 line-clamp-2 leading-snug">
                                                        {pub?.citation ? formatCitation(pub.citation) : ''}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                    {(!selectedAlumni.publicationIds || selectedAlumni.publicationIds.length === 0) && (
                                        <p className="text-center text-slate-400 text-sm py-4">No publications listed.</p>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Alumni;
