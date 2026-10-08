import React from 'react';
import { DR_RANGARAJU_PHOTO } from '../constants';

const Bio: React.FC = () => {
  return (
    <section className="pt-[6.5rem] pb-20 bg-white">
      <div id="bio" className="container mx-auto px-6 md:px-12 scroll-mt-32">
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
                Dr. Vidhya Rangaraju has led her <a href="https://mpfi.org/science/our-labs/rangaraju-lab/" target="_blank" rel="noopener noreferrer" className="bio-link">research group</a> at the <a href="https://mpfi.org" target="_blank" rel="noopener noreferrer" className="bio-link">Max Planck Florida Institute for Neuroscience</a> since January 2020. Her laboratory investigates how local energy supply enables and constrains synaptic plasticity, learning, and memory, and how disruptions in this supply contribute to neurodegeneration. Recent work from her group has revealed how mitochondria adapt their energy production and structure near synapses to meet the immediate and sustained energy demands of synaptic plasticity.
              </p>
              <p className="mb-4">
                During her postdoctoral work in <a href="https://brain.mpg.de/schuman" target="_blank" rel="noopener noreferrer" className="bio-link">Erin Schuman’s laboratory</a>, <a href="https://www.sciencedirect.com/science/article/pii/S0092867418316271?via%3Dihub" target="_blank" rel="noopener noreferrer" className="bio-link">she discovered local mitochondrial energy compartments that fuel protein synthesis during synaptic plasticity</a>. During her Ph.D. in <a href="https://sites.google.com/site/ryanlab1/Home" target="_blank" rel="noopener noreferrer" className="bio-link">Tim Ryan’s laboratory</a>, <a href="https://www.sciencedirect.com/science/article/pii/S0092867414000130?via%3Dihub" target="_blank" rel="noopener noreferrer" className="bio-link">she developed an optical reporter of synaptic ATP and established the link between neuronal activity and ATP synthesis</a>.
              </p>

              <div className="grid gap-3 mt-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))' }}>
                {/* Top item stays centered across the available columns. */}
                <div className="col-span-full flex justify-center">
                  <a
                    href="https://commonfund.nih.gov/newinnovator/fundedresearch"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full max-w-[25rem] min-w-0 min-h-[40px] h-auto px-4 py-2 bg-neuro-600 hover:bg-neuro-500 text-white text-xs md:text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 text-center flex flex-col justify-center items-center leading-tight"
                  >
                    <span className="block max-w-full whitespace-normal [overflow-wrap:anywhere]">NIH Director’s</span>
                    <span className="block max-w-full whitespace-normal [overflow-wrap:anywhere]">New Innovator Award <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-1"></i></span>
                  </a>
                </div>

                {/* Remaining Items */}
                {[
                  { lines: ["SfN Peter and Patricia Gruber", "International Research Award"], link: "https://gruber.yale.edu/peter-and-patricia-gruber-international-research-award-neuroscience" },
                  { lines: ["CZI Ben Barres", "Early Career Acceleration Award"], link: "https://chanzuckerberg.com/science/programs-resources/neurodegeneration-challenge/projects/?award=ben-barres-cycle-2" },
                  { lines: ["SfN Janett Rosenberg Trubatch", "Career Development Award"], link: "https://www.sfn.org/careers/awards/early-career/janett-rosenberg-trubatch-career-development-award" },
                  { lines: ["Lindau Nobel", "Laureate Meeting Award"], link: "https://www.youtube.com/watch?v=zfkXhsmYmPk" },
                  { lines: ["Vincent du Vigneaud", "Award of Excellence"], link: "https://news.weill.cornell.edu/news/2012/04/awards-and-honors-across-weill-cornell-medical-college-1" },
                  { lines: ["MPIBR Scientific Discovery", "of the Year Award"], link: "https://brain.mpg.de/103075/activities" }
                ].map((item, index) => {
                  const baseClasses = "w-full min-w-0 min-h-[40px] h-auto px-4 py-2 bg-neuro-600 text-white text-xs md:text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-neuro-900/20 text-center flex flex-col justify-center items-center leading-tight";
                  const hoverClasses = "hover:bg-neuro-500 hover:shadow-neuro-600/40";

                  if (item.link) {
                    return (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`${baseClasses} ${hoverClasses}`}
                      >
                        {item.lines.map((line, i) => (
                          <span key={i} className="block max-w-full whitespace-normal [overflow-wrap:anywhere]">
                            {line}
                            {i === item.lines.length - 1 && <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-1"></i>}
                          </span>
                        ))}
                      </a>
                    );
                  }

                  return (
                    <span
                      key={index}
                      className={`${baseClasses} cursor-default`}
                    >
                      {item.lines.map((line, i) => (
                        <span key={i} className="block max-w-full whitespace-normal [overflow-wrap:anywhere]">{line}</span>
                      ))}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bio;
