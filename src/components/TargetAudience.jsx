import React from 'react';

const audiences = [
    {
        title: 'Students',
        description: 'Practical training + real world projects for a strong career start.',
        icon: '🎓',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        title: 'Career Switchers',
        description: 'Hands-on skills + mentorship to confidently switch careers.',
        icon: '🚀',
        color: 'bg-purple-100 text-purple-600'
    },
    {
        title: 'Freelancers',
        description: 'Skill upgrades + certifications to grow credibility and clients.',
        icon: '💼',
        color: 'bg-orange-100 text-orange-600'
    },
    {
        title: 'IT Professionals',
        description: 'Advanced training + projects to accelerate career growth.',
        icon: '👨‍💻',
        color: 'bg-indigo-100 text-indigo-600'
    }
];

const TargetAudience = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 text-4xl opacity-20 rotate-12">💡</div>
            <div className="absolute top-10 right-10 text-6xl opacity-20 rotate-45 text-purple-500">⤹</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500 rounded-tl-3xl rounded-br-3xl -z-10"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500 rounded-tl-3xl rounded-br-3xl -z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Classroom"
                        className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gp-dark mb-4">
                        WHO IS GROWTHPULSE <br /> ACADEMY FOR?
                    </h2>
                    <p className="text-gray-500 mb-8">
                        This very extraordinary feature, can make learning activities more efficient
                    </p>

                    <div className="space-y-6">
                        {audiences.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${item.color} flex-shrink-0`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gp-dark">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
