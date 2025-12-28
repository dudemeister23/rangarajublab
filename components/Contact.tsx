import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="p-10 md:p-16 w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-neuro-500 font-bold tracking-wider uppercase text-sm mb-2">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact the Lab</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-neuro-500 flex-shrink-0">
                   <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {CONTACT_INFO.address}<br />
                    1 Max Planck Way, Jupiter, FL 33458
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-neuro-500 flex-shrink-0">
                   <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-neuro-500 flex-shrink-0">
                   <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-slate-400 text-sm">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
               {CONTACT_INFO.socials.map(social => (
                 <a key={social.label} href={social.url} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-neuro-600 transition-colors" title={social.label}>
                    <i className={social.icon}></i>
                 </a>
               ))}
            </div>
          </div>

          {/* Map / Decorative Side */}
          <div className="w-full md:w-1/2 bg-slate-800 relative min-h-[300px]">
            {/* Placeholder for Map or Lab Building Image */}
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="MPFI Building" 
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
               <div className="p-6 bg-neuro-600/90 backdrop-blur rounded-xl text-white">
                  <h3 className="font-bold text-lg mb-2">Join Our Team</h3>
                  <p className="text-sm text-neuro-50 mb-4">We are always looking for motivated Postdocs and PhD students interested in mitochondrial biology.</p>
                  <a href={`mailto:${CONTACT_INFO.email}?subject=Lab Application`} className="inline-block text-xs font-bold uppercase tracking-wider border-b border-white pb-1 hover:text-slate-200">
                    Apply Now
                  </a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;