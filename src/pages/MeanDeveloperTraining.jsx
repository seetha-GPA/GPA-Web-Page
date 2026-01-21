import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuMapPin, LuClock, LuAward } from 'react-icons/lu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MeanDeveloperTraining = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen font-sans flex flex-col">
            <Navbar variant="light" showLogin={false} />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#2DD4BF] via-[#0D9488] to-[#115E59] pt-32 pb-20 px-6 md:px-12 lg:px-24 text-white flex-grow overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-teal-400/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">
                        AI-Integrated MEAN Developer<br />
                        Training Program
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
                        {/* Card 1: Attendance */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] flex flex-col gap-2 shadow-xl hover:bg-white/15 transition-all">
                            <span className="text-3xl mb-2"><LuMapPin /></span>
                            <span className="text-white/70 text-sm font-medium">Attendance</span>
                            <span className="text-lg md:text-xl font-bold">In-Person</span>
                        </div>

                        {/* Card 2: Duration */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] flex flex-col gap-2 shadow-xl hover:bg-white/15 transition-all">
                            <span className="text-3xl mb-2"><LuClock /></span>
                            <span className="text-white/70 text-sm font-medium">Duration</span>
                            <span className="text-lg md:text-xl font-bold">350–400 Hours</span>
                        </div>

                        {/* Card 3: Outcome 1 */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] flex flex-col gap-2 shadow-xl hover:bg-white/15 transition-all">
                            <span className="text-3xl mb-2"><LuAward /></span>
                            <span className="text-white/70 text-sm font-medium">Outcome 1</span>
                            <span className="text-lg md:text-xl font-bold">Internship</span>
                        </div>

                        {/* Card 4: Outcome 2 */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] flex flex-col gap-2 shadow-xl hover:bg-white/15 transition-all">
                            <span className="text-3xl mb-2"><LuAward /></span>
                            <span className="text-white/70 text-sm font-medium">Outcome 2</span>
                            <span className="text-lg md:text-xl font-bold">Certificate</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="py-20 px-6 md:px-12 lg:px-24 bg-[#F0F9FF] text-left">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-medium text-gp-dark mb-8 leading-tight">
                        Master the MEAN Stack with Cutting-Edge AI Integration
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed text-left">
                        This 350–400-hour program is a detailed journey designed to equip students with essential skills in modern full-stack web development using the MEAN stack (MongoDB, Express.js, Angular 17, and Node.js), significantly enhanced with AI integration. The curriculum progresses from foundational JavaScript and SDLC concepts to advanced server-side development with Node.js/Express.js, database integration using MongoDB and Mongoose ORM, and dynamic frontend development with Angular, ensuring comprehensive industry readiness.
                    </p>
                </div>
            </div>

            {/* Core Modules Section */}
            <div className="py-20 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-5xl">
                    <div className="flex items-center gap-4 mb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#009688]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <h2 className="text-3xl md:text-5xl font-normal text-gp-dark">Core Modules & Technologies</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            "SDLC + JavaScript Foundations (Foundational concepts and core language mastery)",
                            "Node.js + Express.js (Building scalable backend and REST APIs)",
                            "MongoDB + Mongoose ORM (NoSQL database management and integration)",
                            "Angular 17 Basics + API Integration (Developing modern, single-page applications)",
                            "AI Fundamentals + Integration (Introducing AI concepts and applying them to the stack)",
                            "Testing + Deployment (Ensuring code quality and application launch)",
                            "Capstone Project + Review (Building a complete, real-world application)"
                        ].map((module, index) => (
                            <div key={index} className="flex items-center gap-6 p-6 rounded-2xl border border-[#009688]/20 bg-[#E0F2F1]/30 hover:bg-[#E0F2F1]/50 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-[#009688] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {index + 1}
                                </div>
                                <p className="text-lg text-gray-700 font-medium">{module}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Why Choose This Course Section */}
            <div className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFC]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gp-dark mb-16 text-center">Why Choose This Course?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Curriculum that matches the industry requirements and is created by leading AI and software development experts.",
                            "Practice-based projects with live AI integration to showcase your work.",
                            "Support covering the whole spectrum - knowledgeable mentor guidance, career coaching, and internships.",
                            "Besides the essential full-stack skills, get familiar with the newest AI tools that are used by cutting-edge web applications."
                        ].map((item, index) => (
                            <div key={index} className="flex gap-5 p-8 bg-gradient-to-br from-[#0D9488] to-[#115E59] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/10 items-start transform hover:-translate-y-1">
                                <span className="text-white text-2xl mt-1">★</span>
                                <p className="text-white/90 leading-relaxed text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* What's Next Section */}
            <div className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-[#0D9488] to-[#115E59] rounded-3xl p-10 md:p-16 shadow-2xl text-center text-white relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative z-10">What’s Next?</h2>
                        <div className="space-y-6 text-left inline-block max-w-3xl relative z-10">
                            {[
                                "Start your career as a MEAN developer with AI-enhanced MEAN stack expertise.",
                                "Create a professional portfolio that demonstrates AI-integrated applications.",
                                "Move into the technology sector as a Web Developer, AI Developer, or Software Engineer with the help of your skills and knowledge.",
                                "Continue developing by using cutting-edge tools and frameworks to remain industry leaders."
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-start group">
                                    <span className="text-white font-bold mt-1 text-xl group-hover:translate-x-1 transition-transform">→</span>
                                    <p className="text-lg text-white/90 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 px-6 md:px-12 lg:px-24 bg-[#006978] text-center text-white">
                <h2 className="text-3xl md:text-5xl font-medium mb-12">
                    Ready to launch your career with the power of MEAN and AI?
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="/contact" className="px-8 py-3 bg-white text-[#00796B] rounded-sm font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                        Enroll Now <span>→</span>
                    </Link>
                    <button className="px-8 py-3 bg-transparent border border-white text-white rounded-sm font-semibold hover:bg-white/10 transition-colors">
                        Reserve Your Spot
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MeanDeveloperTraining;
