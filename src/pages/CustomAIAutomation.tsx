import React from 'react';
import { Card, Button } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { Cog, Bot, Workflow, Database, Code, Layers } from 'lucide-react';

const solutions = [
  { icon: Bot, title: 'Intelligent Chatbots & Assistants', desc: 'Custom conversational AI tailored to your domain, integrated with your knowledge base and business systems.' },
  { icon: Workflow, title: 'Process Automation', desc: 'End-to-end automation of complex business workflows using AI decision-making and robotic process automation.' },
  { icon: Database, title: 'Data Pipeline Automation', desc: 'Automated data ingestion, transformation, and enrichment pipelines powered by machine learning.' },
  { icon: Code, title: 'Custom Model Development', desc: 'Purpose-built AI models trained on your data to solve specific business challenges with high accuracy.' },
  { icon: Layers, title: 'System Integration', desc: 'Seamless AI integration with your existing enterprise systems — ERP, CRM, HRIS, and custom platforms.' },
  { icon: Cog, title: 'Workflow Orchestration', desc: 'Intelligent orchestration of multi-step processes with human-in-the-loop controls and exception handling.' },
];

const useCases = [
  { title: 'Document Processing', desc: 'Automate extraction, classification, and routing of invoices, contracts, and compliance documents with 99%+ accuracy.' },
  { title: 'Customer Service Automation', desc: 'Deploy AI agents that resolve tier-1 and tier-2 support tickets, escalating complex issues to human teams.' },
  { title: 'Supply Chain Optimization', desc: 'Predictive demand forecasting, inventory optimization, and logistics routing powered by real-time data.' },
  { title: 'Quality Assurance', desc: 'Automated inspection, anomaly detection, and compliance validation across manufacturing and service delivery.' },
];

const CustomAIAutomation = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-accent-400 mb-4">
            Custom AI Automation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Automate What <span className="text-gradient">Matters</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Purpose-built AI automation solutions designed around your specific workflows, data, and business objectives. From intelligent chatbots to end-to-end process automation, we build AI that works the way you do.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button as={Link} to="/consultation" size="lg">
              Discuss Your Use Case
            </Button>
            <Button as={Link} to="/services" variant="ghost" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">What We Build</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Custom AI solutions engineered for reliability, scalability, and seamless integration with your enterprise stack.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((sol, i) => (
            <Card key={i} className="flex items-start gap-4">
              <sol.icon className="w-8 h-8 text-accent-500 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">{sol.title}</div>
                <p className="text-sm text-muted-foreground">{sol.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Use Cases</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Real-world automation scenarios we've delivered for enterprises across industries.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((uc, i) => (
            <Card key={i}>
              <div className="font-semibold text-lg mb-2">{uc.title}</div>
              <p className="text-sm text-muted-foreground">{uc.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default CustomAIAutomation;
