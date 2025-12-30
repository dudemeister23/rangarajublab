import React, { useState } from 'react';
import { TEAM_MEMBERS, TEAM_REEL, PUBLICATIONS, PREPRINTS, CONTACT_INFO, AWARDS } from '../constants';

const Team: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  const [lockedMemberId, setLockedMemberId] = useState<string | null>(null);
  const [lockedContentId, setLockedContentId] = useState<string>('');
  const [panelMode, setPanelMode] = useState<'publications' | 'awards' | 'contact'>('publications');

  // Touch state for swipe detection
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === TEAM_REEL.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? TEAM_REEL.length - 1 : prev - 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const activeMemberId = hoveredMemberId || lockedMemberId;

  const hasPublications = (id: string) => {
    const member = TEAM_MEMBERS.find(m => m.id === id);
    return member?.publicationIds && member.publicationIds.length > 0;
  };

  const hasAwards = (id: string) => {
    const member = TEAM_MEMBERS.find(m => m.id === id);
    return member?.awardIds && member.awardIds.length > 0;
  };

  const handleMemberClick = (id: string) => {
    if (hasPublications(id)) {
      // Toggle lock if clicking the same one, otherwise set new lock
      setLockedMemberId(prev => prev === id ? null : id);
      setLockedContentId(id);
      setPanelMode('publications');
    } else if (hasAwards(id)) {
      // Member has awards but no publications
      setLockedMemberId(prev => prev === id ? null : id);
      setLockedContentId(id);
      setPanelMode('awards');
    } else {
      // Member has neither -> show contact info
      setLockedMemberId(prev => prev === id ? null : id);
      setLockedContentId(id);
      setPanelMode('contact');
    }
  };

  const handleAwardsClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLockedMemberId(id);
    setLockedContentId(id);
    setPanelMode('awards');
  };

  const handleMouseEnter = (id: string) => {
    setHoveredMemberId(id);
  };

  // Determine which member to display in the panel
  // Logic: If hovering a member with publications, show them.
  // Otherwise, show the last locked member who had publications.
  const memberToDisplayId = lockedContentId;

  return (
    <section id="team" className="pt-14 pb-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">The Team</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 max-w-7xl mx-auto items-stretch">
          {/* Team Grid */}
          <div className="lg:col-span-8 flex flex-wrap justify-center gap-x-6 gap-y-12 content-start">
            {[...TEAM_MEMBERS,
            { id: 'placeholder-1', name: 'Open Position', role: 'Postdoctoral Fellow', image: null },
            { id: 'placeholder-2', name: 'Open Position', role: 'PhD Student', image: null }
            ].map((member) => {
              const isPlaceholder = member.id.startsWith('placeholder');
              const isActive = activeMemberId === member.id;
              const isLocked = lockedMemberId === member.id;

              return (
                <div
                  key={member.id}
                  className={`flex flex-col items-center text-center group relative cursor-pointer w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]`}
                  onMouseEnter={() => handleMouseEnter(member.id)}
                  onMouseLeave={() => setHoveredMemberId(null)}
                  onClick={() => {
                    if (isPlaceholder) {
                      window.location.href = `mailto:${CONTACT_INFO.email}?subject=Lab Application`;
                    } else {
                      handleMemberClick(member.id);
                    }
                  }}
                >
                  <div className={`relative mb-4 w-36 h-36 md:w-40 md:h-40 transition-transform duration-300 ${isActive ? 'scale-105' : ''}`}>
                    <div className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${isActive ? 'border-neuro-600' : (member.publicationIds?.length ? 'border-neuro-400 group-hover:border-neuro-600' : 'border-neuro-100 group-hover:border-neuro-300')}`}></div>

                    {/* Visual Indicator for Publications */}
                    {member.publicationIds && member.publicationIds.length > 0 && (
                      <div className={`absolute bottom-0 right-1 w-7 h-7 rounded-full flex items-center justify-center text-white shadow-lg z-10 transition-transform duration-300 scale-100 ${isLocked ? 'bg-neuro-700' : 'bg-neuro-600'}`}>
                        <i className="fa-solid fa-book-open text-[10px]"></i>
                      </div>
                    )}

                    {isPlaceholder ? (
                      <div className="w-full h-full rounded-full bg-neuro-50 flex flex-col items-center justify-center p-2 border-2 border-dashed border-neuro-200 group-hover:border-neuro-400 group-hover:bg-neuro-100 transition-all duration-300">
                        <i className="fa-solid fa-user-plus text-neuro-600 text-3xl mb-1"></i>
                        <span className="text-xs font-bold text-neuro-600 uppercase tracking-tighter leading-tight">Join Our Team</span>
                      </div>
                    ) : (
                      <div className="w-full h-full p-1">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img
                            src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f0fdfa&color=0d9488&size=256`}
                            alt={member.name}
                            className={`w-full h-full object-cover ${member.id === 't1' ? 'scale-[1.35] translate-y-3' : ''}`}
                          />
                        </div>
                      </div>
                    )}

                    {/* Dr. Vidhya Rangaraju (t1) Special Buttons */}
                    {member.id === 't1' && (
                      <>
                        <a
                          href="#bio"
                          className="absolute bottom-0 left-1 w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg z-20 hover:scale-110 hover:bg-amber-600 transition-all duration-200"
                          title="View Awards & Honors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-solid fa-trophy text-xs"></i>
                        </a>
                        <a
                          href="#publications"
                          className="absolute bottom-0 right-1 w-7 h-7 rounded-full bg-neuro-600 text-white flex items-center justify-center shadow-lg z-20 hover:scale-110 hover:bg-neuro-700 transition-all duration-200"
                          title="View Publications"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-solid fa-book-open text-[10px]"></i>
                        </a>
                      </>
                    )}

                    {/* Email Icon - Bottom Right */}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-neuro-600 shadow-sm hover:shadow-md hover:scale-110 hover:text-neuro-700 transition-all duration-200 z-20"
                        title={`Email ${member.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-solid fa-envelope text-xs"></i>
                      </a>
                    )}

                    {/* Awards Trophy Icon - Bottom Center */}
                    {member.awardIds && member.awardIds.length > 0 && (
                      <button
                        className={`absolute bottom-0 left-1 w-7 h-7 rounded-full flex items-center justify-center shadow-lg z-20 hover:scale-110 transition-all duration-200 ${panelMode === 'awards' && lockedContentId === member.id ? 'bg-amber-600 text-white' : 'bg-amber-500 text-white hover:bg-amber-600'}`}
                        title={`View ${member.name}'s Awards & Honors`}
                        onClick={(e) => handleAwardsClick(member.id, e)}
                      >
                        <i className="fa-solid fa-trophy text-xs"></i>
                      </button>
                    )}
                  </div>
                  <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-neuro-700' : 'text-slate-900'}`}>{member.name}</h3>
                  <p className="text-[12px] text-neuro-600 font-medium leading-tight">{member.role}</p>
                  {member.joinedYear && (
                    <p className="text-[11px] text-slate-500 font-medium mt-1">Joined {member.joinedYear}</p>
                  )}
                </div>
              );
            })}
          </div>
          {/* Publications/Awards Panel - Always rendered to prevent layout shifts */}
          <div className="hidden lg:block lg:col-span-4 relative pl-4">
            <div className="absolute inset-0 pl-4">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full shadow-inner relative overflow-hidden">
                {memberToDisplayId ? (
                  (() => {
                    const member = TEAM_MEMBERS.find(m => m.id === memberToDisplayId);

                    // Show Contact Panel
                    if (panelMode === 'contact' && member?.email) {
                      return (
                        <div className="animate-in fade-in slide-in-from-left-4 duration-300 h-full flex flex-col items-center justify-center text-center p-8">
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-sm">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                          </div>
                          <h4 className="font-bold text-2xl text-slate-900 mb-2">{member.name}</h4>
                          <p className="text-neuro-600 font-medium mb-8">{member.role}</p>

                          <a
                            href={`mailto:${member.email}`}
                            className="group flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-neuro-300 hover:shadow-md transition-all duration-300"
                          >
                            <div className="w-10 h-10 rounded-full bg-neuro-100 text-neuro-600 flex items-center justify-center group-hover:bg-neuro-600 group-hover:text-white transition-colors">
                              <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="text-left">
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Contact</p>
                              <p className="text-sm font-semibold text-slate-700">{member.email}</p>
                            </div>
                          </a>
                        </div>
                      );
                    }

                    // Show Awards Panel
                    if (panelMode === 'awards') {
                      const memberAwards = member?.awardIds?.map(aid =>
                        AWARDS.find(a => a.id === aid)
                      ).filter(Boolean);

                      if (memberAwards && memberAwards.length > 0) {
                        const awardCount = memberAwards.filter(a => a?.type === 'award').length;
                        const honorCount = memberAwards.filter(a => a?.type === 'honor').length;

                        return (
                          <div className="animate-in fade-in slide-in-from-left-4 duration-300 h-full flex flex-col">
                            <div className="flex-shrink-0 flex items-center gap-4 mb-6 pb-6 border-b border-amber-200">
                              <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src={member?.image} alt={member?.name} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-900">{member?.name}'s Awards & Honors</h4>
                                <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">
                                  {awardCount > 0 && `${awardCount} Award${awardCount !== 1 ? 's' : ''}`}
                                  {awardCount > 0 && honorCount > 0 && ' • '}
                                  {honorCount > 0 && `${honorCount} Honor${honorCount !== 1 ? 's' : ''}`}
                                </p>
                              </div>
                            </div>

                            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar min-h-0">
                              <div className="space-y-3">
                                {memberAwards.map((award, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-white p-4 rounded-xl border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all"
                                  >
                                    <div className="flex gap-3">
                                      <div className="w-10 h-10 bg-amber-100 rounded-full flex-shrink-0 flex items-center justify-center">
                                        <i className={`fa-solid ${award?.type === 'honor' ? 'fa-medal' : 'fa-trophy'} text-amber-600`}></i>
                                      </div>
                                      <div>
                                        <span className="text-[10px] font-bold text-amber-500 uppercase">
                                          {award?.date}{award?.endDate ? ` – ${award.endDate}` : ''}
                                        </span>
                                        <h5 className="text-sm font-bold text-slate-800 leading-tight mb-1">{award?.title}</h5>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Switch to Publications button if member has publications */}
                            {member?.publicationIds && member.publicationIds.length > 0 && (
                              <div className="flex-shrink-0 mt-4 pt-4 border-t border-slate-100">
                                <button
                                  onClick={() => setPanelMode('publications')}
                                  className="w-full py-2 px-4 bg-neuro-100 text-neuro-700 rounded-lg text-sm font-medium hover:bg-neuro-200 transition-colors flex items-center justify-center gap-2"
                                >
                                  <i className="fa-solid fa-book-open"></i>
                                  View Publications ({member.publicationIds.length})
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      }
                      return null;
                    }

                    // Show Publications Panel (default)
                    const memberPubs = member?.publicationIds?.map(pid =>
                      [...PUBLICATIONS, ...PREPRINTS].find(p => p.id === pid)
                    ).filter(Boolean);

                    if (memberPubs && memberPubs.length > 0) {
                      return (
                        <div className="animate-in fade-in slide-in-from-left-4 duration-300 h-full flex flex-col">
                          <div className="flex-shrink-0 flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                              <img src={member?.image} alt={member?.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900">{member?.name}'s Contributions</h4>
                              <p className="text-xs text-neuro-600 font-bold uppercase tracking-wider">{memberPubs.length} {memberPubs.length === 1 ? 'Publication' : 'Publications'}</p>
                            </div>
                          </div>

                          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar min-h-0">
                            <div className="space-y-4">
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

                          {/* Switch to Awards button if member has awards */}
                          {member?.awardIds && member.awardIds.length > 0 && (
                            <div className="flex-shrink-0 mt-4 pt-4 border-t border-slate-100">
                              <button
                                onClick={() => setPanelMode('awards')}
                                className="w-full py-2 px-4 bg-amber-100 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-200 transition-colors flex items-center justify-center gap-2"
                              >
                                <i className="fa-solid fa-trophy"></i>
                                View Awards & Honors ({member.awardIds.length})
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })()
                ) : (
                  /* Placeholder when no member is selected */
                  <div className="h-full flex flex-col items-center justify-center text-center text-slate-400">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-6">
                      <i className="fa-solid fa-users text-3xl text-slate-400"></i>
                    </div>
                    <h4 className="font-bold text-slate-600 text-lg mb-2">Explore Our Team</h4>
                    <p className="text-sm max-w-[250px]">Click on a team member to see their publications and awards.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full Team Photo Gallery Section */}
        <div className="mt-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Life at The Rangaraju Lab</h3>
            <p className="text-slate-500 mt-2">Connecting science, community, and innovation</p>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-neuro-600 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-100 aspect-[4/3] md:aspect-[3/2] touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
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