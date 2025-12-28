import React from 'react';
import { PROJECTS } from '../constants';

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-neuro-600 font-bold tracking-wider uppercase text-sm">Research Focus</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Scientific Projects</h2>
          <p className="text-slate-600 text-lg">
            The Neuroenergetics Lab is interested in how neurons manage their energy landscapes. 
            Mitochondria represent a hugely underexplored organellar system in neurons with consequences for human health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col"
            >
              <div className="w-12 h-12 bg-neuro-50 rounded-lg flex items-center justify-center mb-6 text-neuro-600">
                {/* Dynamically assigning icons based on index for variety */}
                <i className={`fa-solid ${
                  index === 0 ? 'fa-dna' : 
                  index === 1 ? 'fa-bolt' : 
                  index === 2 ? 'fa-microscope' : 'fa-network-wired'
                } text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a href="#" className="text-neuro-600 font-medium text-sm hover:text-neuro-700 flex items-center gap-1 group">
                  Learn more <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;