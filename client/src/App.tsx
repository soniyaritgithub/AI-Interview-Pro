import { Routes, Route } from "react-router-dom";

import AuthProvider from "./context/AuthProvider";

import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/landing/Hero/Hero";
import Features from "./components/landing/Features/Features";
import TrustedCompanies from "./components/landing/Hero/TrustedCompanies";
import Testimonials from "./components/landing/Testimonials/Testimonials";
import FAQ from "./components/landing/FAQ/FAQ";
import Footer from "./components/landing/Footer/Footer";
import SectionDivider from "./components/common/SectionDivider";
import CTA from "./components/landing/CTA/CTA";
import HowItWorks from "./components/landing/HowItWorks/HowItWorks";
import Pricing from "./components/landing/Pricing/Pricing";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResumeUploadPage from "./pages/Dashboard/ResumeUploadPage";
import ResumeHistoryPage from "./pages/Resume/ResumeHistoryPage";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <SectionDivider />
      <Features />
      <HowItWorks />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CTA />
      <SectionDivider />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/resume-upload" element={<ResumeUploadPage />} />
        <Route path="/resume/history" element={<ResumeHistoryPage />} />
      </Routes>
    </AuthProvider>
  );
}