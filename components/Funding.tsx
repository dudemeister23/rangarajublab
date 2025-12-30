import React from 'react';
import { MPFI_LOGO, NIH_LOGO, CZI_LOGO, NIH_INNOVATOR_LOGO, DESANTIS_LOGO, GRUBER_LOGO, COLLABORATORS, FUNDING_URLS } from '../constants';

const Funding: React.FC = () => {
    return (
        <section id="funding" className="pt-14 pb-20 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Funding Category */}
                <div className="mb-20">
                    <div className="mb-12 border-b border-slate-200 pb-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">Funding</h2>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {/* MPFI */}
                        <a
                            href={FUNDING_URLS.MPFI}
                            target="_blank"
                            rel="noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={MPFI_LOGO}
                                alt="Max Planck Florida Institute"
                                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity mix-blend-multiply"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://mpfi.org/wp-content/themes/mpfi-child-2023/assets/img/logo.svg';
                                }}
                            />
                        </a>

                        {/* NIH */}
                        <a
                            href={FUNDING_URLS.NIH}
                            target="_blank"
                            rel="noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={NIH_LOGO}
                                alt="National Institutes of Health"
                                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity mix-blend-multiply"
                            />
                        </a>

                        {/* CZI */}
                        <a
                            href={FUNDING_URLS.CZI}
                            target="_blank"
                            rel="noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={CZI_LOGO}
                                alt="Chan Zuckerberg Initiative"
                                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity mix-blend-multiply"
                            />
                        </a>

                        {/* NIH Innovator */}
                        <a
                            href={FUNDING_URLS.NIH_INNOVATOR}
                            target="_blank"
                            rel="noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={NIH_INNOVATOR_LOGO}
                                alt="NIH Director's New Innovator Award"
                                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity mix-blend-multiply"
                            />
                        </a>

                        {/* DeSantis */}
                        <a
                            href={FUNDING_URLS.DESANTIS}
                            target="_blank"
                            rel="noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={DESANTIS_LOGO}
                                alt="Carl Angus DeSantis Foundation"
                                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity mix-blend-multiply"
                            />
                        </a>

                        {/* Gruber */}
                        <a
                            href={FUNDING_URLS.GRUBER}
                            target="_blank"
                            rel="noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={GRUBER_LOGO}
                                alt="Gruber Foundation"
                                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity mix-blend-multiply"
                            />
                        </a>

                        {/* Srybnik */}
                        <div className="h-24 px-6 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 group transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-neuro-200">
                            <span className="text-lg font-bold text-slate-700 text-center leading-tight group-hover:text-neuro-700 transition-colors">
                                Louis D. Srybnik<br />Foundation
                            </span>
                        </div>

                        {/* Fore */}
                        <div className="h-24 px-6 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 group transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-neuro-200">
                            <span className="text-lg font-bold text-slate-700 text-center leading-tight group-hover:text-neuro-700 transition-colors">
                                F.O.R.E.<br />Foundation
                            </span>
                        </div>
                    </div>
                </div>

                {/* Collaborators Category */}
                <div>
                    <div className="mb-12 border-b border-slate-200 pb-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">Past and Present Collaborators</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {COLLABORATORS.map((collaborator, index) => (
                            <a
                                key={index}
                                href={collaborator.url}
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-3 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-700 font-medium text-lg md:text-xl hover:border-neuro-200 hover:text-neuro-700 hover:shadow-md transition-all duration-300 cursor-pointer select-none"
                            >
                                {collaborator.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Funding;
