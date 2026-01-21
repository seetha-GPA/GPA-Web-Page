import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuShield, LuCircleCheck, LuClock, LuAward, LuMapPin } from 'react-icons/lu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CybersecurityTraining = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen font-sans flex flex-col">
            <Navbar variant="light" showLogin={false} />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#DC2626] via-[#B91C1C] to-[#991B1B] pt-32 pb-20 px-6 md:px-12 lg:px-24 text-white flex-grow overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-red-400/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                        <LuShield className="w-16 h-16 md:w-20 md:h-20 text-white" />
                        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                            Cybersecurity Training Program
                        </h1>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
                        {/* Card 1: Attendance */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] flex flex-col gap-2 shadow-xl hover:bg-white/15 transition-all">
                            <span className="text-white/70 text-sm font-medium">Attendance</span>
                            <span className="text-lg md:text-xl font-bold">In-Person</span>
                        </div>

                        {/* Card 2: Duration */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] flex flex-col gap-2 shadow-xl hover:bg-white/15 transition-all">
                            <span className="text-white/70 text-sm font-medium">Duration</span>
                            <span className="text-lg md:text-xl font-bold">250–300 Hours</span>
                        </div>

                        {/* Card 3: Outcome 1 */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] flex flex-col gap-2 shadow-xl hover:bg-white/15 transition-all">
                            <span className="text-white/70 text-sm font-medium">Outcome 1</span>
                            <span className="text-lg md:text-xl font-bold">Internship</span>
                        </div>

                        {/* Card 4: Outcome 2 */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] flex flex-col gap-2 shadow-xl hover:bg-white/15 transition-all">
                            <span className="text-white/70 text-sm font-medium">Outcome 2</span>
                            <span className="text-lg md:text-xl font-bold">Certificate</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="py-20 px-6 md:px-12 lg:px-24 bg-[#FFF5F5] text-center md:text-left">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-medium text-gp-dark mb-8 leading-tight">
                        Defend Digital Assets: Hands-On Cybersecurity Training
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed text-justify md:text-left">
                        This focused 250–300-hour program is designed to build expertise in protecting computer networks and applications from evolving threats. Starting with cybersecurity basics, the program progresses through advanced network and system security, concluding with crucial web and application security methods. The curriculum emphasizes essentials, tools, and industry standards, culminating in a practical final project and internship that prepares you for junior-level, directly transferable cybersecurity roles.
                    </p>
                </div>
            </div>

            {/* Core Modules Section */}
            <div className="py-20 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <LuShield className="w-10 h-10 text-[#DC2626]" />
                        <h2 className="text-3xl md:text-5xl font-normal text-gp-dark">Core Modules & Defense Strategies</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            "Cybersecurity Fundamentals (The essential basics, concepts, and principles)",
                            "Network & System Security (Protecting infrastructures and operating systems)",
                            "Web & Application Security (Methods to secure digital assets and codebases)",
                            "Tools, Compliance & Final Project (Industry standards, practical tools, and capstone application)"
                        ].map((module, index) => (
                            <div key={index} className="flex items-center gap-6 p-6 rounded-2xl border border-[#DC2626]/20 bg-[#FEF2F2] hover:bg-[#FEE2E2] transition-colors">
                                <div className="w-10 h-10 rounded-full bg-transparent text-[#DC2626] flex items-center justify-center font-bold text-3xl flex-shrink-0">
                                    <LuShield />
                                </div>
                                <p className="text-lg text-gray-700 font-medium">{module}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose This Course Section */}
            <div className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFF5F5]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-normal text-gp-dark mb-16 text-center">Your Advantage in Cyber Defense</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Hands-On Threat Protection",
                                desc: "Gain the tactile skills needed to protect networks, systems, and applications from evolving cyber threats."
                            },
                            {
                                title: "Expert-Led Practical Learning",
                                desc: "Learn from experts through practical projects, cutting-edge tools, and industry-relevant compliance standards."
                            },
                            {
                                title: "Career Launchpad",
                                desc: "Prepare for high-demand entry-level cybersecurity roles with valuable internship experience."
                            },
                            {
                                title: "Breach Prevention",
                                desc: "Build crucial awareness to prevent costly security breaches often caused by human error."
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <LuCircleCheck className="w-6 h-6 text-green-600" />
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    <span className="font-medium text-gray-800">{item.title}:</span> {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* What's Next Section */}
            <div className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-normal text-gp-dark mb-12 text-center">What’s Next? Your Path in Cyber Defense</h2>

                    <div className="bg-[#FFF5F5] rounded-3xl p-10 md:p-16 border border-red-100 text-center relative overflow-hidden">
                        <p className="text-xl text-gray-700 mb-8">
                            Upon completion, you will be prepared to start your career in roles such as:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Security Analyst",
                                "Network Security Specialist",
                                "Incident Response Professional"
                            ].map((role, index) => (
                                <span key={index} className="px-6 py-3 bg-[#DC2626] text-white rounded-full font-medium text-lg shadow-sm">
                                    {role}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 px-6 md:px-12 lg:px-24 bg-[#991B1B] text-center text-white">
                <h2 className="text-3xl md:text-5xl font-medium mb-12">
                    Ready to join the front lines of digital defense?
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="/contact" className="px-8 py-3 bg-white text-[#DC2626] rounded-sm font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                        Enroll Now <span>→</span>
                    </Link>
                    <button className="px-8 py-3 bg-transparent border border-white text-white rounded-sm font-semibold hover:bg-white/10 transition-colors">
                        Secure Your Spot
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CybersecurityTraining;
