import React from 'react';
import illustration from '../assets/world-class-illustration.png';
import iconAccessible from '../assets/icon-accessible.png';
import iconFun from '../assets/icon-fun.png';

const WorldClassTraining = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F0F9FF]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Illustration */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        src={illustration}
                        alt="World Class Training"
                        className="w-full h-auto max-w-[300px] md:max-w-[400px] lg:max-w-lg object-contain mx-auto"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gp-dark mb-8 leading-tight">
                        World Class <br />
                        Training, Real World <br />
                        Results
                    </h2>

                    <p className="text-gray-500 text-lg mb-12 leading-relaxed">
                        We offer world-class training programs that bridge the gap between your current position and your desired career goals, providing the skills and experience necessary for immediate professional success.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-[#4A2E6A] flex items-center justify-center flex-shrink-0 shadow-lg">
                                <img src={iconAccessible} alt="Easily Accessible" className="w-10 h-10 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gp-dark mb-1">Easily Accessible</h3>
                                <p className="text-sm text-gray-500 font-medium">Learning Will fell Very Comfortable With Courslab.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-[#4A2E6A] flex items-center justify-center flex-shrink-0 shadow-lg">
                                <img src={iconFun} alt="Fun learning experience" className="w-10 h-10 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gp-dark mb-1">Fun learning expe</h3>
                                <p className="text-sm text-gray-500 font-medium">Learning Will fell Very Comfortable With Courslab.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorldClassTraining;
