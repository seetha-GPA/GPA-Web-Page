import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuX } from 'react-icons/lu';
import Navbar from '../components/Navbar';
import LoginWarningModal from '../components/LoginWarningModal';

const Contact = () => {
    const navigate = useNavigate();
    const [showLoginWarning, setShowLoginWarning] = useState(false);

    const handleApplyClick = () => {
        const token = localStorage.getItem('authToken');

        if (!token) {
            setShowLoginWarning(true);
            return;
        }

        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('apply-now');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-[#F0F9FF] font-sans">
            <Navbar />
            <LoginWarningModal
                isOpen={showLoginWarning}
                onClose={() => setShowLoginWarning(false)}
            />
            <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 relative">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
                        aria-label="Close"
                    >
                        <LuX className="w-6 h-6" />
                    </button>
                    <h1 className="text-3xl md:text-4xl font-bold text-gp-dark mb-6 text-center">Contact Us</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-xl font-bold text-gp-dark mb-4">Get in Touch</h2>
                            <p className="text-gray-600 mb-6">
                                Have questions about our programs? We're here to help you start your journey to a successful career.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gp-blue/10 flex items-center justify-center text-gp-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gp-dark">Email</h3>
                                        <p className="text-gray-600">support@growthpulse.academy</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gp-blue/10 flex items-center justify-center text-gp-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gp-dark">Phone</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h2 className="text-xl font-bold text-gp-dark mb-4">Ready to Start?</h2>
                            <p className="text-gray-600 mb-6">
                                Join our world-class training programs and kickstart your career today.
                            </p>
                            <button
                                onClick={handleApplyClick}
                                className="w-full py-3 rounded-md bg-gradient-to-r from-gp-purple to-gp-blue text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
