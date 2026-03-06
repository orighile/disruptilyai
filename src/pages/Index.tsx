import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Credibility from '../components/Credibility';
import Metrics from '../components/Metrics';
import ServicesCards from '../components/ServicesCards';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const ReportBanner = () => (
  <section className="container py-16">
    <div className="relative overflow-hidden rounded-2xl border border-accent-500/20 bg-gradient-to-r from-brand-900/80 via-slate-900/90 to-accent-900/80 p-8 md:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent-500)/0.15),transparent_60%)]" />
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
            <FileText className="w-10 h-10 text-accent-400" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left space-y-3">
          <div className="inline-block text-xs font-semibold tracking-wider uppercase text-accent-400 bg-accent-500/10 px-3 py-1 rounded-full">
            Free Report
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            The Global State of Deepfakes in 2026
          </h2>
          <p className="text-muted-foreground max-w-xl">
            A strategic analysis of synthetic media threats in Africa & Nigeria. Essential reading for security leaders, policymakers, and enterprises.
          </p>
        </div>
        <Link
          to="/deepfake-report"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition group"
        >
          Get the Report
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ReportBanner />
        <Credibility />
        <Metrics />
        <ServicesCards />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
