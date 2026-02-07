import React from 'react';
import { Button, GhostButton } from './ui';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { useToast } from '../hooks/use-toast';

const CTASection = () => {
  const { toast } = useToast();

  const handleDownloadAIGuide = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('AI USER GUIDE FOR NIGERIAN BUSINESSES', 20, 20);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('By Vibe Intelligence', 20, 30);
    
    doc.setFontSize(10);
    let y = 45;
    
    const content = [
      'INTRODUCTION',
      '------------',
      'This guide provides a comprehensive overview of how Nigerian businesses',
      'can adopt, implement, and scale AI solutions effectively.',
      '',
      'CHAPTER 1: UNDERSTANDING AI FOR BUSINESS',
      '- What is Artificial Intelligence?',
      '- Types of AI: Machine Learning, Deep Learning, NLP',
      '- AI Applications in Nigerian Context',
      '',
      'CHAPTER 2: GETTING STARTED',
      '- Assessing AI Readiness',
      '- Identifying Use Cases',
      '- Building Your AI Team',
      '',
      'CHAPTER 3: IMPLEMENTATION',
      '- Data Preparation',
      '- Choosing the Right AI Tools',
      '- Integration with Existing Systems',
      '',
      'CHAPTER 4: SCALING AI',
      '- Measuring ROI',
      '- Expanding AI Initiatives',
      '- Building AI Culture',
      '',
      'CHAPTER 5: COMPLIANCE & GOVERNANCE',
      '- NITDA Guidelines',
      '- CBN Regulations',
      '- Data Protection Best Practices',
      '',
      'For consultation, contact: info@vibe-intelligence.com',
    ];
    
    content.forEach(line => {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, 20, y);
      y += 6;
    });
    
    doc.save('vibe-intelligence-ai-user-guide.pdf');
    
    toast({
      title: "Download Started",
      description: "AI User Guide PDF is being downloaded.",
    });
  };

  const handleDownloadDeepfakeReport = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('GLOBAL STATE OF DEEPFAKE THREATS 2026', 20, 20);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('By Vibe Intelligence', 20, 30);
    doc.text('How Vibe Intelligence Protects Nigerian Enterprises', 20, 38);
    
    doc.setFontSize(10);
    let y = 55;
    
    const content = [
      'EXECUTIVE SUMMARY',
      '-----------------',
      'The global deepfake threat landscape has evolved from a niche technological',
      'curiosity into a sophisticated weapon of mass deception. As we enter 2026,',
      'AI-generated synthetic media poses unprecedented risks to governments,',
      'financial institutions, democratic processes, and individual citizens.',
      '',
      'KEY STATISTICS:',
      '- 4,500% increase in deepfake attacks globally since 2022',
      '- Nigeria ranks #3 in Africa for deepfake-related fraud',
      '- 67% of Nigerian banks have encountered synthetic identity attempts',
      '- 2027 elections identified as high-risk for AI-generated disinformation',
      '',
      'NIGERIA FOCUS AREAS:',
      '',
      '1. GOVERNMENT & PUBLIC SECTOR',
      '   - Impersonation of government officials',
      '   - Fake policy announcements',
      '   - Document forgery',
      '',
      '2. DEFENSE & INTELLIGENCE',
      '   - Military disinformation threats',
      '   - Intelligence operation compromise',
      '   - National security implications',
      '',
      '3. DEMOCRACY & ELECTORAL INTEGRITY',
      '   - 2027 election manipulation risks',
      '   - Political deepfake incidents',
      '   - Voter disinformation campaigns',
      '',
      '4. FINANCIAL SERVICES & BANK KYC',
      '   - Identity fraud in banking',
      '   - Synthetic identity creation',
      '   - CBN compliance implications',
      '',
      'For the full 15,000-word report, visit:',
      'www.vibe-intelligence.com/deepfake-report',
    ];
    
    content.forEach(line => {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, 20, y);
      y += 6;
    });
    
    doc.save('vibe-intelligence-deepfake-report-2026.pdf');
    
    toast({
      title: "Download Started",
      description: "Deepfake Report PDF is being downloaded.",
    });
  };

  return (
    <section className="container py-16 md:py-20">
      <div className="glass-card text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Business with AI?
        </h3>
        <p className="text-muted-foreground mb-6">
          Join the increasing Nigerian businesses already leveraging AI for growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button as={Link} to="/consultation" size="lg">
            Book Free Consultation
          </Button>
          <GhostButton as={Link} to="/resources" size="lg">
            View Resources
          </GhostButton>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" size="lg" onClick={handleDownloadAIGuide}>
            Download AI Guide
          </Button>
          <Button variant="outline" size="lg" onClick={handleDownloadDeepfakeReport}>
            Download Deepfake Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
