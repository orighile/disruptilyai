import React, { useState } from 'react';
import { Card, Button } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from '../hooks/use-toast';
import { Download, FileText, BookOpen, BarChart3, Building2, Calculator } from 'lucide-react';

function ROI() {
  const [revenue, setRevenue] = useState(5000000);
  const [leadGain, setLeadGain] = useState(25);
  const [cost, setCost] = useState(2000000);

  const added = revenue * (leadGain/100);
  const roi = cost ? ((added - cost) / cost) * 100 : 0;

  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-accent-500" />
        <div className="font-semibold">AI ROI Calculator (Nigeria)</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3 mb-4">
        <label className="grid gap-1 text-sm">
          <span>Monthly Revenue (₦)</span>
          <input 
            type="number" 
            value={revenue} 
            onChange={e => setRevenue(+e.target.value)} 
            className="bg-input rounded-xl px-3 py-2 border border-border" 
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Expected Lead Gain (%)</span>
          <input 
            type="number" 
            value={leadGain} 
            onChange={e => setLeadGain(+e.target.value)} 
            className="bg-input rounded-xl px-3 py-2 border border-border" 
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Implementation Cost (₦)</span>
          <input 
            type="number" 
            value={cost} 
            onChange={e => setCost(+e.target.value)} 
            className="bg-input rounded-xl px-3 py-2 border border-border" 
          />
        </label>
      </div>
      <div className="text-sm text-muted-foreground mb-2">
        Estimated Added Revenue: <span className="text-foreground font-semibold">₦{added.toLocaleString()}</span>
      </div>
      <div className="text-sm text-muted-foreground">
        Estimated ROI: <span className="text-foreground font-semibold">{roi.toFixed(1)}%</span>
      </div>
    </Card>
  );
}

function TimelineEstimator() {
  const [complexity, setComplexity] = useState(2);
  const [integrations, setIntegrations] = useState(2);
  const weeks = 2 + complexity * 2 + integrations;

  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-5 h-5 text-accent-500" />
        <div className="font-semibold">Implementation Timeline Estimator</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 mb-4">
        <label className="grid gap-1 text-sm">
          <span>Solution Complexity</span>
          <input 
            type="range" 
            min="1" 
            max="4" 
            value={complexity} 
            onChange={e => setComplexity(+e.target.value)} 
            className="w-full accent-accent-500"
          />
          <span className="text-xs text-muted-foreground">Level {complexity}</span>
        </label>
        <label className="grid gap-1 text-sm">
          <span># of Integrations</span>
          <input 
            type="range" 
            min="0" 
            max="6" 
            value={integrations} 
            onChange={e => setIntegrations(+e.target.value)} 
            className="w-full accent-accent-500"
          />
          <span className="text-xs text-muted-foreground">{integrations} systems</span>
        </label>
      </div>
      <div className="text-sm text-muted-foreground">
        Estimated Timeline: <span className="text-foreground font-semibold">{weeks} weeks</span>
      </div>
    </Card>
  );
}

const resourceItems = [
  {
    icon: BookOpen,
    title: 'AI User Guide',
    desc: 'Complete guide for Nigerian businesses to adopt and scale AI solutions.',
    filename: 'vibe-intelligence-ai-user-guide.txt',
    content: `AI USER GUIDE FOR NIGERIAN BUSINESSES
=====================================
By Vibe Intelligence

INTRODUCTION
------------
This guide provides a comprehensive overview of how Nigerian businesses can adopt, implement, and scale AI solutions effectively.

CHAPTER 1: UNDERSTANDING AI FOR BUSINESS
- What is Artificial Intelligence?
- Types of AI: Machine Learning, Deep Learning, NLP
- AI Applications in Nigerian Context

CHAPTER 2: GETTING STARTED
- Assessing AI Readiness
- Identifying Use Cases
- Building Your AI Team

CHAPTER 3: IMPLEMENTATION
- Data Preparation
- Choosing the Right AI Tools
- Integration with Existing Systems

CHAPTER 4: SCALING AI
- Measuring ROI
- Expanding AI Initiatives
- Building AI Culture

CHAPTER 5: COMPLIANCE & GOVERNANCE
- NITDA Guidelines
- CBN Regulations
- Data Protection Best Practices

For consultation, contact: sales@disruptily.com
`
  },
  {
    icon: FileText,
    title: 'Preconsultation Templates',
    desc: 'Templates to help prepare for your AI consultation session.',
    filename: 'vibe-intelligence-preconsultation-template.txt',
    content: `PRE-CONSULTATION QUESTIONNAIRE
================================
Vibe Intelligence

Company Name: ____________________
Contact Person: ____________________
Email: ____________________
Phone: ____________________

1. Top 3 business outcomes you want from AI:
   a) ____________________
   b) ____________________
   c) ____________________

2. Data sources available:
   [ ] CRM System
   [ ] ERP System
   [ ] Website Analytics
   [ ] Spreadsheets/Excel
   [ ] Other: ____________________

3. Channels to automate:
   [ ] WhatsApp
   [ ] Email
   [ ] Website/Web Chat
   [ ] POS System
   [ ] Other: ____________________

4. Compliance constraints:
   [ ] NITDA
   [ ] CBN
   [ ] GDPR
   [ ] Other: ____________________

5. Timeline: ____________________
6. Budget range: ____________________
`
  },
  {
    icon: BarChart3,
    title: 'State of AI in Nigeria (2025)',
    desc: 'Download the latest insights and adoption trends in Nigeria.',
    filename: 'state-of-ai-nigeria-2025.txt',
    content: `STATE OF AI IN NIGERIA - 2025 REPORT
=====================================
By Vibe Intelligence

EXECUTIVE SUMMARY
-----------------
AI adoption in Nigeria has accelerated significantly, with key sectors leading the transformation.

KEY FINDINGS
------------
• 45% of Nigerian enterprises have adopted some form of AI
• Banking & Fintech lead with 68% adoption rate
• E-commerce follows at 52%
• Manufacturing at 38%
• Healthcare at 34%

TOP AI USE CASES
----------------
1. Customer Service Automation (67%)
2. Fraud Detection (54%)
3. Predictive Analytics (48%)
4. Process Automation (45%)
5. Marketing Personalization (42%)

CHALLENGES
----------
• Data infrastructure gaps
• Skilled talent shortage
• Regulatory uncertainty
• Cost of implementation

OPPORTUNITIES
-------------
• Government digitalization initiatives
• Growing tech ecosystem
• Increasing mobile penetration
• Youth-driven innovation

For the full report, contact: sales@disruptily.com
`
  },
  {
    icon: Building2,
    title: 'Automation Opportunity Assessment',
    desc: 'Self-service audit to locate automation quick wins.',
    filename: 'automation-opportunity-assessment.txt',
    content: `AUTOMATION OPPORTUNITY ASSESSMENT
==================================
Vibe Intelligence Self-Service Audit

Rate each area from 1-5 (1=Low potential, 5=High potential)

CUSTOMER OPERATIONS
-------------------
[ ] Customer inquiry handling: ___
[ ] Order processing: ___
[ ] Appointment scheduling: ___
[ ] Feedback collection: ___

FINANCE & ACCOUNTING
--------------------
[ ] Invoice processing: ___
[ ] Expense reporting: ___
[ ] Financial reconciliation: ___
[ ] Report generation: ___

HUMAN RESOURCES
---------------
[ ] Recruitment screening: ___
[ ] Onboarding processes: ___
[ ] Leave management: ___
[ ] Performance tracking: ___

MARKETING & SALES
-----------------
[ ] Lead qualification: ___
[ ] Email campaigns: ___
[ ] Social media posting: ___
[ ] Sales follow-ups: ___

SCORING
-------
40-50: High automation potential - Contact us immediately
30-39: Moderate potential - Schedule a consultation
20-29: Selective opportunities - Review specific areas
Below 20: Focus on digital foundation first

Next steps: Book a free consultation at vibe-intelligence.com
`
  },
  {
    icon: FileText,
    title: 'Industry Guides',
    desc: 'Banking, E-commerce, Manufacturing, Healthcare.',
    filename: 'industry-ai-guides.txt',
    content: `INDUSTRY-SPECIFIC AI GUIDES
===========================
By Vibe Intelligence

BANKING & FINTECH
-----------------
Key Applications:
• Fraud detection & prevention
• Credit scoring automation
• Customer service chatbots
• KYC/AML compliance
• Personalized banking

Compliance: CBN guidelines, NITDA regulations

E-COMMERCE
----------
Key Applications:
• Product recommendations
• Inventory optimization
• Customer segmentation
• Dynamic pricing
• Chatbot support

Focus: Customer experience & logistics

MANUFACTURING
-------------
Key Applications:
• Predictive maintenance
• Quality control
• Supply chain optimization
• Energy management
• Production scheduling

Focus: Efficiency & cost reduction

HEALTHCARE
----------
Key Applications:
• Diagnostic assistance
• Patient scheduling
• Medical records management
• Drug interaction checking
• Telemedicine support

Compliance: Patient data protection

For industry-specific consultation: sales@disruptily.com
`
  }
];

const Resources = () => {
  const { toast } = useToast();

  function handleDownload(item: typeof resourceItems[0]) {
    const blob = new Blob([item.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = item.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: `${item.title} is being downloaded.`,
    });
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources</h1>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Tools, templates, and insights for Nigerian businesses investing in AI.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ROI />
          <TimelineEstimator />
        </div>

        <h2 className="text-xl font-semibold mb-4">Downloadable Resources</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {resourceItems.map((item, i) => (
            <Card key={i} className="flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <div className="font-semibold">{item.title}</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{item.desc}</p>
              <button 
                onClick={() => handleDownload(item)}
                className="inline-flex items-center gap-2 text-sm text-accent-500 hover:text-accent-400 transition"
              >
                <Download className="w-4 h-4" />
                Download →
              </button>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;