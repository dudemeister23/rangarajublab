import React, { useState } from 'react';
import { ALUMNI_DATA, AWARDS } from '../constants';

const Alumni: React.FC = () => {
    const [selectedAlumni, setSelectedAlumni] = useState<typeof ALUMNI_DATA[0]['members'][0] | null>(null);

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
                                    return (
                                        <div
                                            key={member.id}
                                            onClick={() => hasAwards && setSelectedAlumni(member)}
                                            className={`group p-5 bg-white border border-slate-100 rounded-xl hover:border-neuro-200 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 flex gap-5 ${hasAwards ? 'cursor-pointer' : 'cursor-default'}`}
                                        >
                                            <div className="relative w-24 h-24 flex-shrink-0">
                                                <div className="w-full h-full rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-neuro-50 group-hover:text-neuro-500 transition-colors overflow-hidden border border-slate-100 shadow-sm">
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

                                                {/* Award Icon Overlay */}
                                                {hasAwards && (
                                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-neuro-600 rounded-full flex items-center justify-center shadow-md z-10">
                                                        <i className="fa-solid fa-trophy text-[10px] text-white"></i>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-col justify-center flex-grow py-1 min-w-0">
                                                <h5 className="text-xl font-bold text-slate-900 group-hover:text-neuro-700 transition-colors leading-tight mb-1.5 truncate">{member.name}</h5>
                                                <div className="space-y-1.5">
                                                    {member.labRole && (
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-4 h-4 rounded-full bg-neuro-100 flex items-center justify-center flex-shrink-0">
                                                                <i className="fa-solid fa-flask text-[8px] text-neuro-600"></i>
                                                            </div>
                                                            <p className="text-[11px] text-neuro-600 font-bold uppercase tracking-wider leading-none truncate">{member.labRole}</p>
                                                        </div>
                                                    )}
                                                    {member.details && (
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-4 h-4 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                                                                <i className="fa-solid fa-location-dot text-[8px] text-slate-500"></i>
                                                            </div>
                                                            <p className="text-xs text-slate-600 font-medium leading-tight truncate">{member.details}</p>
                                                        </div>
                                                    )}
                                                    {member.email && (
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-4 h-4 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                                                                <i className="fa-solid fa-envelope text-[8px] text-slate-500"></i>
                                                            </div>
                                                            <a href={`mailto:${member.email}`} className="text-xs text-slate-600 font-medium leading-tight hover:text-neuro-600 transition-colors truncate block">
                                                                {member.email}
                                                            </a>
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

            {/* Awards Modal */}
            {selectedAlumni && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedAlumni(null)}>
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
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
                                    <p className="text-xs font-bold text-neuro-600 uppercase tracking-wider">Awards & Honors</p>
                                </div>
                            </div>
                            <button onClick={() => setSelectedAlumni(null)} className="w-8 h-8 rounded-full bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-600 flex items-center justify-center transition-colors">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                            <div className="space-y-3">
                                {selectedAlumni.awardIds?.map(aid => AWARDS.find(a => a.id === aid)).filter(Boolean).map((award, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-xl border border-neuro-100 hover:border-neuro-300 hover:shadow-md transition-all">
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
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Alumni;
