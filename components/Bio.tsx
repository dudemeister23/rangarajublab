import React from 'react';
import { DR_RANGARAJU_PHOTO } from '../constants';

const Bio: React.FC = () => {
  return (
    <section className="pt-52 pb-20 bg-white">
      <div id="bio" className="container mx-auto px-6 md:px-12 scroll-mt-48">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">

          {/* Image Column */}
          <div className="w-full lg:w-[37%]">
            <div className="relative group">

              <img
                src={DR_RANGARAJU_PHOTO}
                alt="Dr. Vidhya Rangaraju"
                className="relative rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-300 w-full object-cover aspect-[3/4]"
              />

            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-2/5">
            <div className="flex flex-col gap-2 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Research Group Leader <br /> Dr. Vidhya Rangaraju</h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                <a href="mailto:Vidhya.Rangaraju@mpfi.org" className="text-neuro-600 font-semibold hover:text-neuro-700 text-lg">
                  Vidhya.Rangaraju@mpfi.org
                </a>
                <div className="flex gap-3">
                  <a
                    href="/Rangaraju_CV_2026.pdf"
                    download
                    className="px-6 py-2.5 bg-neuro-600 hover:bg-neuro-500 text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 flex items-center gap-2 h-fit whitespace-nowrap"
                  >
                    <i className="fa-solid fa-download"></i>
                    CV
                  </a>
                  <a
                    href="/Rangaraju_Biosketch_2026.pdf"
                    download
                    className="px-6 py-2.5 bg-neuro-600 hover:bg-neuro-500 text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 flex items-center gap-2 h-fit whitespace-nowrap"
                  >
                    <i className="fa-solid fa-download"></i>
                    Biosketch
                  </a>
                </div>
              </div>
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




              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4 mt-8">
                {/* Top Item - Centered across 2 columns */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1 2xl:col-span-2 flex justify-center">
                  <span
                    className="w-full md:w-[calc(50%-0.5rem)] lg:w-full 2xl:w-[calc(50%-0.5rem)] min-h-[52px] h-auto px-4 py-3 bg-neuro-100 text-neuro-700 text-sm md:text-base font-bold rounded-xl border border-neuro-100 transition-all duration-300 hover:bg-neuro-200 text-center flex flex-col justify-center items-center leading-tight cursor-default"
                  >
                    <span className="block whitespace-nowrap">NIH Director’s</span>
                    <span className="block whitespace-nowrap">New Innovator Award</span>
                  </span>
                </div>

                {/* Remaining Items */}
                {[
                  ["SfN Peter and Patricia Gruber", "International Research Award"],
                  ["CZI Ben Barres", "Early Career Acceleration Award"],
                  ["SfN Janett Rosenberg Trubatch", "Career Development Award"],
                  ["Lindau Nobel", "Laureate Meeting Award"],
                  ["Vincent du Vigneaud", "Award of Excellence"],
                  ["MPIBR Scientific Discovery", "of the Year Award"]
                ].map((lines, index) => (
                  <span
                    key={index}
                    className="w-full min-h-[52px] h-auto px-4 py-3 bg-neuro-100 text-neuro-700 text-sm md:text-base font-bold rounded-xl border border-neuro-100 transition-all duration-300 hover:bg-neuro-200 text-center flex flex-col justify-center items-center leading-tight cursor-default"
                  >
                    {lines.map((line, i) => (
                      <span key={i} className="block whitespace-nowrap">{line}</span>
                    ))}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bio;