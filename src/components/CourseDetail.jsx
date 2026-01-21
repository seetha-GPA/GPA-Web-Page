import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { LuMapPin, LuClock, LuAward, LuBookOpen } from 'react-icons/lu';

const courseData = {
    'full-stack-dotnet': {
        title: 'AI-Integrated Full Stack .NET Developer Training Program',
        heroStats: [
            { label: 'Attendance', value: 'In-Person', icon: <LuMapPin /> },
            { label: 'Duration', value: '350-400 Hours', icon: <LuClock /> },
            { label: 'Outcome 1', value: 'Internship', icon: <LuAward /> },
            { label: 'Outcome 2', value: 'Certificate', icon: <LuAward /> }
        ],
        description: {
            title: 'Build Smart, Scalable, AI-Powered Web Applications',
            content: 'This immersive full-time course provides 350-400 hours of hands-on training to transform you into a future-ready developer. You will master contemporary full-stack technologies like ASP.NET MVC, Angular, Entity Framework Core, and SQL Server, while learning to integrate cutting-edge AI tools for intelligent functionalities. The program culminates in real-world project implementation, software testing, deployment skills, and a professional internship.'
        },
        modules: [
            { title: 'SDLC + .NET Basics', subtitle: '(Software Development Lifecycle & Foundational .NET)' },
            { title: 'ASP.NET MVC', subtitle: '(Building robust server-side applications)' },
            { title: 'Entity Framework Core + SQL Server', subtitle: '(Advanced database access and management)' },
            { title: 'Web API + Angular 17 Basics', subtitle: '(Creating RESTful services and modern frontend foundation)' },
            { title: 'Angular Advanced + Integration + AI Implementation', subtitle: '(Deep dive into frontend and embedding intelligent features)' },
            { title: 'Data Structures + Testing + Azure basics and Deployment', subtitle: '(Ensuring efficiency and application quality)' }
        ],
        whyChoose: [
            'Curriculum that matches the industry requirements and is created by leading AI and software development experts.',
            'Practice-based projects with live AI integration to showcase your work.',
            'Support covering the whole spectrum - knowledgeable mentor guidance, career coaching, and internships.',
            'Besides the essential full-stack skills, get familiar with the newest AI tools that are used by cutting-edge web applications.'
        ],
        outcomes: [
            'Start your career as a full-stack developer with AI-powered abilities.',
            'Create a professional portfolio that demonstrates advance AI-integrated applications.',
            'Continue developing your skills using cutting-edge tools and frameworks to remain industry leaders.'
        ],
        roles: ['Web Developer', 'AI Developer', 'Software Engineer'],
        theme: {
            primary: '#4227F5',
            light: '#EFF4FF',
            border: 'rgba(66, 39, 245, 0.2)',
            shadow: 'rgba(66, 39, 245, 0.3)',
            lightSection: '#F0F9FF'
        }
    },
    'full-stack-java': {
        title: 'AI-Integrated Full Stack Java Developer Training Program',
        heroStats: [
            { label: 'Attendance', value: 'In-Person', icon: <LuMapPin /> },
            { label: 'Duration', value: '350-400 Hours', icon: <LuClock /> },
            { label: 'Outcome 1', value: 'Internship', icon: <LuAward /> },
            { label: 'Outcome 2', value: 'Certificate', icon: <LuAward /> }
        ],
        description: {
            title: 'Master Full-Stack Java Development with AI Capabilities',
            content: 'This comprehensive course provides the exhaustive training needed to become technically proficient in both frontend and backend Java development, specifically with AI integration capabilities. You will gain expertise in Java core programming, the Spring Boot framework, React frontend technology, and MySQL/JPA database management. The program features basic AI concepts and demonstrates how to utilize AI tools and algorithms in full-stack projects, culminating in real-world project experience, testing, and deployment for immediate industry readiness.'
        },
        modules: [
            { title: 'SDLC + Java Basics', subtitle: '(Software Development Lifecycle & Core Programming)' },
            { title: 'Java Web Development (Spring Boot)', subtitle: '(Building robust, scalable backend services)' },
            { title: 'MySQL + JPA Integration', subtitle: '(Database management and persistence layers)' },
            { title: 'React Basics + API Integration', subtitle: '(Developing modern, responsive user interfaces)' },
            { title: 'AI Fundamentals + Integration', subtitle: '(Introducing AI concepts and applying tools in projects)' },
            { title: 'Testing + Deployment', subtitle: '(Ensuring application quality and going live)' },
            { title: 'Capstone Project + Review', subtitle: '(Demonstrating comprehensive skill mastery)' }
        ],
        whyChoose: [
            'Industry-Aligned Curriculum: Created by leading AI and software development experts to meet current industry requirements.',
            'Live AI Integration Projects: Engage in practice-based projects with live AI features to build an advanced portfolio.',
            'AI Tool Familiarity: Acquire essential full-stack skills plus familiarity with the newest AI tools used by cutting-edge web applications.',
            'Comprehensive Support: Benefit from knowledgeable mentor guidance, career coaching, and professional internships.'
        ],
        outcomes: [
            'Start your career as a full-stack Java developer.',
            'Build industry-standard applications with Spring Boot and React.',
            'Integrate AI features into your web applications.'
        ],
        roles: ['Java Developer', 'Full Stack Engineer', 'Backend Developer'],
        theme: {
            primary: '#16A34A',
            light: '#F0FDF4',
            border: 'rgba(22, 163, 74, 0.2)',
            shadow: 'rgba(22, 163, 74, 0.3)',
            lightSection: '#F0FDF4'
        }
    },
    'full-stack-python': {
        title: 'AI-Integrated Full Stack Python Developer Training Program',
        heroStats: [
            { label: 'Attendance', value: 'In-Person', icon: <LuMapPin /> },
            { label: 'Duration', value: '350-400 Hours', icon: <LuClock /> },
            { label: 'Outcome 1', value: 'Internship', icon: <LuAward /> },
            { label: 'Outcome 2', value: 'Certificate', icon: <LuAward /> }
        ],
        description: {
            title: 'The Future of Development: Python Full Stack with AI Integration',
            content: 'This intensive 350–400-hour program transforms you into a versatile developer, mastering full-stack development with Python. You will learn to incorporate AI across the backend, frontend, and database layers using key technologies like Python, Flask/Django, MySQL, React, and popular AI libraries.'
        },
        modules: [
            { title: 'SDLC + Python Basics', subtitle: '(Software Development Lifecycle & Foundational Programming)' },
            { title: 'Python Web Development (Flask/Django)', subtitle: '(Building robust backend applications)' },
            { title: 'MySQL + ORM Integration', subtitle: '(Database management and Object-Relational Mapping)' },
            { title: 'React Basics + API Integration', subtitle: '(Developing modern, dynamic user interfaces)' },
            { title: 'AI Fundamentals + Python Libraries', subtitle: '(Introducing core AI concepts and utilizing libraries like TensorFlow/PyTorch/scikit-learn)' },
            { title: 'Testing + Deployment', subtitle: '(Ensuring application quality and deployment readiness)' },
            { title: 'Capstone Project + Review', subtitle: '(Demonstrating comprehensive skill mastery)' }
        ],
        whyChoose: [
            'Versatile Skill Set: Master Python, the most popular language for AI and backend development.',
            'AI-First Approach: Learn to integrate AI models directly into your web applications.',
            'Modern Stack: Combine Python\'s power with React\'s dynamic frontend capabilities.',
            'Career Readiness: Build a portfolio of real-world projects that employers love.'
        ],
        outcomes: [
            'Become a proficient Full Stack Python Developer.',
            'Build scalable web applications with Django and React.',
            'Implement AI features using Python libraries.'
        ],
        roles: ['Python Developer', 'Full Stack Engineer', 'AI Specialist'],
        theme: {
            primary: '#EA580C', // Orange-600
            light: '#FFF7ED',   // Orange-50
            border: 'rgba(234, 88, 12, 0.2)',
            shadow: 'rgba(234, 88, 12, 0.3)',
            lightSection: '#FFFAF0',
            gradient: 'linear-gradient(to right, #EA580C, #C2410C)' // Orange-600 to Orange-700
        }
    },
    'digital-marketing': {
        title: 'Digital Marketing Training Program',
        heroStats: [
            { label: 'Attendance', value: 'In-Person', icon: <LuMapPin /> },
            { label: 'Duration', value: '200 Hours', icon: <LuClock /> },
            { label: 'Outcome 1', value: 'Internship', icon: <LuAward /> },
            { label: 'Outcome 2', value: 'Certificate', icon: <LuAward /> }
        ],
        description: {
            title: 'Master Online Engagement and Visibility',
            content: 'This focused 200-hour program is designed to build your digital marketing skills from the ground up. You will master essential concepts, including SEO, AEO, and content strategy, with a strong focus on driving online visibility. The course provides practical training in Meta Ads and GEO targeting for precise advertising, alongside hands-on experience with data analytics and email automation to measure and optimize campaigns. By the end, you will have the real-world experience needed to successfully launch your digital marketing career.'
        },
        modules: [
            { title: 'Digital Marketing Foundations', subtitle: '(Essential concepts and framework)' },
            { title: 'SEO + AEO + Content Strategy', subtitle: '(Driving organic traffic and visibility)' },
            { title: 'Meta Ads + GEO Targeting', subtitle: '(Paid social media advertising and audience precision)' },
            { title: 'Data Analytics + Email Automation', subtitle: '(Measuring performance and nurturing leads)' },
            { title: 'Strategy + Final Project', subtitle: '(Putting it all together into a comprehensive campaign)' }
        ],
        whyChoose: [
            'Practical, Hands-On Training: Get practical training that ensures you stand out in the competitive digital marketing field.',
            'Latest Tools & Strategies: Gain expertise in the newest tools and strategies for SEO, advertising, and analytics.',
            'Real-World Application: Benefit from hands-on internship experience to apply knowledge in live, real-world campaigns.',
            'Career Boost: Build a professional portfolio and earn a recognized certificate to showcase your expertise and boost opportunities.'
        ],
        outcomes: [
            'Launch a career in Digital Marketing',
            'Master SEO and Social Media Strategies',
            'Run effective Ad Campaigns'
        ],
        roles: ['Digital Marketing Executive', 'SEO Specialist', 'Social Media Manager', 'Email Marketing Coordinator'],
        theme: {
            primary: '#DB2777', // Pink-600
            light: '#FDF2F8',   // Pink-50
            border: 'rgba(219, 39, 119, 0.2)',
            shadow: 'rgba(219, 39, 119, 0.3)',
            lightSection: '#FDF2F8',
            gradient: 'linear-gradient(to right, #A855F7, #EC4899)' // Purple-500 to Pink-500
        },
        advantageTitle: 'Your Digital Marketing Advantage',
        trajectoryTitle: "What's Next? Your Path in Marketing"
    }
};

const CourseDetail = () => {
    const { courseId } = useParams();
    const course = courseData[courseId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [courseId]);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F0F9FF]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gp-dark mb-4">Course Not Found</h1>
                    <Link to="/" className="text-gp-purple hover:underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar variant="light" showLogin={false} />

            {/* Hero Section */}
            <section className="py-20 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden" style={{ background: course.theme.gradient || course.theme.primary }}>
                <div className="max-w-7xl mx-auto py-12">
                    <h1 className="text-4xl md:text-7xl font-bold mb-12 leading-tight max-w-5xl tracking-tight">
                        {course.title}
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {course.heroStats.map((stat, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] flex flex-col gap-2 shadow-xl hover:bg-white/15 transition-all">
                                <span className="text-3xl mb-2">{stat.icon}</span>
                                <span className="text-white/70 text-sm font-medium">{stat.label}</span>
                                <span className="text-lg md:text-xl font-bold">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </section>

            {/* Description Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24" style={{ backgroundColor: course.theme.lightSection }}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-medium text-gp-dark mb-10 leading-tight md:max-w-3xl">
                        {course.description.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium md:max-w-6xl">
                        {course.description.content}
                    </p>
                </div>
            </section>

            {/* Core Modules Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <LuBookOpen className="text-4xl" style={{ color: course.theme.primary }} />
                        <h2 className="text-4xl md:text-5xl font-medium text-gp-dark">Core Modules & Technologies</h2>
                    </div>

                    <div className="space-y-6">
                        {course.modules.map((module, idx) => (
                            <div key={idx} className="p-6 md:p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all group flex items-start gap-6" style={{ backgroundColor: course.theme.light, borderColor: course.theme.border }}>
                                <span className="w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg" style={{ backgroundColor: course.theme.primary, boxShadow: `0 10px 15px -3px ${course.theme.shadow}` }}>
                                    {idx + 1}
                                </span>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                        {module.title}
                                    </h3>
                                    <p className="text-lg text-gray-500 font-medium">
                                        {module.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Your Advantage Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24" style={{ backgroundColor: course.theme.lightSection }}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-medium text-gp-dark mb-16 text-center">{course.advantageTitle || 'Your Advantage in the Tech Industry'}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Map content differently if distinct structure needed, but mapped list handles strings ok. 
                            Wait, course.whyChoose is an ARRAY of STRINGS.
                            The current map (lines 198-210) expects an OBJECT {title, content}.
                            Refactor map to handle string array OR objects, OR simpler: update java/dotnet data to match new structure?
                            Actually, previous data for 'full-stack-dotnet' uses the ARRAY OF STRINGS in `whyChoose`?
                            No, let's check `courseData` again.
                            
                            Wait, checking previous files...
                            The `whyChoose` in `full-stack-java` was:
                            whyChoose: [
                                'Industry-Aligned Curriculum: Created by...',
                                ...
                            ]
                            BUT the map function at line 198 (in viewed file Step 510) is:
                            {[...].map((item, idx) => ... item.title ... item.content)}
                            
                            Ah! The `CourseDetail.jsx` currently has a HARDCODED array `[...]` inside the render (lines 182-197), it does NOT use `course.whyChoose`.
                            I need to change this to use `course.whyChoose`.
                            
                            My `full-stack-java` data provided `whyChoose` as STRINGS.
                            My `full-stack-python` data provided `whyChoose` as STRINGS.
                            My `digital-marketing` data provided `whyChoose` as STRINGS.
                            
                            The HARDCODED array has `{title, content}`.
                            
                            I should Refactor the mapping to use `course.whyChoose`.
                            And since my data strings are "Title: Content", I can split them.
                         */}
                        {course.whyChoose.map((item, idx) => {
                            const [title, content] = item.includes(':') ? item.split(': ') : [item, ''];
                            return (
                                <div key={idx} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: course.theme.light }}>
                                        <span className="text-2xl font-bold" style={{ color: course.theme.primary }}>✓</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-tight">
                                        {title}
                                    </h3>
                                    <p className="text-lg text-gray-500 font-medium leading-relaxed">
                                        {content || item}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Trajectory Section */}
            {/* Trajectory Section */}
            {!['full-stack-java', 'full-stack-python'].includes(courseId) && (
                <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 mb-16 justify-center">
                            {courseId !== 'digital-marketing' && <span className="text-4xl text-[#0066FF]">📈</span>}
                            <h2 className="text-4xl md:text-5xl font-medium text-gp-dark text-center">{course.trajectoryTitle || "What's Next? Your Career Trajectory"}</h2>
                        </div>

                        <div className="bg-[#EBF5FF] rounded-[3rem] p-10 md:p-16 border border-[#BDE0FF] relative overflow-hidden" style={{ backgroundColor: course.theme.light, borderColor: course.theme.border }}>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-800 mb-8">Upon completion, you will be empowered to:</h3>
                                <ul className="space-y-6 mb-12">
                                    {course.outcomes.map((outcome, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-xl font-semibold text-gray-700">
                                            <span className="text-[#34C759] text-2xl font-bold">✓</span>
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl mt-12">
                                    <p className="text-gray-500 font-bold mb-6 text-lg uppercase tracking-wider">Move into the technology sector in high-demand roles like:</p>
                                    <div className="flex flex-wrap gap-4">
                                        {course.roles.map((role, idx) => (
                                            <button key={idx} className="px-8 py-4 text-white rounded-full font-black text-lg shadow-lg hover:scale-105 transition-all" style={{ backgroundColor: course.theme.primary }}>
                                                {role}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Subtle background blob */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                    </div>
                </section>
            )}

            {/* Bottom Call to Action */}
            <section className="py-24 px-6 md:px-12 lg:px-24 text-center text-white relative overflow-hidden" style={{ backgroundColor: course.theme.primary }}>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-12 leading-tight tracking-tight">
                        {courseId === 'full-stack-python'
                            ? 'Ready to master the most versatile stack in tech?'
                            : courseId === 'digital-marketing'
                                ? 'Ready to drive results with data-driven marketing?'
                                : `Ready to build the future of ${courseId.includes('java') ? 'Java Development' : 'Web Development'}?`
                        }
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/contact" className="px-8 py-3 bg-white rounded-sm font-semibold text-base shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all flex items-center gap-2" style={{ color: course.theme.primary }}>
                            Enroll Now <span>→</span>
                        </Link>
                        <button className="px-8 py-3 border border-white text-white rounded-sm font-semibold text-base hover:bg-white/10 transition-all">
                            Download Syllabus
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
                </div>
            </section>

            <Footer themeColor={course.theme.primary} />
        </div>
    );
};

export default CourseDetail;
