import React, { useState } from 'react';
import { TEAM_MEMBERS, TEAM_REEL, PUBLICATIONS, PREPRINTS } from '../constants';

const Team: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  const [lockedMemberId, setLockedMemberId] = useState<string | null>('t5');

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === TEAM_REEL.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? TEAM_REEL.length - 1 : prev - 1));
  };

  const activeMemberId = lockedMemberId || hoveredMemberId;

  const handleMemberClick = (id: string) => {
    if (['t1', 't2', 't6', 't8', 't9'].includes(id)) return; // Disable interaction for specific members
    // Toggle lock if clicking the same one, otherwise set new lock
    setLockedMemberId(prev => prev === id ? null : id);
  };

  const handleMouseEnter = (id: string) => {
    if (['t1', 't2', 't6', 't8', 't9'].includes(id)) return;
    setHoveredMemberId(id);
  };

  return (
    <section id="team" className="pt-20 pb-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-neuro-600 font-bold tracking-wider uppercase text-sm">Our People</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">The Lab Team</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 max-w-7xl mx-auto items-start">
          {/* Team Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {TEAM_MEMBERS.map((member) => {
              const isActive = activeMemberId === member.id;
              const isLocked = lockedMemberId === member.id;
              const isDisabled = ['t1', 't2', 't6', 't8', 't9'].includes(member.id);

              return (
                <div
                  key={member.id}
                  className={`flex flex-col items-center text-center group relative ${isDisabled ? 'cursor-default' : 'cursor-pointer'}`}
                  onMouseEnter={() => handleMouseEnter(member.id)}
                  onMouseLeave={() => setHoveredMemberId(null)}
                  onClick={() => handleMemberClick(member.id)}
                >
                  <div className={`relative mb-4 w-32 h-32 md:w-36 md:h-36 transition-transform duration-300 ${isActive ? 'scale-105' : ''}`}>
                    <div className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${isLocked ? 'border-neuro-600' : (member.publicationIds?.length && !isDisabled ? 'border-neuro-400 group-hover:border-neuro-600' : 'border-neuro-100 group-hover:border-neuro-300')}`}></div>

                    {/* Visual Indicator for Publications - Permanent if has pubs */}
                    {member.publicationIds && member.publicationIds.length > 0 && !isDisabled && (
                      <div className={`absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg z-10 transition-transform duration-300 scale-100 ${isLocked ? 'bg-neuro-700' : 'bg-neuro-600'}`}>
                        <i className={`fa-solid ${isLocked ? 'fa-arrow-right' : 'fa-book-open'} text-xs`}></i>
                      </div>
                    )}

                    <img
                      src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f0fdfa&color=0d9488&size=256`}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover p-1"
                    />
                  </div>
                  <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-neuro-700' : 'text-slate-900'}`}>{member.name}</h3>
                  <p className="text-sm text-neuro-600 font-medium">{member.role}</p>
                </div>
              );
            })}
          </div>

          {/* Publications Panel (Right Side on Desktop, Hidden on Mobile/Stacked?) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 min-h-[500px] shadow-inner relative overflow-hidden">
              {activeMemberId ? (
                (() => {
                  const member = TEAM_MEMBERS.find(m => m.id === activeMemberId);
                  const memberPubs = member?.publicationIds?.map(pid =>
                    [...PUBLICATIONS, ...PREPRINTS].find(p => p.id === pid)
                  ).filter(Boolean);

                  if (memberPubs && memberPubs.length > 0) {
                    return (
                      <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img src={member?.image} alt={member?.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900">{member?.name}'s Contributions</h4>
                            <p className="text-xs text-neuro-600 font-bold uppercase tracking-wider">{memberPubs.length} {memberPubs.length === 1 ? 'Publication' : 'Publications'}</p>
                          </div>
                        </div>

                        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                          {memberPubs.map((pub, idx) => (
                            <a
                              key={idx}
                              href={pub?.link}
                              target="_blank"
                              rel="noreferrer"
                              className="block bg-white p-4 rounded-xl border border-slate-200 hover:border-neuro-300 hover:shadow-md transition-all group/pub"
                            >
                              <div className="flex gap-3">
                                {pub?.coverImage && (
                                  <div className="w-12 h-16 bg-slate-100 rounded flex-shrink-0 overflow-hidden border border-slate-100 p-1">
                                    <img src={pub.coverImage} className="w-full h-full object-contain" alt="" />
                                  </div>
                                )}
                                <div>
                                  <span className="text-[10px] font-bold text-neuro-500 uppercase">{pub?.year}</span>
                                  <h5 className="text-sm font-bold text-slate-800 leading-tight mb-1 group-hover/pub:text-neuro-700">{pub?.title}</h5>
                                  <p className="text-[10px] text-slate-500 line-clamp-2">{pub?.citation}</p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 opacity-60">
                        <i className="fa-solid fa-user text-4xl mb-4"></i>
                        <p className="text-sm font-medium">No linked publications found for {member?.name}</p>
                      </div>
                    );
                  }
                })()
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 opacity-60">
                  <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <i className="fa-solid fa-book-open-reader text-3xl text-slate-400"></i>
                  </div>
                  <h4 className="font-bold text-slate-600 text-lg mb-2">Explore Our Research</h4>
                  <p className="text-sm max-w-[250px]">Click or hover over a team member to see their specific contributions and publications.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Join Lab Button */}
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-neuro-600 text-white font-bold rounded-xl shadow-lg shadow-neuro-200 hover:bg-neuro-700 hover:-translate-y-0.5 transition-all duration-300">
            Join Our Lab <i className="fa-solid fa-paper-plane text-xs"></i>
          </a>
        </div>

        {/* Full Team Photo Gallery Section */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Life at The Rangaraju Lab</h3>
            <p className="text-slate-500 mt-2">Connecting science, community, and innovation</p>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-neuro-600 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-100 aspect-[4/3] md:aspect-[3/2]">
              {/* Slides */}
              <div className="w-full h-full relative">
                {TEAM_REEL.map((photo, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIdx ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img
                      src={photo.url}
                      alt={`Lab photo ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=2000';
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all z-10 opacity-0 group-hover:opacity-100"
              >
                <i className="fa-solid fa-chevron-left text-xl"></i>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all z-10 opacity-0 group-hover:opacity-100"
              >
                <i className="fa-solid fa-chevron-right text-xl"></i>
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {TEAM_REEL.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIdx(index)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIdx ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;