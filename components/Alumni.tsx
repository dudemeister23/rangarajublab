import React from 'react';
import { ALUMNI_DATA } from '../constants';

const Alumni: React.FC = () => {
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
                                {group.members.map((member) => (
                                    <div
                                        key={member.id}
                                        className="group p-5 bg-white border border-slate-100 rounded-xl hover:border-neuro-200 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 flex gap-5 cursor-default"
                                    >
                                        <div className="w-24 h-24 rounded-xl bg-slate-50 flex flex-shrink-0 items-center justify-center text-slate-400 group-hover:bg-neuro-50 group-hover:text-neuro-500 transition-colors overflow-hidden border border-slate-100 shadow-sm">
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
                                        <div className="flex flex-col justify-center flex-grow py-1">
                                            <h5 className="text-xl font-bold text-slate-900 group-hover:text-neuro-700 transition-colors leading-tight mb-1.5">{member.name}</h5>
                                            <div className="space-y-1.5">
                                                {member.labRole && (
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-4 h-4 rounded-full bg-neuro-100 flex items-center justify-center flex-shrink-0">
                                                            <i className="fa-solid fa-flask text-[8px] text-neuro-600"></i>
                                                        </div>
                                                        <p className="text-[11px] text-neuro-600 font-bold uppercase tracking-wider leading-none">{member.labRole}</p>
                                                    </div>
                                                )}
                                                {member.details && (
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-4 h-4 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                                                            <i className="fa-solid fa-location-dot text-[8px] text-slate-500"></i>
                                                        </div>
                                                        <p className="text-sm text-slate-600 font-medium leading-tight">{member.details}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Alumni;
