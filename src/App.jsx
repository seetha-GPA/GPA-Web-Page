import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorldClassTraining from './components/WorldClassTraining';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import TargetAudience from './components/TargetAudience';
import Reviews from './components/Reviews';
import CareerGuidance from './components/CareerGuidance';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

import Contact from './pages/Contact';
import CourseDetail from './components/CourseDetail';
import MeanDeveloperTraining from './pages/MeanDeveloperTraining';
import MernDeveloperTraining from './pages/MernDeveloperTraining';
import CybersecurityTraining from './pages/CybersecurityTraining';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F0F9FF] font-sans">
      <Navbar />
      <Hero />
      <WorldClassTraining />
      <WhyChooseUs />
      <Programs />
      <TargetAudience />
      <Reviews />
      <CareerGuidance />
      <FAQ />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/mean-developer-training" element={<MeanDeveloperTraining />} />
        <Route path="/mern-developer-training" element={<MernDeveloperTraining />} />
        <Route path="/course/cybersecurity" element={<CybersecurityTraining />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
