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
                Dr. Vidhya Rangaraju started her Research Group Leader position at the <a href="https://mpfi.org" target="_blank" rel="noopener noreferrer" className="bio-link">Max Planck Florida Institute for Neuroscience</a> in January 2020. The overarching goal of the Rangaraju group is to investigate the energy use and supply of biological processes in neurons.
              </p>
              <p className="mb-4">
                Prior to this appointment, Rangaraju was an <a href="https://www.embo.org/funding/fellowships-grants-and-career-support/postdoctoral-fellowships/" target="_blank" rel="noopener noreferrer" className="bio-link">EMBO</a> and <a href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships" target="_blank" rel="noopener noreferrer" className="bio-link">Marie Curie</a> Postdoctoral Fellow in the group of <a href="https://brain.mpg.de/schuman" target="_blank" rel="noopener noreferrer" className="bio-link">Dr. Erin Schuman</a> at the <a href="https://brain.mpg.de/home" target="_blank" rel="noopener noreferrer" className="bio-link">Max Planck Institute for Brain Research</a> in Germany. During her postdoc, <a href="https://www.sciencedirect.com/science/article/pii/S0092867418316271?via%3Dihub" target="_blank" rel="noopener noreferrer" className="bio-link">she uncovered the presence of local mitochondrial compartments of energy that fuel local translation during synaptic plasticity.</a>
              </p>
              <p className="mb-4">
                Rangaraju completed her Ph.D. in the lab of <a href="https://sites.google.com/site/ryanlab1/Home" target="_blank" rel="noopener noreferrer" className="bio-link">Dr. Timothy Ryan</a> at <a href="https://gradschool.weill.cornell.edu" target="_blank" rel="noopener noreferrer" className="bio-link">Weill Cornell Medicine</a> in New York. There <a href="https://www.sciencedirect.com/science/article/pii/S0092867414000130?via%3Dihub" target="_blank" rel="noopener noreferrer" className="bio-link">she developed a novel optical reporter of synaptic ATP to measure dynamic changes in ATP concentrations and elucidated the link between neuronal activity and ATP synthesis.</a>
              </p>




              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-3 mt-8">
                {/* Top Item - Centered across 2 columns */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1 2xl:col-span-2 flex justify-center">
                  <a
                    href="https://commonfund.nih.gov/newinnovator/fundedresearch"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full md:w-[calc(50%-0.375rem)] lg:w-full 2xl:w-[calc(50%-0.375rem)] min-h-[40px] h-auto px-4 py-2 bg-neuro-600 hover:bg-neuro-500 text-white text-xs md:text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-neuro-900/20 hover:shadow-neuro-600/40 text-center flex flex-col justify-center items-center leading-tight"
                  >
                    <span className="block whitespace-nowrap">NIH Director’s</span>
                    <span className="block whitespace-nowrap">New Innovator Award <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-1"></i></span>
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
                  const baseClasses = "w-full min-h-[40px] h-auto px-4 py-2 bg-neuro-600 text-white text-xs md:text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-neuro-900/20 text-center flex flex-col justify-center items-center leading-tight";
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
                          <span key={i} className="block whitespace-nowrap">
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
                        <span key={i} className="block whitespace-nowrap">{line}</span>
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