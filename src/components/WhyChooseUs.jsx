import React from 'react';
import { FaChalkboardTeacher, FaProjectDiagram, FaUserTie } from 'react-icons/fa';

const features = [
    {
        id: '01',
        title: 'In-Person Learning',
        description: 'Direct interaction, instant feedback, and a lively classroom atmosphere with industry experts.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Classroom
        color: 'bg-black/50'
    },
    {
        id: '02',
        title: 'Corporate-Level Projects',
        description: 'Build confidence and job-readiness by applying skills to real time, large scale industry projects.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Team working
        color: 'bg-black/50'
    },
    {
        id: '03',
        title: 'Personalized Mentor Guidance',
        description: 'Complete one-on-one support and mentorship from industry experts throughout your career path.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Mentorship
        color: 'bg-black/50'
    }
];

const WhyChooseUs = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-[#F0F9FF]">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gp-dark">WHY CHOOSE GROWTHPULSE ACADEMY?</h2>
                <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gp-blue text-white hover:bg-gp-blue/90 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <div key={feature.id} className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
                        {/* Background Image */}
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                                {feature.description}
                            </p>

                            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white text-gp-dark flex items-center justify-center font-bold text-sm">
                                {feature.id}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
