import React from 'react';

const guidanceFeatures = [
    {
        title: 'Real Career Support',
        description: 'Interview preparation to help you succeed in your job search.',
        icon: '🎯',
        color: 'text-red-500'
    },
    {
        title: 'Professional Resume Building',
        description: 'Workshops to create compelling resumes that stand out.',
        icon: '📄',
        color: 'text-blue-500'
    },
    {
        title: 'Personalized Guidance',
        description: 'One-on-one support to succeed in interviews and career decisions.',
        icon: '🤝',
        color: 'text-orange-500'
    },
    {
        title: 'Recognized Certification',
        description: 'Acquire industry recognized certifications for a competitive edge.',
        icon: '📜',
        color: 'text-yellow-500'
    }
];

const CareerGuidance = () => {
    return (
        <section id="blog" className="py-20 px-6 md:px-12 lg:px-24 bg-[#F0F9FF] relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gp-dark text-center mb-16">CAREER FOCUSED GUIDANCE</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {guidanceFeatures.map((feature, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group">
                        <div className={`text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gp-dark mb-3">{feature.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons (Visual only as per design) */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-lg lg:hidden">
                &lt;
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-lg lg:hidden">
                &gt;
            </button>
        </section>
    );
};

export default CareerGuidance;
