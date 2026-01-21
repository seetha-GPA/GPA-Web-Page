import React, { useState } from 'react';
import planet3d from '../assets/planet-3d.png';

const faqs = [
    {
        id: '01',
        question: 'Who is this program suitable for?',
        answer: 'This program is suitable for students, career switchers, freelancers, and IT professionals looking to upskill.'
    },
    {
        id: '02',
        question: 'Do I need prior programming experience?',
        answer: 'No, our courses are designed to take you from beginner to advanced levels. We start with the basics.'
    },
    {
        id: '03',
        question: 'What kind of projects will I work on?',
        answer: 'You will work on real-world industry projects that simulate actual work environments, including e-commerce sites, dashboards, and more.'
    },
    {
        id: '04',
        question: 'How do I create an account on the job board?',
        answer: 'Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use the advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level.',
        isOpen: true // Default open as per design
    },
    {
        id: '05',
        question: "What is meant by 'AI-Integrated Full Stack'?",
        answer: 'It means you will learn how to build full-stack applications that leverage AI tools and APIs for enhanced functionality.'
    }
];

const FAQ = () => {
    const [openId, setOpenId] = useState('04');

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F8F9FF]">
            <div className="relative mb-12 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gp-dark inline-block relative z-10">
                    Frequently asked Questions
                    {/* Decorative Arrow (Left) */}
                    <div className="absolute -top-8 -left-12 md:-left-16 w-12 md:w-16 text-gp-purple transform -rotate-12 hidden md:block">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 20 C 40 10, 10 40, 30 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                            <path d="M20 70 L 30 80 L 45 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                        </svg>
                    </div>
                    {/* Decorative Planet (Right) */}
                    <img
                        src={planet3d}
                        alt="Planet"
                        className="absolute -top-8 -right-16 md:-right-24 w-12 md:w-16 lg:w-20 animate-float hidden md:block"
                    />
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                    {faqs.slice(0, 3).map((faq) => (
                        <div
                            key={faq.id}
                            className={`rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all ${openId === faq.id ? 'bg-blue-50 border border-blue-100' : 'bg-white'}`}
                            onClick={() => toggleFAQ(faq.id)}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <span className={`font-bold px-2 py-1 rounded text-sm ${openId === faq.id ? 'text-blue-600 bg-blue-200' : 'text-gp-blue/50 bg-gp-blue/10'}`}>{faq.id}</span>
                                    <h3 className="font-semibold text-gp-dark">{faq.question}</h3>
                                </div>
                                <span className="text-gp-blue text-xl font-bold">{openId === faq.id ? '×' : '+'}</span>
                            </div>
                            {openId === faq.id && (
                                <p className="mt-4 text-gray-500 text-sm leading-relaxed animate-fadeIn">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {faqs.slice(3).map((faq) => (
                        <div
                            key={faq.id}
                            className={`rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all ${openId === faq.id ? 'bg-blue-50 border border-blue-100' : 'bg-white'}`}
                            onClick={() => toggleFAQ(faq.id)}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <span className={`font-bold px-2 py-1 rounded text-sm ${openId === faq.id ? 'text-blue-600 bg-blue-200' : 'text-gp-blue/50 bg-gp-blue/10'}`}>{faq.id}</span>
                                    <h3 className="font-semibold text-gp-dark">{faq.question}</h3>
                                </div>
                                <span className="text-gp-blue text-xl font-bold">{openId === faq.id ? '×' : '+'}</span>
                            </div>
                            {openId === faq.id && (
                                <p className="mt-4 text-gray-500 text-sm leading-relaxed animate-fadeIn">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
