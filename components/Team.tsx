import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  // Separate PI from the rest of the team if desired, or map all. 
  // Given design request: Circular avatar grid.

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-neuro-600 font-bold tracking-wider uppercase text-sm">Our People</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">The Lab Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center group">
              <div className="relative mb-4 w-32 h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 rounded-full border-2 border-neuro-100 group-hover:border-neuro-500 transition-colors duration-300"></div>
                <img
                  src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f0fdfa&color=0d9488&size=256`} 
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover p-1"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
              <p className="text-sm text-neuro-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6">Interested in joining our team?</p>
            <a href="#contact" className="inline-block px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
                Open Positions
            </a>
        </div>
      </div>
    </section>
  );
};

export default Team;