import React from 'react';



const Mentoring: React.FC = () => {

    const EXPECTATIONS = [
        { text: "Passion for Research and Success", className: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-300 ring-rose-100 hover:bg-rose-100" },
        { text: "Transparency in Career Goals", className: "bg-sky-50 text-sky-700 border-sky-200 hover:border-sky-300 ring-sky-100 hover:bg-sky-100" },
        { text: "Alignment of Goals", className: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:border-indigo-300 ring-indigo-100 hover:bg-indigo-100" },
        { text: "Initiative and Ownership", className: "bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-300 ring-amber-100 hover:bg-amber-100" },
        { text: "Creativity and Productivity", className: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 hover:border-fuchsia-300 ring-fuchsia-100 hover:bg-fuchsia-100" },
        { text: "Scientific Integrity", className: "bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300 ring-slate-200 hover:bg-slate-200" },
        { text: "Resilience and Growth", className: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-300 ring-emerald-100 hover:bg-emerald-100" },
        { text: "Adaptability and Commitment", className: "bg-teal-50 text-teal-700 border-teal-200 hover:border-teal-300 ring-teal-100 hover:bg-teal-100" },
        { text: "Receptiveness to Feedback", className: "bg-violet-50 text-violet-700 border-violet-200 hover:border-violet-300 ring-violet-100 hover:bg-violet-100" },
        { text: "Collaboration and Team Spirit", className: "bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-300 ring-blue-100 hover:bg-blue-100" }
    ];

    return (
        <section id="mentoring" className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Mentoring Philosophy */}
                    <div>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Mentoring Philosophy</h2>
                        </div>

                        <div className="space-y-10">
                            {/* Point 1 */}
                            <div className="flex gap-5 items-center p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="flex-shrink-0">
                                    <i className="fa-solid fa-rocket text-neuro-600 text-3xl"></i>
                                </div>
                                <p className="text-xl text-slate-700 leading-relaxed">
                                    I want you to <span className="font-bold text-slate-900">SUCCEED</span> and have a <span className="font-bold text-slate-900">POSITIVE IMPACT</span> on your career
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="flex gap-5 items-center p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="flex-shrink-0">
                                    <i className="fa-solid fa-seedling text-neuro-600 text-3xl"></i>
                                </div>
                                <p className="text-xl text-slate-700 leading-relaxed">
                                    I will provide the <span className="font-bold text-slate-900">SUPPORT - training, opportunities, and resources</span> - to help you excel, to the <span className="italic">best of my abilities</span>
                                </p>
                            </div>

                            {/* Point 3 */}
                            <div className="flex gap-5 items-center p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="flex-shrink-0">
                                    <i className="fa-solid fa-user-shield text-neuro-600 text-3xl"></i>
                                </div>
                                <p className="text-xl text-slate-700 leading-relaxed">
                                    I will provide a <span className="font-bold text-slate-900">SAFE ENVIRONMENT</span> to embrace and learn from <span className="italic">mistakes</span>, explore <span className="italic">alternative solutions</span> to problems, and challenge perspectives
                                </p>
                            </div>

                            {/* Point 4 */}
                            <div className="flex gap-5 items-center p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="flex-shrink-0">
                                    <i className="fa-solid fa-handshake-simple text-neuro-600 text-3xl"></i>
                                </div>
                                <p className="text-xl text-slate-700 leading-relaxed">
                                    <span className="font-bold text-slate-900">TRUST</span> is fundamental in our relationship; I am here to guide you through your professional journey
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Lab Expectations */}
                    <div className="flex flex-col h-full">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Team Expectations</h2>
                        </div>

                        <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 flex-grow flex items-center justify-center">
                            <div className="flex flex-wrap gap-4 justify-center content-center max-w-lg mx-auto">
                                {EXPECTATIONS.map((item, index) => (
                                    <span
                                        key={index}
                                        className={`px-5 py-3 rounded-full text-lg font-bold border shadow-sm cursor-default transition-all duration-300 hover:scale-110 hover:-rotate-2 hover:shadow-md ${item.className}`}
                                    >
                                        {item.text}
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

export default Mentoring;
