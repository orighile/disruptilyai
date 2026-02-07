import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from '../hooks/use-toast';
import { 
  Download, 
  FileText, 
  BookOpen, 
  BarChart3, 
  Calculator,
  Shield,
  ClipboardCheck,
  FolderSearch,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import { templates } from '../data/templates';
import { generateTemplatePDF, generatePDF } from '../utils/pdfGenerator';

// Icon mapping for templates
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  BarChart3,
  Shield,
  ClipboardCheck,
  FolderSearch,
  Calculator
};

function ROI() {
  const [revenue, setRevenue] = useState(5000000);
  const [leadGain, setLeadGain] = useState(25);
  const [cost, setCost] = useState(2000000);

  const added = revenue * (leadGain/100);
  const roi = cost ? ((added - cost) / cost) * 100 : 0;

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-primary" />
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
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-5 h-5 text-primary" />
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
            className="w-full accent-primary"
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
            className="w-full accent-primary"
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

const Resources = () => {
  const { toast } = useToast();

  function handleDownload(template: typeof templates[0]) {
    generateTemplatePDF(template);
    
    toast({
      title: "Download Started",
      description: `${template.title} PDF is being downloaded.`,
    });
  }

  function handleDownloadGuide(guideContent: { title: string; content: string; filename: string }) {
    generatePDF({
      title: guideContent.title,
      subtitle: 'Vibe Intelligence',
      content: guideContent.content,
      filename: guideContent.filename,
    });
    
    toast({
      title: "Download Started",
      description: `${guideContent.title} PDF is being downloaded.`,
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources</h1>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Tools, templates, and insights for Nigerian businesses investing in AI and cybersecurity.
        </p>

        {/* Featured Report Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-destructive/10 via-background to-primary/10 border-destructive/20">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-3">
                    <Shield className="w-3 h-3" />
                    Featured Report
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Global State of Deepfake Threats 2026
                  </h2>
                  <p className="text-lg text-primary font-medium mb-2">
                    How Vibe Intelligence Protects Nigerian Enterprises
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive threat intelligence report with emphasis on Nigeria—covering Government, 
                    Defense & Intelligence, Electoral Integrity, and Bank KYC vulnerabilities.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span>📊 15,000+ words</span>
                    <span>🌍 Global coverage</span>
                    <span>🇳🇬 Nigeria focus</span>
                    <span>📋 12 case studies</span>
                  </div>
                  <Button asChild>
                    <Link to="/deepfake-report" className="inline-flex items-center gap-2">
                      Read Excerpt & Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interactive Tools */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Interactive Tools</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ROI />
            <TimelineEstimator />
          </div>
        </section>

        {/* Professional Templates */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Professional Templates</h2>
          <p className="text-muted-foreground mb-6">
            Download our comprehensive templates to prepare for AI initiatives, assess risks, and build business cases.
            All templates are available as professional PDF documents.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => {
              const IconComponent = iconMap[template.icon] || FileText;
              return (
                <Card key={template.id} className="flex flex-col h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {template.description}
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => handleDownload(template)}
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Quick Resources */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Quick Resources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">AI User Guide for Nigerian Businesses</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Complete guide covering AI adoption, implementation, scaling, and compliance for the Nigerian market.
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto"
                    onClick={() => handleDownloadGuide({
                      title: 'AI User Guide for Nigerian Businesses',
                      filename: 'vibe-intelligence-ai-user-guide.pdf',
                      content: `INTRODUCTION
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

For consultation, contact: info@vibe-intelligence.com
`
                    })}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">State of AI in Nigeria 2025</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Latest insights on AI adoption trends, key use cases, and industry benchmarks across Nigerian enterprises.
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto"
                    onClick={() => handleDownloadGuide({
                      title: 'State of AI in Nigeria - 2025 Report',
                      filename: 'state-of-ai-nigeria-2025.pdf',
                      content: `EXECUTIVE SUMMARY
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

For the full report, contact: info@vibe-intelligence.com
`
                    })}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
