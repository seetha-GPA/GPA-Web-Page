import React, { useState, useEffect } from 'react';
import { FaStar, FaTimes, FaShareAlt } from 'react-icons/fa';
import Sentiment from 'sentiment';

const defaultReviews = [
    {
        id: 1,
        name: "Arjun Mehta",
        role: "Data Science Lead",
        rating: 5,
        time: "Feb 2026",
        initials: "AM",
        text: "The curriculum at GrowthPulse Academy is top-notch. I transitioned from a marketing background to a Data Science Lead in just 6 months. The hands-on projects were the highlights of my success story."
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Senior UX Designer",
        rating: 5,
        time: "Feb 2026",
        initials: "PS",
        text: "I loved the focus on practical design thinking. The mentors are industry experts who actually helped me land my dream role. Best decision for my career growth and professional success."
    },
    {
        id: 3,
        name: "David Chen",
        role: "Full Stack Engineer",
        rating: 5,
        time: "Feb 2026",
        initials: "DC",
        text: "Excellent coding bootcamp. The support system is incredible. If you're stuck, there's always someone to help you move forward. I successfully transitioned to a MERN stack role within weeks."
    },
    {
        id: 4,
        name: "Sarah Jenkins",
        role: "Product Director",
        rating: 5,
        time: "Jan 2026",
        initials: "SJ",
        text: "The leadership module was transformative. I learned how to manage cross-functional teams effectively. The networking opportunities alone skyrocketed my career trajectory significantly."
    },
    {
        id: 5,
        name: "Vikram Reddy",
        role: "Software Architect",
        rating: 5,
        time: "Jan 2026",
        initials: "VR",
        text: "The depth of technical training here is unmatched. We didn't just learn tools; we learned the 'why' behind the architecture. My successful placement was a direct result of this training."
    },
    {
        id: 6,
        name: "Ananya Iyer",
        role: "AI Researcher",
        rating: 5,
        time: "Jan 2026",
        initials: "AI",
        text: "The Machine Learning specialization is incredible. Real-world datasets and complex algorithms made easy. I am now thriving in a research position I once only dreamed of."
    },
    {
        id: 7,
        name: "Rohan Gupta",
        role: "Backend Engineer",
        rating: 5,
        time: "Jan 2026",
        initials: "RG",
        text: "Solid foundation in Node and Express. The project-based learning approach made everything click. I secured 3 job offers before even finishing the final module."
    },
    {
        id: 8,
        name: "Lisa Wang",
        role: "Frontend Specialist",
        rating: 5,
        time: "Dec 2025",
        initials: "LW",
        text: "Great focus on modern React. The section on state management was particularly helpful. I successfully rebuilt my company's entire frontend architecture using these skills."
    }
];

const Reviews = () => {
    // Initialize sentiment analyzer
    const sentiment = new Sentiment();

    const [reviews, setReviews] = useState(() => {
        const saved = localStorage.getItem('growthpulse_reviews_v4');
        try {
            return saved ? JSON.parse(saved) : defaultReviews;
        } catch (e) {
            return defaultReviews;
        }
    });

    const [formData, setFormData] = useState({ name: '', role: '', rating: 5, text: '' });
    const [hoveredStar, setHoveredStar] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        localStorage.setItem('growthpulse_reviews_v4', JSON.stringify(reviews));
    }, [reviews]);

    const handleStarClick = (rating) => {
        setFormData({ ...formData, rating: rating });
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: Date.now(),
            ...formData,
            initials: formData.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
            time: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
        setReviews([newReview, ...reviews]);
        setFormData({ name: '', role: '', rating: 5, text: '' });
        setIsModalOpen(false);
    };

    // Filter reviews by rating AND sentiment analysis
    const filteredReviews = reviews.filter(r => {
        // Must have 4+ stars
        if (r.rating < 4) return false;

        // Analyze sentiment of the review text
        const sentimentResult = sentiment.analyze(r.text);

        // Only show reviews with neutral or positive sentiment (score >= 0)
        // Negative scores indicate negative sentiment (sarcasm, complaints, etc.)
        return sentimentResult.score >= 0;
    });

    // Split for dual-row marquee
    const row1 = filteredReviews.filter((_, i) => i % 2 === 0);
    const row2 = filteredReviews.filter((_, i) => i % 2 !== 0);

    const scrollRow1 = [...row1, ...row1, ...row1];
    const scrollRow2 = [...row2, ...row2, ...row2];

    const ReviewCard = ({ review, index, isAlternate = false }) => {
        const isBlue = (index % 2 === 0 && !isAlternate) || (index % 2 !== 0 && isAlternate);

        return (
            <div className={`flex-shrink-0 w-[380px] bg-gradient-to-br from-white via-white to-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border flex flex-col h-[240px] justify-between transition-all hover:-translate-y-2 group
                ${isBlue
                    ? 'border-blue-100/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:border-blue-300'
                    : 'border-purple-100/50 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] hover:border-purple-300'}`}
            >
                <div className="flex-grow">
                    <p className={`text-gray-600 text-[15px] leading-relaxed italic line-clamp-4 group-hover:text-gray-900 transition-colors`}>
                        "{review.text}"
                    </p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                    {/* Dynamic Student Avatar / Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm transition-all group-hover:scale-110 shadow-sm
                        ${isBlue ? 'bg-blue-100 text-blue-700 shadow-blue-100/50' : 'bg-purple-100 text-purple-700 shadow-purple-100/50'}`}>
                        {review.initials || (review.name ? review.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : "GP")}
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">{review.name}</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1 mt-0.5">{review.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <FaStar key={s} className={s <= review.rating ? "text-yellow-400" : "text-gray-100"} size={12} />
                                ))}
                            </div>
                            <span className="text-[9px] text-blue-500 font-bold">• {review.time}</span>
                        </div>
                    </div>
                    <button className={`transition-colors ${isBlue ? 'text-blue-200 hover:text-blue-500' : 'text-purple-200 hover:text-purple-500'}`}>
                        <FaShareAlt size={14} />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <section className="py-24 bg-gradient-to-b from-[#F0F9FF] via-white to-[#FAF5FF] relative overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center animate-fade-in">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-white px-6 py-2 rounded-full shadow-sm border border-blue-100 flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em]">Student Triumphs</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Student <span className="text-blue-600 italic">success stories</span>
                    </h2>
                </div>
            </div>

            {/* Pattern Container - Staggered Marquee */}
            <div className="relative px-4 py-12">
                <div
                    className="space-y-12 cursor-ew-resize group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Row 1: Left Scroll */}
                    <div className="flex overflow-hidden relative">
                        <div className={`flex gap-8 ${isPaused ? 'pause-animation' : 'animate-horizontal-scroll'}`}>
                            {scrollRow1.map((rev, i) => <ReviewCard key={`${rev.id}-r1-${i}`} review={rev} index={i} />)}
                        </div>
                    </div>

                    {/* Row 2: Right Scroll */}
                    <div className="flex overflow-hidden relative">
                        <div className={`flex gap-8 ${isPaused ? 'pause-animation' : 'animate-horizontal-scroll-reverse'}`}>
                            {scrollRow2.map((rev, i) => <ReviewCard key={`${rev.id}-r2-${i}`} review={rev} index={i} isAlternate={true} />)}
                        </div>
                    </div>

                    {/* Fades */}
                    <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#F0F9FF] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#FAF5FF] to-transparent z-10 pointer-events-none"></div>
                </div>
            </div>

            {/* Controls - Centered Stars widget only */}
            <div className="container mx-auto px-6 mt-16 flex flex-col items-center gap-10">
                <div className="flex items-center gap-3 bg-white/60 px-8 py-5 rounded-full border border-blue-100 shadow-md backdrop-blur-md group hover:shadow-xl transition-all">
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest mr-2 group-hover:text-blue-500 transition-colors">Post story:</span>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <button
                                key={s}
                                onMouseEnter={() => setHoveredStar(s)}
                                onMouseLeave={() => setHoveredStar(0)}
                                onClick={() => handleStarClick(s)}
                                className="transition-all hover:scale-125"
                            >
                                <FaStar
                                    size={26}
                                    className={`${(hoveredStar || (isModalOpen && formData.rating)) >= s ? "text-yellow-400 drop-shadow-lg" : "text-gray-200"} transition-colors`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for posting stories */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
                    <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-lg overflow-hidden animate-slide-up" onClick={(e) => e.stopPropagation()}>
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-blue-50/30">
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Share Your Journey</h3>
                                <p className="text-blue-600 text-[11px] font-black uppercase tracking-widest mt-1">GrowthPulse Academy Alumni</p>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900 bg-white p-3 rounded-full shadow-sm">
                                <FaTimes size={18} />
                            </button>
                        </div>
                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="flex flex-col items-center gap-3 text-center mb-8">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Your Rating</p>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <button key={s} type="button" onClick={() => setFormData({ ...formData, rating: s })} onMouseEnter={() => setHoveredStar(s)} onMouseLeave={() => setHoveredStar(0)}>
                                                <FaStar size={32} className={(hoveredStar || formData.rating) >= s ? "text-yellow-400" : "text-gray-100"} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <input type="text" required placeholder="Display Name" className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                    <input type="text" placeholder="Current Role / Study Area" className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
                                    <textarea required rows="4" placeholder="Your GrowthPulse transformation story..." className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50 resize-none" value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })}></textarea>
                                </div>
                                <div className="flex items-center justify-between pt-4">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="text-[11px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest">Cancel</button>
                                    <button type="submit" className="px-10 py-4 bg-blue-600 text-white rounded-full font-black text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">Publish Story</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes horizontalScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes horizontalScrollReverse {
                    0% { transform: translateX(-33.33%); }
                    100% { transform: translateX(0); }
                }
                .animate-horizontal-scroll { animation: horizontalScroll 40s linear infinite; }
                .animate-horizontal-scroll-reverse { animation: horizontalScrollReverse 40s linear infinite; }
                .pause-animation { animation-play-state: paused; }
                
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
                .animate-slide-up { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

                .line-clamp-4 {
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default Reviews;
