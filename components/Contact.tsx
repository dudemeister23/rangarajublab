import React from 'react';
import { CONTACT_INFO, CONTACT_IMAGE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

          {/* Info Side */}
          <div className="p-10 md:p-16 w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact the Lab</h2>

            <address className="space-y-6 not-italic" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="Rangaraju Lab" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-neuro-500 flex-shrink-0">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-slate-400 text-base leading-relaxed">
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
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 text-base hover:text-white transition-colors" itemProp="email">
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
                  <p className="text-slate-400 text-base" itemProp="telephone">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </div>
            </address>

            <div className="mt-10 flex gap-4">
              {CONTACT_INFO.socials.map(social => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-white text-xl hover:bg-neuro-600 transition-colors" title={social.label} aria-label={social.label}>
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
                src={CONTACT_IMAGE}
                alt="MPFI Building"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Join Our Team CTA */}
            <div className="p-10 bg-neuro-900 text-white">
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Lab Application`}
                className="inline-flex items-center gap-3 px-6 py-3 bg-neuro-600 hover:bg-neuro-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mb-4"
              >
                <i className="fa-solid fa-user-plus"></i>
                Join Our Team
              </a>
              <p className="text-sm text-neuro-100 leading-relaxed">We are always looking for motivated Postdocs and PhD students interested in neuroenergetics.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;