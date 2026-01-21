import React from 'react';
import { motion } from 'framer-motion';
import robotHero from '../assets/header-image.png';

const Hero = () => {
    return (
        <section id="home" className="relative h-auto md:min-h-screen flex items-start md:items-center pt-32 pb-0 md:py-20 overflow-hidden bg-hero-gradient text-white">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gp-purple/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <div className="z-10">
                    <div className="inline-block px-4 py-1 rounded-full bg-gp-blue/20 border border-gp-blue/40 text-gp-blue text-xs font-semibold mb-6">
                        Transforming Students into Professionals
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        GET <span className="italic font-serif font-normal">JOB READY:</span><br />
                        HANDS ON TRAINING <br />
                        & REAL WORLD PROJECTS
                    </h1>

                    <p className="text-gp-muted text-base md:text-lg mb-8 max-w-lg">
                        Discover the pathway to in demand careers with immersive learning, industry projects, and a real time approach.
                    </p>

                    <button id="apply-now" className="px-8 py-3 rounded-md bg-gradient-to-r from-gp-purple to-gp-blue text-white font-semibold hover:opacity-90 transition-opacity">
                        Explore Programs
                    </button>
                </div>

                {/* Right Content - Robot Image */}
                <div className="relative z-30 flex justify-center lg:justify-end mt-32 md:mt-32 lg:mt-24">
                    <div className="relative w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gp-blue to-gp-purple rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <img src={robotHero} alt="AI Robot" className="relative w-full h-full object-contain drop-shadow-2xl scale-[2.0] sm:scale-[1.4] md:scale-[1.6] lg:scale-[1.8] xl:scale-[2.0]" />

                        {/* Floating Chat Bubble */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute -top-2 right-0 sm:right-2 md:-top-2 md:right-12 lg:top-0 lg:right-8 xl:-top-10 xl:right-[12%] bg-white text-gp-dark p-3 rounded-xl rounded-bl-none shadow-lg text-[10px] md:text-[11px] font-bold max-w-[150px] sm:max-w-[180px] leading-relaxed z-30"
                        >
                            HEY! WELCOME TO GP ACADEMY. LET'S GET YOU FUTURE-READY!
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-20">
                <svg className="relative block w-full h-[60px] md:h-[100px] lg:h-[150px] overflow-visible" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200" preserveAspectRatio="none">
                    <path d="M0,-10 Q600,220 1200,-10 L1200,200 L0,200 Z" className="fill-[#F0F9FF]" stroke="#F0F9FF" strokeWidth="2" shapeRendering="geometricPrecision"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
