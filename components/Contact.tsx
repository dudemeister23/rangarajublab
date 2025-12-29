import React from 'react';
import { CONTACT_INFO, LAB_BUILDING_IMAGE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

          {/* Info Side */}
          <div className="p-10 md:p-16 w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-neuro-500 font-bold tracking-wider uppercase text-sm mb-2">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact the Lab</h2>

            <address className="space-y-6 not-italic" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="Rangaraju Lab" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-neuro-500 flex-shrink-0">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <span itemProp="name">{CONTACT_INFO.address}</span><br />
                    <span itemProp="streetAddress">1 Max Planck Way</span>, <span itemProp="addressLocality">Jupiter</span>, <span itemProp="addressRegion">FL</span> <span itemProp="postalCode">33458</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-neuro-500 flex-shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 text-sm hover:text-white transition-colors" itemProp="email">
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
                  <p className="text-slate-400 text-sm" itemProp="telephone">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </div>
            </address>

            <div className="mt-10 flex gap-4">
              {CONTACT_INFO.socials.map(social => (
                <a key={social.label} href={social.url} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-neuro-600 transition-colors" title={social.label} aria-label={social.label} rel="noopener">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Map / Decorative Side */}
          <div className="w-full md:w-1/2 bg-slate-800 flex flex-col relative min-h-[400px]">
            {/* Lab Building Image */}
            <div className="flex-grow relative min-h-[250px]">
              <img
                src={LAB_BUILDING_IMAGE}
                alt="MPFI Building"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Join Our Team CTA */}
            <div className="p-10 bg-neuro-900 text-white">
              <h3 className="font-bold text-lg mb-2">Join Our Team</h3>
              <p className="text-sm text-neuro-100 mb-6 leading-relaxed">We are always looking for motivated Postdocs and PhD students interested in mitochondrial biology.</p>
              <a href={`mailto:${CONTACT_INFO.email}?subject=Lab Application`} className="inline-block text-xs font-bold uppercase tracking-wider border-b border-neuro-400 pb-1 text-neuro-400 hover:text-white hover:border-white transition-colors">
                Apply Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;