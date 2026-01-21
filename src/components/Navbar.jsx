import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo-white.png';
import logoColored from '../assets/logo-colored.png';

const Navbar = ({ variant = 'transparent', showLogin = true }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [showCourses, setShowCourses] = React.useState(false);
    const [user, setUser] = React.useState(null);

    const isLight = variant === 'light';

    React.useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        window.location.href = '/';
    };

    const navClasses = isLight
        ? "flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 bg-white relative w-full z-50 border-b border-gray-100"
        : "flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 bg-transparent absolute top-0 left-0 w-full z-50";

    const linkClasses = isLight
        ? "hover:text-gp-blue transition-colors"
        : "hover:text-white transition-colors";

    const activeLinkClasses = isLight
        ? "text-gp-blue border-b-2 border-gp-blue pb-1 transition-colors"
        : "text-white border-b-2 border-gp-blue pb-1 transition-colors";

    const menuTextClasses = isLight ? "text-gray-600" : "text-gray-300";

    return (
        <nav className={navClasses}>
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={isLight ? logoColored : logoWhite} alt="GrowthPulse Academy" className="h-16 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center gap-12 text-sm font-medium ${menuTextClasses}`}>
                <Link to="/" className={activeLinkClasses}>Home</Link>
                <Link to="/#about" className={linkClasses}>About</Link>
                <div className="relative" onMouseEnter={() => setShowCourses(true)} onMouseLeave={() => setShowCourses(false)}>
                    <div className={`${linkClasses} flex items-center gap-1 cursor-pointer py-4`}>
                        Courses
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-3 h-3 transition-transform ${showCourses ? 'rotate-180' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 origin-top overflow-hidden ${showCourses ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                        <Link to="/course/full-stack-dotnet" className="block px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-gp-blue transition-colors text-sm font-medium border-b border-gray-50 last:border-0 text-left">
                            Full Stack .NET
                        </Link>
                        <Link to="/course/full-stack-java" className="block px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-gp-blue transition-colors text-sm font-medium border-b border-gray-50 last:border-0 text-left">
                            Full Stack Java
                        </Link>
                        <Link to="/course/full-stack-python" className="block px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-gp-blue transition-colors text-sm font-medium border-b border-gray-50 last:border-0 text-left">
                            Full Stack Python
                        </Link>
                        <Link to="/mean-developer-training" className="block px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-gp-blue transition-colors text-sm font-medium border-b border-gray-50 last:border-0 text-left">
                            MEAN
                        </Link>
                        <Link to="/course/cybersecurity" className="block px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-gp-blue transition-colors text-sm font-medium border-b border-gray-50 last:border-0 text-left">
                            Cybersecurity
                        </Link>
                        <Link to="/course/digital-marketing" className="block px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-gp-blue transition-colors text-sm font-medium text-left">
                            Digital Marketing
                        </Link>
                        <Link to="/mern-developer-training" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gp-blue transition-colors text-sm font-medium">
                            MERN
                        </Link>
                    </div>
                </div>
                <a href="#blog" className={linkClasses}>Blog</a>
                <Link to="/contact" className={linkClasses}>Contact</Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-6">
                {!user && showLogin && (
                    <Link to="/login" className={`${menuTextClasses} hover:text-gp-blue transition-colors text-sm font-medium`}>Login</Link>
                )}

                {user ? (
                    <div className="flex items-center gap-4">
                        <div className={`px-6 py-2 rounded-full border text-sm font-medium flex items-center gap-2 ${isLight ? 'bg-gray-50 border-gray-200 text-gray-700' : 'bg-white/10 backdrop-blur-md border-white/20 text-white'}`}>
                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                            USER ID: {user.id}
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-6 py-2 rounded-md bg-gradient-to-r from-gp-purple to-gp-blue text-white hover:opacity-90 transition-opacity text-sm font-semibold cursor-pointer border-none shadow-md"
                        >
                            Log out
                        </button>
                    </div>
                ) : (
                    <Link to="/contact" className="px-8 py-2.5 rounded-md bg-gradient-to-r from-[#5961FF] to-[#A02DE2] text-white hover:opacity-90 transition-opacity text-sm font-bold shadow-lg">
                        Contact
                    </Link>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button className={`md:hidden p-2 ${isLight ? 'text-gray-800' : 'text-white'}`} onClick={toggleMenu}>
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className={`absolute top-full left-0 w-full p-6 flex flex-col gap-6 md:hidden shadow-xl border-t ${isLight ? 'bg-white border-gray-100' : 'bg-gp-dark/95 backdrop-blur-md border-white/10'}`}>
                    <a href="/" className={`${isLight ? 'text-gp-blue' : 'text-white'} text-lg font-medium`} onClick={toggleMenu}>Home</a>
                    <a href="#about" className={`${menuTextClasses} hover:text-gp-blue text-lg font-medium`} onClick={toggleMenu}>About</a>
                    <a href="#courses" className={`${menuTextClasses} hover:text-gp-blue text-lg font-medium`} onClick={toggleMenu}>Courses</a>
                    <a href="#blog" className={`${menuTextClasses} hover:text-gp-blue text-lg font-medium`} onClick={toggleMenu}>Blog</a>
                    <Link to="/contact" className={`${menuTextClasses} hover:text-gp-blue text-lg font-medium`} onClick={toggleMenu}>Contact</Link>
                    {user ? (
                        <>
                            <div className={`${isLight ? 'text-gray-700' : 'text-white'} text-lg font-medium border-l-4 border-gp-purple pl-4`}>
                                USER ID: {user.id}
                            </div>
                            <button
                                onClick={() => { handleLogout(); toggleMenu(); }}
                                className="px-6 py-3 rounded-md bg-gradient-to-r from-gp-purple to-gp-blue text-white text-center font-semibold border-none"
                            >
                                Log out
                            </button>
                        </>
                    ) : (
                        <>
                            {showLogin && <Link to="/login" className={`${menuTextClasses} hover:text-gp-blue text-lg font-medium`} onClick={toggleMenu}>Login</Link>}
                            <Link to="/register" className="px-6 py-3 rounded-md bg-gradient-to-r from-[#5961FF] to-[#A02DE2] text-white text-center font-bold" onClick={toggleMenu}>Contact</Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
