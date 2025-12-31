import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Research: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>('p1');
  const activeProject = PROJECTS.find(p => p.id === activeProjectId);

  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Research Projects</h2>
          <p className="text-slate-600 text-lg">
            The Neuroenergetics Lab is interested in how neurons manage their energy landscapes.
            Mitochondria represent a hugely underexplored organellar system in neurons with consequences for human health.
          </p>
        </div>

        {/* Project Overview Squares */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PROJECTS.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProjectId(project.id)}
              className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 border group h-full cursor-pointer ${activeProjectId === project.id
                ? 'bg-neuro-600 border-neuro-600 text-white shadow-lg transform -translate-y-1'
                : 'bg-white border-slate-100 text-slate-600 hover:border-neuro-500 hover:text-neuro-600 hover:shadow-xl hover:-translate-y-2'
                }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${activeProjectId === project.id
                ? 'bg-white/20'
                : 'bg-neuro-50 group-hover:bg-neuro-100 group-hover:scale-110'
                }`}>
                <i className={`fa-solid ${index === 0 ? 'fa-anchor' :
                  index === 1 ? 'fa-bolt' :
                    index === 2 ? 'fa-microscope' : 'fa-network-wired'
                  } text-2xl ${activeProjectId === project.id ? 'text-white' : 'text-neuro-600'}`}></i>
              </div>
              <h3 className="text-sm md:text-base font-bold text-center leading-tight">
                {project.title}
              </h3>
              {!activeProjectId && (
                <span className="text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-medium uppercase tracking-tighter">
                  Click to explore
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Project Detail Area */}
        {activeProject && (
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100 min-h-[320px] transition-all duration-500 animate-in fade-in zoom-in-95 slide-in-from-bottom-4">
            <div className="flex flex-col md:flex-row gap-8 items-start">

              <div className="flex-grow w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">{activeProject.title}</h3>

                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <div className="flex-1">
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {activeProject.description}
                    </p>
                  </div>

                  {activeProject.image && (
                    <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md border border-slate-100 shrink-0">
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-auto object-contain bg-white"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Research;