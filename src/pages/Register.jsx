import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const isLogin = false; // Always false on Register page
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [windowScale, setWindowScale] = useState(1);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [isLoading, setIsLoading] = useState(false);

    // Scaling logic for responsiveness (kept same as login for consistency)
    useEffect(() => {
        const handleResize = () => {
            const scale = Math.min(window.innerWidth / 1728, window.innerHeight / 1098, 1);
            setWindowScale(scale);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: 'Registration successful! Redirecting to login...' });
                setTimeout(() => navigate('/login'), 2000);
            } else {
                setMessage({ type: 'error', text: data.message || 'Registration failed' });
            }
        } catch (error) {
            console.error('Register error:', error);
            setMessage({ type: 'error', text: 'Something went wrong. Please try again later.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-0 overflow-hidden">
            {/* 
               RESPONSIVE CONTAINER:
               Scales the entire design to fit the screen while maintaining 1728x1098 proportions.
            */}
            <div
                className="bg-white relative shadow-2xl overflow-hidden shadow-[#0000001A]"
                style={{
                    width: '1728px',
                    height: '1098px',
                    transform: `scale(${windowScale})`,
                    transformOrigin: 'center center',
                    flexShrink: 0,
                }}
            >
                {/* --- BACKGROUND ELEMENTS --- */}

                {/* STUDENT IMAGE */}
                <div
                    className="absolute"
                    style={{
                        width: '737px',
                        height: '909px',
                        top: '95px',
                        left: '64px',
                        borderRadius: '29px',
                        overflow: 'hidden',
                        zIndex: 1,
                    }}
                >
                    <img
                        src="/images/student.png"
                        alt="Student"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* LOGO */}
                <div
                    className="absolute"
                    style={{
                        width: '440px',
                        height: '154px',
                        top: '37px',
                        left: '1048px',
                        zIndex: 2,
                    }}
                >
                    <img
                        src="/images/growthpulse-logo.png"
                        alt="Logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* WELCOME TITLE */}
                <h2
                    className="absolute font-poppins font-normal"
                    style={{
                        width: '350px',
                        top: '228px',
                        left: '1114px',
                        fontSize: '16px',
                        color: '#000000',
                        zIndex: 2,
                    }}
                >
                    Welcome to Growthpulse Academy
                </h2>

                {/* TOGGLE CONTAINER */}
                <div
                    className="absolute flex p-1"
                    style={{
                        width: '329px',
                        height: '59px',
                        top: '276px',
                        left: '1092px',
                        borderRadius: '33px',
                        background: 'linear-gradient(116.94deg, #131F3C 1.27%, #1C388C 50.48%, #4B268C 98.01%)',
                        zIndex: 10,
                    }}
                >
                    <button
                        onClick={() => navigate('/login')}
                        className="flex-1 rounded-full relative overflow-hidden transition-all text-white border-none cursor-pointer"
                    >
                        {isLogin && (
                            <div className="absolute inset-0 bg-gradient-to-r from-[#9856EB] to-[#2473E5]" style={{ margin: '4px', borderRadius: '33px' }} />
                        )}
                        <span className="relative z-10 font-poppins font-medium">Login</span>
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                        className="flex-1 rounded-full relative overflow-hidden transition-all text-white border-none cursor-pointer"
                    >
                        {!isLogin && (
                            <div className="absolute inset-0 bg-gradient-to-r from-[#9856EB] to-[#2473E5]" style={{ margin: '4px', borderRadius: '33px' }} />
                        )}
                        <span className="relative z-10 font-poppins">Register</span>
                    </button>
                </div>

                {/* FORM PANEL BACKGROUND */}
                <div
                    className="absolute"
                    style={{
                        width: '538px',
                        height: '680px', // Slightly taller for extra field
                        top: '304px',
                        left: '987px',
                        borderRadius: '50px',
                        background: 'rgba(0, 0, 0, 0.05)',
                        zIndex: 1,
                    }}
                />

                {/* FEEDBACK MESSAGES */}
                {message.text && (
                    <div
                        className="absolute flex items-center justify-center text-center px-4 transition-all duration-300"
                        style={{
                            width: '435px',
                            height: '50px',
                            top: '400px',
                            left: '1039px',
                            zIndex: 150,
                            borderRadius: '12px',
                            backgroundColor: message.type === 'success' ? '#D1FAE5' : '#FEE2E2',
                            border: `1px solid ${message.type === 'success' ? '#10B981' : '#EF4444'}`,
                            color: message.type === 'success' ? '#065F46' : '#991B1B',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}
                    >
                        {message.text}
                    </div>
                )}

                {/* --- INTERACTIVE FORM FIELDS (Highest Z-Index) --- */}

                <form onSubmit={handleRegister}>
                    {/* EMAIL ADDRESS FIELD */}
                    <div
                        className="absolute"
                        style={{
                            width: '435px',
                            top: '450px',
                            left: '1039px',
                            zIndex: 100,
                        }}
                    >
                        <label className="block mb-2 font-poppins font-normal text-base text-black">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Email Address"
                            className="w-full h-[54px] rounded-[40px] border border-[#45108A] px-8 focus:outline-none focus:ring-2 focus:ring-[#9856EB]/50 bg-white font-poppins font-light text-[15px] text-black placeholder:text-[#ACACAC]"
                        />
                    </div>

                    {/* USERNAME FIELD */}
                    <div
                        className="absolute"
                        style={{
                            width: '435px',
                            top: '560px',
                            left: '1039px',
                            zIndex: 100,
                        }}
                    >
                        <label className="block mb-2 font-poppins font-normal text-base text-black">User name</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your User name"
                            className="w-full h-[54px] rounded-[40px] border border-[#45108A] px-8 focus:outline-none focus:ring-2 focus:ring-[#9856EB]/50 bg-white font-poppins font-light text-[15px] text-black placeholder:text-[#ACACAC]"
                        />
                    </div>

                    {/* PASSWORD FIELD */}
                    <div
                        className="absolute"
                        style={{
                            width: '435px',
                            top: '670px',
                            left: '1039px',
                            zIndex: 100,
                        }}
                    >
                        <label className="block mb-2 font-poppins font-normal text-base text-black">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your Password"
                                className="w-full h-[54px] rounded-[40px] border border-[#45108A] px-8 focus:outline-none focus:ring-2 focus:ring-[#9856EB]/50 bg-white font-poppins font-light text-[15px] text-black placeholder:text-[#ACACAC]"
                            />
                            {/* EYE TOGGLE ICON */}
                            <div
                                className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer w-[40px] h-[40px] flex items-center justify-center hover:opacity-80 transition-opacity z-[110]"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ pointerEvents: 'auto' }}
                                title={showPassword ? "Hide Password" : "Show Password"}
                            >
                                <div className="relative flex items-center justify-center">
                                    <svg
                                        width="26"
                                        height="18"
                                        viewBox="0 0 24 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition-all duration-300"
                                    >
                                        {/* Eye Outline */}
                                        <path
                                            d="M1 8C1 8 5 1 12 1C19 1 23 8 23 8C23 8 19 15 12 15C5 15 1 8 1 8Z"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        {/* Pupil */}
                                        <circle
                                            cx="12"
                                            cy="8"
                                            r="4"
                                            fill={showPassword ? "black" : "none"}
                                            stroke="black"
                                            strokeWidth={showPassword ? "0" : "1.5"}
                                        />
                                        {!showPassword && (
                                            <circle cx="12" cy="8" r="1.5" fill="black" />
                                        )}
                                        {/* Slash */}
                                        {!showPassword && (
                                            <line
                                                x1="3"
                                                y1="14"
                                                x2="21"
                                                y2="2"
                                                stroke="black"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                className="opacity-90"
                                            />
                                        )}
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* REMEMBER ME / FORGOT PASS */}
                    <div
                        className="absolute flex justify-between items-center"
                        style={{
                            width: '435px',
                            height: '24px',
                            top: '810px',
                            left: '1039px',
                            zIndex: 100,
                        }}
                    >
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="w-[15px] h-[15px] mr-2 cursor-pointer accent-[#9856EB]" />
                            <label htmlFor="remember" className="font-poppins font-light text-[12px] text-black cursor-pointer">Remember me</label>
                        </div>
                        <a href="#" className="font-poppins font-light text-[12px] text-black hover:text-[#9856EB] no-underline">Forgot Password?</a>
                    </div>

                    {/* REGISTER BUTTON */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`absolute text-white font-poppins font-normal text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-none ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        style={{
                            width: '232px',
                            height: '49px',
                            top: '860px',
                            left: '1242px',
                            borderRadius: '36px',
                            background: 'linear-gradient(116.94deg, #9856EB 1.27%, #2473E5 98.01%)',
                            zIndex: 110,
                        }}
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>

                </form>

                {/* ROBOT ILLUSTRATION */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        width: '343px',
                        height: '502px',
                        top: '524px',
                        left: '664px',
                        zIndex: 5,
                    }}
                >
                    <img
                        src="/images/login-robo.png"
                        alt="Robot"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* DESCRIPTION TEXT */}
                <div
                    className="absolute text-center pointer-events-none"
                    style={{
                        width: '454px',
                        top: '380px',
                        left: '1039px',
                        zIndex: 2,
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        color: '#5B5B5B',
                        lineHeight: '1.4',
                    }}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
            </div>
        </div>
    );
};

export default Register;
