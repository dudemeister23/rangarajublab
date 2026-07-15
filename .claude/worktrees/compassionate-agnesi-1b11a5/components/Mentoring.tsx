import React from 'react';



const Mentoring: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    const EXPECTATIONS = [
        {
            text: "Passion for Research and Success",
            subtitle: "Demonstrate enthusiasm and dedication toward our scientific endeavors",
            className: "bg-neuro-600 text-white border-neuro-600"
        },
        {
            text: "Transparency in Career Goals",
            subtitle: "Communicate your career aspirations openly and honestly",
            className: "bg-neuro-600 text-white border-neuro-600"
        },
        {
            text: "Alignment of Goals",
            subtitle: "Ensure that your personal and project objectives are in sync with the lab's mission",
            className: "bg-neuro-600 text-white border-neuro-600"
        },
        {
            text: "Initiative and Ownership",
            subtitle: "Take proactive steps to drive your project forward",
            className: "bg-neuro-600 text-white border-neuro-600"
        },
        {
            text: "Creativity and Productivity",
            subtitle: "Strive for innovative solutions and maintain consistent progress in project milestones; value time by exhibiting proactive prioritization and intentional urgency",
            className: "bg-neuro-600 text-white border-neuro-600"
        },
        {
            text: "Scientific Integrity",
            subtitle: "Uphold honesty and accuracy in all scientific findings and reporting",
            className: "bg-neuro-600 text-white border-neuro-600"
        },
        {
            text: "Resilience and Growth",
            subtitle: "Embrace errors and failures as opportunities for growth and continuous improvement",
            className: "bg-neuro-600 text-white border-neuro-600"
        },
        {
            text: "Commitment and Adaptability",
            subtitle: "Be open to challenges and committed to the success of your project and the team",
            className: "bg-neuro-600 text-white border-neuro-600"
        },
        {
            text: "Receptiveness to Feedback",
            subtitle: "Maintain a growth mindset by actively seeking and integrating constructive feedback",
            className: "bg-neuro-600 text-white border-neuro-600"
        },
        {
            text: "Collaboration and Team Spirit",
            subtitle: "Show respect and offer assistance to colleagues, fostering a culture of collaboration",
            className: "bg-neuro-600 text-white border-neuro-600"
        }
    ];

    return (
        <section id="mentoring" className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Mentoring Philosophy */}
                    <div className="flex flex-col h-full">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Mentoring Philosophy</h2>
                        </div>

                        <div className="flex-grow flex flex-col justify-between gap-6">
                            {/* Point 1 */}
                            <div className="flex gap-5 items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="flex-shrink-0">
                                    <i className="fa-solid fa-rocket text-neuro-600 text-3xl"></i>
                                </div>
                                <p className="text-[22px] text-slate-700 leading-relaxed">
                                    I want you to <span className="font-bold text-slate-900">SUCCEED</span> and have a <span className="font-bold text-slate-900">POSITIVE IMPACT</span> on your career
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="flex gap-5 items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="flex-shrink-0">
                                    <i className="fa-solid fa-seedling text-neuro-600 text-3xl"></i>
                                </div>
                                <p className="text-[22px] text-slate-700 leading-relaxed">
                                    I will provide the <span className="font-bold text-slate-900">SUPPORT - training, opportunities, and resources</span> - to help you excel, to the <span className="italic">best of my abilities</span>
                                </p>
                            </div>

                            {/* Point 3 */}
                            <div className="flex gap-5 items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="flex-shrink-0">
                                    <i className="fa-solid fa-user-shield text-neuro-600 text-3xl"></i>
                                </div>
                                <p className="text-[22px] text-slate-700 leading-relaxed">
                                    I will provide a <span className="font-bold text-slate-900">SAFE ENVIRONMENT</span> to embrace and learn from <span className="italic">mistakes</span>, explore <span className="italic">alternative solutions</span> to problems, and challenge perspectives
                                </p>
                            </div>

                            {/* Point 4 */}
                            <div className="flex gap-5 items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="flex-shrink-0">
                                    <i className="fa-solid fa-handshake-simple text-neuro-600 text-3xl"></i>
                                </div>
                                <p className="text-[22px] text-slate-700 leading-relaxed">
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

                        <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 flex-grow flex items-center justify-center min-h-[760px]">
                            <div className="flex flex-col gap-3 w-full max-w-lg mx-auto">
                                {EXPECTATIONS.map((item, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        className={`px-6 py-3 rounded-3xl text-lg font-bold border shadow-sm cursor-default transition-all duration-300 text-center w-full ${item.className} ${hoveredIndex === index ? 'shadow-xl scale-[1.02] z-10' : 'hover:scale-100'}`}
                                    >
                                        <div className="leading-tight">{item.text}</div>
                                        <div
                                            className={`grid transition-[grid-template-rows] duration-300 ease-out ${hoveredIndex === index ? 'grid-rows-[1fr] opacity-100 pt-2 border-t border-white/20 mt-2' : 'grid-rows-[0fr] opacity-0 pt-0 border-t-0 mt-0'}`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="text-sm font-normal leading-snug">
                                                    {item.subtitle}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
