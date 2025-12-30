import React from 'react';
import { DR_RANGARAJU_PHOTO } from '../constants';

const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">

          {/* Image Column */}
          <div className="w-full lg:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neuro-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={DR_RANGARAJU_PHOTO}
                alt="Dr. Vidhya Rangaraju"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-slate-900">Dr. Vidhya Rangaraju</h3>
                <p className="text-sm text-neuro-600 font-medium">Research Group Leader</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-2/5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Principal Investigator <br /> Dr. Rangaraju</h2>
              <a href="https://mpfi.org/science/our-labs/rangaraju-lab/" target="_blank" rel="noreferrer" className="text-neuro-600 font-semibold hover:text-neuro-700 inline-flex items-center gap-2 text-sm">
                Visit MPFI Profile <i className="fa-solid fa-external-link-alt text-xs"></i>
              </a>
            </div>

            <div className="prose prose-lg text-slate-600 leading-relaxed text-justify">
              <p className="mb-4">
                Dr. Vidhya Rangaraju started her Research Group Leader position at the <strong>Max Planck Florida Institute for Neuroscience</strong> in January 2020. The overarching goal of the Rangaraju group is to investigate the energy use and supply of biological processes in neurons.
              </p>
              <p className="mb-4">
                Prior to this appointment, Rangaraju was an EMBO and Marie Curie Postdoctoral Fellow in the group of Dr. Erin Schuman at the Max Planck Institute for Brain Research in Germany. During her postdoc, she uncovered the presence of local mitochondrial compartments of energy that fuel local translation during synaptic plasticity.
              </p>
              <p className="mb-4">
                Rangaraju completed her Ph.D. in the lab of Dr. Timothy Ryan at Weill Cornell Medicine in New York. There she developed a novel optical reporter of synaptic ATP to measure dynamic changes in ATP concentrations and elucidated the link between neuronal activity and ATP synthesis.
              </p>
              <p className="mb-6">
                She is the recipient of numerous awards, including the Vincent du Vigneaud Award of Excellence, Lindau Nobel Laureate Meeting Award, the SfN Peter and Patricia Gruber International Research Award, and the NIH Director's New Innovator Award.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">NIH Innovator Award</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">SfN Gruber Award</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">CZI Ben Barres Award</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">EMBO Fellow</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bio;