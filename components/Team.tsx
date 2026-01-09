import React, { useState, useEffect } from 'react';
import { TEAM_MEMBERS, TEAM_REEL, PUBLICATIONS, PREPRINTS, CONTACT_INFO, AWARDS } from '../constants';

const Team: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  const [lockedMemberId, setLockedMemberId] = useState<string | null>(null);
  const [lockedContentId, setLockedContentId] = useState<string>('t1');
  const [panelMode, setPanelMode] = useState<'publications' | 'awards' | 'contact' | 'job'>('contact');

  // Touch state for swipe detection
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

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

  // Auto-cycle pause state
  const [autoCyclePaused, setAutoCyclePaused] = useState(false);

  const nextSlide = () => {
    setAutoCyclePaused(true);
    setCurrentIdx((prev) => (prev === TEAM_REEL.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setAutoCyclePaused(true);
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

  // Auto-cycle the photo reel every 6 seconds (unless paused by user interaction)
  useEffect(() => {
    if (autoCyclePaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev === TEAM_REEL.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [autoCyclePaused]);

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
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">The Team</h2>
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
                      setLockedMemberId(member.id);
                      setLockedContentId(member.id);
                      setPanelMode('job');
                    } else {
                      handleMemberClick(member.id);
                    }
                  }}
                >
                  <div className={`relative mb-4 w-36 h-36 md:w-40 md:h-40 transition-transform duration-300 ${isActive ? 'scale-105' : ''}`}>
                    {isPlaceholder ? (
                      <div className="w-full h-full p-1">
                        <div className="w-full h-full rounded-full bg-neuro-50 flex flex-col items-center justify-center group-hover:bg-neuro-100 transition-all duration-300">
                          <i className="fa-solid fa-user-plus text-neuro-600 text-6xl mb-2"></i>
                          <span className="text-lg font-bold text-neuro-600 tracking-tighter leading-tight">Join Our Team</span>
                        </div>
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
                    <div className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-300 ${isActive ? 'ring-4 ring-neuro-600' : 'ring-2 ring-neuro-100 group-hover:ring-neuro-300'}`}></div>



                    {/* Unified Icons Container - Bottom Center */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20">

                      {/* 1. Publications */}
                      {(member.id === 't1' || (member.publicationIds && member.publicationIds.length > 0)) && (
                        member.id === 't1' ? (
                          <a
                            href="#publications"
                            className="w-7 h-7 rounded-full bg-neuro-600 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-neuro-700 transition-all duration-200"
                            title="View Publications"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fa-solid fa-book-open text-[10px]"></i>
                          </a>
                        ) : (
                          <button
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:scale-110 ${isLocked && panelMode === 'publications' ? 'bg-neuro-700' : 'bg-neuro-600 hover:bg-neuro-700'}`}
                            title={`View ${member.name}'s Publications`}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (handleMemberClick) handleMemberClick(member.id);
                            }}
                          >
                            <i className="fa-solid fa-book-open text-[10px]"></i>
                          </button>
                        )
                      )}

                      {/* 2. Email */}
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

                      {/* 3. Awards (Right) */}
                      {(member.id === 't1' || (member.awardIds && member.awardIds.length > 0)) && (
                        member.id === 't1' ? (
                          <a
                            href="#bio"
                            className="w-7 h-7 rounded-full bg-neuro-600 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-neuro-700 transition-all duration-200"
                            title="View Awards & Honors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fa-solid fa-trophy text-xs"></i>
                          </a>
                        ) : (
                          <button
                            className={`w-7 h-7 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 ${panelMode === 'awards' && lockedContentId === member.id ? 'bg-neuro-700 text-white' : 'bg-neuro-600 text-white hover:bg-neuro-700'}`}
                            title={`View ${member.name}'s Awards & Honors`}
                            onClick={(e) => handleAwardsClick(member.id, e)}
                          >
                            <i className="fa-solid fa-trophy text-xs"></i>
                          </button>
                        )
                      )}
                    </div>
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
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 h-full shadow-inner relative overflow-hidden">
                {memberToDisplayId ? (
                  (() => {
                    if (panelMode === 'job' && memberToDisplayId === 'placeholder-1') {
                      return (
                        <div className="animate-in fade-in slide-in-from-left-4 duration-300 h-full flex flex-col">
                          <div className="flex-shrink-0 flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="w-16 h-16 rounded-full bg-neuro-50 flex items-center justify-center border-2 border-dashed border-neuro-200">
                              <i className="fa-solid fa-user-plus text-neuro-600 text-2xl"></i>
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 text-lg">Open Position</h4>
                              <p className="text-neuro-600 font-bold uppercase tracking-wider text-sm">Postdoctoral Fellow</p>
                            </div>
                          </div>

                          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar min-h-0">
                            <div className="prose prose-sm prose-slate max-w-none">
                              <h5 className="font-bold text-slate-900 mb-3">How to Apply</h5>
                              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                                <p className="text-sm text-slate-600 mb-2">
                                  Please send the following information to Dr. Vidhya Rangaraju:
                                </p>
                                <a href="mailto:Vidhya.Rangaraju@mpfi.org" className="text-neuro-600 font-bold hover:underline mb-4 block">
                                  Vidhya.Rangaraju@mpfi.org
                                </a>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                  <li>CV</li>
                                  <li>Statement of research experience and future research interests (1-2 pages)</li>
                                  <li>Names and complete contact information of three references</li>
                                </ul>
                              </div>

                              <p className="text-slate-600 mb-4">
                                The postdoctoral fellow will pursue our research questions and their independent ideas. We will employ state-of-the-art imaging, including ATP measurements, 2p glutamate uncaging, super-resolution and electron microscopy, advanced proteomics and translatomic methods, and develop novel molecular tools when required.
                              </p>

                              <h5 className="font-bold text-slate-900 mt-6 mb-2">Qualifications</h5>
                              <p className="text-slate-600 mb-4">
                                The ideal candidate should have or is in the process of completing their PhD in Neuroscience or a related scientific discipline. A strong background in imaging, proteomics, ribosome profiling, or molecular and cell biology is preferred. Strong analytical and communication skills, as well as the ability to fit in well with a team, are required.
                              </p>
                              <p className="text-slate-600 mb-4 font-medium italic">
                                Please also refer to the Mentoring Philosophy and Team Expectations section above.
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    if (panelMode === 'job' && memberToDisplayId === 'placeholder-2') {
                      return (
                        <div className="animate-in fade-in slide-in-from-left-4 duration-300 h-full flex flex-col">
                          <div className="flex-shrink-0 flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="w-16 h-16 rounded-full bg-neuro-50 flex items-center justify-center border-2 border-dashed border-neuro-200">
                              <i className="fa-solid fa-graduation-cap text-neuro-600 text-2xl"></i>
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 text-lg">Open Position</h4>
                              <p className="text-neuro-600 font-bold uppercase tracking-wider text-sm">PhD Student</p>
                            </div>
                          </div>

                          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar min-h-0">
                            <div className="prose prose-sm prose-slate max-w-none">
                              <h5 className="font-bold text-slate-900 mb-3">How to Apply</h5>
                              <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200 mb-6">
                                <p className="text-sm text-slate-600 mb-2">
                                  We recruit PhD students through the MPFI IMPRS Program.
                                </p>
                                <a href="https://mpfi.org/training/imprs-sc/" target="_blank" rel="noreferrer" className="text-neuro-600 font-bold hover:underline block break-all">
                                  https://mpfi.org/training/imprs-sc/
                                </a>
                              </div>

                              <p className="text-slate-600 mb-4">
                                The PhD student will pursue our research questions and their independent ideas. We will employ state-of-the-art imaging, including ATP measurements, 2p glutamate uncaging, super-resolution and electron microscopy, advanced proteomics and translatomic methods, and develop novel molecular tools when required.
                              </p>

                              <h5 className="font-bold text-slate-900 mt-6 mb-2">Qualifications</h5>
                              <p className="text-slate-600 mb-4">
                                The ideal candidate should have or is in the process of completing their Bachelor's or Master's degree in Neuroscience or a related scientific discipline. A strong background in imaging, proteomics, ribosome profiling, or molecular and cell biology is preferred. Strong analytical and communication skills, as well as the ability to fit in well with a team, are required.
                              </p>
                              <p className="text-slate-600 mb-4 font-medium italic">
                                Please also refer to the Mentoring Philosophy and Team Expectations section above.
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }

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
                            className="group flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-full hover:border-neuro-300 hover:shadow-md transition-all duration-300"
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
                            <div className="flex-shrink-0 flex items-center gap-4 mb-4 pb-4 border-b border-neuro-200">
                              <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src={member?.image} alt={member?.name} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-900">{member?.name}'s Awards & Honors</h4>
                                <p className="text-xs text-neuro-600 font-bold uppercase tracking-wider">
                                  {awardCount > 0 && `${awardCount} Award${awardCount !== 1 ? 's' : ''}`}
                                  {awardCount > 0 && honorCount > 0 && ' • '}
                                  {honorCount > 0 && `${honorCount} Honor${honorCount !== 1 ? 's' : ''}`}
                                </p>
                                {member?.email && (
                                  <a href={`mailto:${member.email}`} className="text-xs text-slate-500 hover:text-neuro-600 flex items-center gap-1.5 mt-1.5 transition-colors font-medium">
                                    <i className="fa-solid fa-envelope"></i>
                                    {member.email}
                                  </a>
                                )}
                              </div>
                            </div>

                            {/* Switch to Publications button - positioned below header */}
                            {member?.publicationIds && member.publicationIds.length > 0 && (
                              <div className="flex-shrink-0 mb-4 pb-4 border-b border-slate-100">
                                <button
                                  onClick={() => setPanelMode('publications')}
                                  className="w-full py-2 px-4 bg-neuro-100 text-neuro-700 rounded-full text-sm font-medium hover:bg-neuro-200 transition-colors flex items-center justify-center gap-2"
                                >
                                  <i className="fa-solid fa-book-open"></i>
                                  View Publications ({member.publicationIds.length})
                                </button>
                              </div>
                            )}

                            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar min-h-0">
                              <div className="space-y-3">
                                {memberAwards.map((award, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-white p-4 rounded-2xl border border-neuro-100 hover:border-neuro-300 hover:shadow-md transition-all"
                                  >
                                    <div className="flex gap-3 items-center">
                                      <div className="w-10 h-10 bg-neuro-100 rounded-full flex-shrink-0 flex items-center justify-center">
                                        {award?.type === 'honor' ? (
                                          <img src="assets/icons/laurel-wreath.png" alt="Honor" className="w-9 h-9 object-contain opacity-80" />
                                        ) : (
                                          <i className="fa-solid fa-trophy text-neuro-600 text-xl"></i>
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
                              </div>
                            </div>
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
                          <div className="flex-shrink-0 flex items-center gap-4 mb-4 pb-4 border-b border-slate-200">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                              <img src={member?.image} alt={member?.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900">{member?.name}'s Contributions</h4>
                              <p className="text-xs text-neuro-600 font-bold uppercase tracking-wider">{memberPubs.length} {memberPubs.length === 1 ? 'Publication' : 'Publications'}</p>
                              {member?.email && (
                                <a href={`mailto:${member.email}`} className="text-xs text-slate-500 hover:text-neuro-600 flex items-center gap-1.5 mt-1.5 transition-colors font-medium">
                                  <i className="fa-solid fa-envelope"></i>
                                  {member.email}
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Switch to Awards button - positioned below header */}
                          {member?.awardIds && member.awardIds.length > 0 && (
                            <div className="flex-shrink-0 mb-4 pb-4 border-b border-slate-100">
                              <button
                                onClick={() => setPanelMode('awards')}
                                className="w-full py-2 px-4 bg-neuro-100 text-neuro-700 rounded-full text-sm font-medium hover:bg-neuro-200 transition-colors flex items-center justify-center gap-2"
                              >
                                <i className="fa-solid fa-trophy"></i>
                                View Awards & Honors ({member.awardIds.length})
                              </button>
                            </div>
                          )}

                          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar min-h-0">
                            <div className="space-y-4">
                              {memberPubs.map((pub, idx) => (
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
                                      <p className="text-[10px] text-slate-500 line-clamp-2">{pub?.citation}</p>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
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
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Life at The Rangaraju Lab</h3>
            <p className="text-slate-500 mt-2">Connecting science, innovation, and community</p>
          </div>

          <div className="relative group max-w-5xl mx-auto">


            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl bg-slate-100 aspect-[4/3] md:aspect-[3/2] touch-pan-y"
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
                      style={{ objectPosition: (photo as any).objectPosition || 'center' }}
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
                className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all z-10 opacity-0 group-hover:opacity-100"
              >
                <i className="fa-solid fa-chevron-left text-3xl"></i>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all z-10 opacity-0 group-hover:opacity-100"
              >
                <i className="fa-solid fa-chevron-right text-3xl"></i>
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {TEAM_REEL.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setAutoCyclePaused(true); setCurrentIdx(index); }}
                    className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIdx ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Mobile Modal for Team Members */}
      {lockedMemberId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-200" onClick={() => setLockedMemberId(null)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col" onClick={e => e.stopPropagation()}>

            {/* Logic to determine what to show based on lockedContentId and panelMode */}
            {(() => {
              // 1. Handle Open Positions
              if (lockedContentId.startsWith('placeholder')) {
                const isPhD = lockedContentId === 'placeholder-2';
                return (
                  <div className="flex flex-col overflow-hidden" style={{ maxHeight: 'calc(85vh - 2rem)' }}>
                    <div className="p-6 border-b border-neuro-100 flex items-center justify-between bg-neuro-50/50 flex-shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-neuro-50 flex items-center justify-center border-2 border-dashed border-neuro-200">
                          <i className={`fa-solid ${isPhD ? 'fa-graduation-cap' : 'fa-user-plus'} text-neuro-600`}></i>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-lg leading-tight">Open Position</h4>
                          <p className="text-xs font-bold text-neuro-600 uppercase tracking-wider">{isPhD ? 'PhD Student' : 'Postdoctoral Fellow'}</p>
                        </div>
                      </div>
                      <button onClick={() => setLockedMemberId(null)} className="w-8 h-8 rounded-full bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-600 flex items-center justify-center transition-colors">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="p-6 overflow-y-scroll flex-1 overscroll-contain visible-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                      <div className="prose prose-sm prose-slate max-w-none">
                        <h5 className="font-bold text-slate-900 mb-3">How to Apply</h5>
                        {isPhD ? (
                          <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200 mb-6">
                            <p className="text-sm text-slate-600 mb-2">We recruit PhD students through the MPFI IMPRS Program.</p>
                            <a href="https://mpfi.org/training/imprs-sc/" target="_blank" rel="noreferrer" className="text-neuro-600 font-bold hover:underline block break-all">https://mpfi.org/training/imprs-sc/</a>
                          </div>
                        ) : (
                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                            <p className="text-sm text-slate-600 mb-2">Please send the following information to Dr. Vidhya Rangaraju:</p>
                            <a href="mailto:Vidhya.Rangaraju@mpfi.org" className="text-neuro-600 font-bold hover:underline mb-4 block">Vidhya.Rangaraju@mpfi.org</a>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                              <li>CV</li>
                              <li>Statement of research experience and future research interests (1-2 pages)</li>
                              <li>Names and complete contact information of three references</li>
                            </ul>
                          </div>
                        )}
                        <p className="text-slate-600 mb-4">
                          {isPhD
                            ? "The PhD student will pursue our research questions and their independent ideas. We will employ state-of-the-art imaging, including ATP measurements, 2p glutamate uncaging, super-resolution and electron microscopy, advanced proteomics and translatomic methods, and develop novel molecular tools when required."
                            : "The postdoctoral fellow will pursue our research questions and their independent ideas. We will employ state-of-the-art imaging, including ATP measurements, 2p glutamate uncaging, super-resolution and electron microscopy, advanced proteomics and translatomic methods, and develop novel molecular tools when required."}
                        </p>
                        <h5 className="font-bold text-slate-900 mt-6 mb-2">Qualifications</h5>
                        <p className="text-slate-600 mb-4">
                          {isPhD
                            ? "The ideal candidate should have or is in the process of completing their Bachelor's or Master's degree in Neuroscience or a related scientific discipline. A strong background in imaging, proteomics, ribosome profiling, or molecular and cell biology is preferred. Strong analytical and communication skills, as well as the ability to fit in well with a team, are required."
                            : "The ideal candidate should have or is in the process of completing their PhD in Neuroscience or a related scientific discipline. A strong background in imaging, proteomics, ribosome profiling, or molecular and cell biology is preferred. Strong analytical and communication skills, as well as the ability to fit in well with a team, are required."}
                        </p>
                        <p className="text-slate-600 mb-4 font-medium italic">Please also refer to the Mentoring Philosophy and Team Expectations section above.</p>
                      </div>
                    </div>
                  </div>
                );
              }

              // 2. Handle Regular Members
              const member = TEAM_MEMBERS.find(m => m.id === lockedContentId);
              if (!member) return null;

              const hasAwards = member.awardIds && member.awardIds.length > 0;
              const hasPublications = member.publicationIds && member.publicationIds.length > 0;
              const hasBoth = hasAwards && hasPublications;

              return (
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="p-6 border-b border-neuro-100 flex items-center justify-between bg-neuro-50/50 flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <img src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}`} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg leading-tight">{member.name}</h4>
                        <p className="text-xs font-bold text-neuro-600 uppercase tracking-wider">
                          {panelMode === 'awards' ? 'Awards & Honors' : panelMode === 'publications' ? 'Publications' : 'Contact'}
                        </p>
                      </div>
                    </div>
                    <button onClick={() => setLockedMemberId(null)} className="w-8 h-8 rounded-full bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-600 flex items-center justify-center transition-colors">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  {/* View Switcher */}
                  {hasBoth && panelMode !== 'contact' && (
                    <div className="px-6 pt-4 flex-shrink-0">
                      <div className="flex gap-2 p-1 bg-neuro-50 rounded-xl">
                        <button
                          onClick={() => setPanelMode('awards')}
                          className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${panelMode === 'awards' ? 'bg-white text-neuro-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                          <i className="fa-solid fa-trophy mr-2"></i> Awards
                        </button>
                        <button
                          onClick={() => setPanelMode('publications')}
                          className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${panelMode === 'publications' ? 'bg-white text-neuro-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                          <i className="fa-solid fa-book-open mr-2"></i> Publications
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 overflow-y-auto custom-scrollbar flex-grow">
                    {panelMode === 'contact' && (
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-sm">
                          <img src={member.image || ''} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">{member.name}</h4>
                        <p className="text-neuro-600 font-medium mb-6">{member.role}</p>
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="group flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-full hover:border-neuro-300 hover:shadow-md transition-all">
                            <div className="w-10 h-10 rounded-full bg-neuro-100 text-neuro-600 flex items-center justify-center">
                              <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="text-left">
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Contact</p>
                              <p className="text-sm font-semibold text-slate-700">{member.email}</p>
                            </div>
                          </a>
                        )}

                        {/* Links to switch if available */}
                        <div className="flex gap-3 mt-8">
                          {hasPublications && (
                            <button onClick={() => setPanelMode('publications')} className="flex items-center gap-2 px-4 py-2 bg-neuro-50 text-neuro-700 rounded-full text-sm font-bold hover:bg-neuro-100 transition-colors">
                              <i className="fa-solid fa-book-open"></i> Publications
                            </button>
                          )}
                          {hasAwards && (
                            <button onClick={() => setPanelMode('awards')} className="flex items-center gap-2 px-4 py-2 bg-neuro-50 text-neuro-700 rounded-full text-sm font-bold hover:bg-neuro-100 transition-colors">
                              <i className="fa-solid fa-trophy"></i> Awards
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {panelMode === 'awards' && (
                      <div className="space-y-3">
                        {member.awardIds?.map(aid => AWARDS.find(a => a.id === aid)).filter(Boolean).map((award, idx) => (
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
                        {(!member.awardIds || member.awardIds.length === 0) && (
                          <p className="text-center text-slate-400 text-sm py-4">No awards listed.</p>
                        )}
                      </div>
                    )}

                    {panelMode === 'publications' && (
                      <div className="space-y-4">
                        {member.publicationIds?.map(pid => [...PUBLICATIONS, ...PREPRINTS].find(p => p.id === pid)).filter(Boolean).map((pub, idx) => (
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
                        {(!member.publicationIds || member.publicationIds.length === 0) && (
                          <p className="text-center text-slate-400 text-sm py-4">No publications listed.</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;