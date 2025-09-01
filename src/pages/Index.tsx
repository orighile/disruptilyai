import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Credibility from '../components/Credibility';
import Metrics from '../components/Metrics';
import ServicesCards from '../components/ServicesCards';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
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
