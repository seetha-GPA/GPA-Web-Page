import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import iconFullStack from '../assets/icon-fullstack.png';
import iconMarketing from '../assets/icon-marketing.png';
import iconSecurity from '../assets/icon-security.png';
import iconAI from '../assets/icon-ai.png';

const programs = [
    {
        title: 'Full-Stack Development',
        description: 'Master frontend and backend technologies with hands-on projects in .NET, Java, or Python stacks.',
        features: ['Real-world projects', 'AI Integration', 'Industry mentorship'],
        image: iconFullStack,
        color: 'from-indigo-500 to-purple-600',
        subPrograms: [
            { name: 'Full Stack .NET', id: 'full-stack-dotnet' },
            { name: 'Full Stack Java', id: 'full-stack-java' },
            { name: 'Full Stack Python', id: 'full-stack-python' }
        ]
    },
    {
        title: 'Digital Marketing',
        id: 'digital-marketing',
        description: 'Learn SEO, social media marketing, content strategy, and analytics to drive business growth.',
        features: ['Campaign management', 'Analytics tools', 'Content creation'],
        image: iconMarketing,
        color: 'from-purple-500 to-pink-600'
    },
    {
        title: 'Cybersecurity',
        id: 'cybersecurity',
        description: 'Protect systems and networks with comprehensive training in security principles and practices.',
        features: ['Threat detection', 'Security protocols', 'Ethical hacking'],
        image: iconSecurity,
        color: 'from-blue-500 to-indigo-600'
    },
    {
        title: 'MERN/MEAN',
        description: 'Integrate artificial intelligence into applications with cutting-edge tools and frameworks.',
        features: ['Machine learning', 'AI libraries', 'Smart applications'],
        image: iconAI,
        color: 'from-violet-500 to-fuchsia-600',
        subPrograms: [
            { name: 'MERN', id: 'mern' },
            { name: 'MEAN', id: 'mean' }
        ]
    }
];

const Programs = () => {
    const navigate = useNavigate();
    const [activeCard, setActiveCard] = React.useState(null);

    return (
        <section id="courses" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F0F9FF]">
            <div className="mb-16 text-center md:text-left text-gp-dark">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">OUR MOST IN DEMAND PROGRAMS</h2>
                <p className="text-gp-muted text-lg max-w-2xl">Explore The Training Programs Designed To Accelerate Your Professional Growth.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {programs.map((program, index) => (
                    <div key={index} className="flex flex-col h-full relative group">
                        {/* Main Card */}
                        <div className={`bg-white rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-300 flex flex-col h-full border-2 ${program.highlight ? 'border-[#00AAFF]' : 'border-transparent'}`}>
                            {/* Card Header/Image Area */}
                            <div className={`h-56 bg-gradient-to-br ${program.color} flex items-center justify-center relative p-10`}>
                                <img src={program.image} alt={program.title} className="w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            {/* Card Body */}
                            <div className="p-8 flex-1 flex flex-col relative">
                                <h3 className="text-2xl font-bold text-gp-dark mb-4 leading-tight min-h-[3.5rem]">{program.title}</h3>
                                <p className="text-gray-500 mb-4 flex-grow leading-relaxed text-sm">{program.description}</p>

                                <ul className="space-y-2 mb-6">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-gray-700 flex items-center gap-3 font-medium">
                                            <span className="text-[#00AAFF] text-xl font-bold">✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => {
                                        if (program.subPrograms) {
                                            setActiveCard(activeCard === index ? null : index);
                                        } else {
                                            navigate(`/course/${program.id}`);
                                        }
                                    }}
                                    className="mt-auto w-full py-4 rounded-full bg-gradient-to-r from-[#7148E2] to-[#407CED] text-white font-bold text-sm shadow-md hover:brightness-110 hover:scale-[1.02] transition-all active:scale-95"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Sub-Programs Box (Overlay over button, listing down) */}
                        <AnimatePresence>
                            {program.subPrograms && activeCard === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-8 right-8 top-[calc(100%-5.5rem)] z-20"
                                >
                                    <div className="bg-white border border-gray-200 rounded-[1.5rem] overflow-hidden shadow-2xl p-1">
                                        {program.subPrograms.map((sub, idx) => (
                                            <div
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (sub.id === 'mean') navigate('/mean-developer-training');
                                                    else if (sub.id === 'mern') navigate('/mern-developer-training');
                                                    else navigate(`/course/${sub.id}`);
                                                }}
                                                className="px-4 py-3 text-sm font-bold text-gray-800 hover:bg-gp-purple/5 cursor-pointer transition-all flex items-center justify-between group/item rounded-xl"
                                            >
                                                <span>{sub.name}</span>
                                                <span className="opacity-0 group-hover/item:opacity-100 transition-opacity text-gp-purple font-black">→</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Programs;
