import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { Card, Button } from '../components/ui';
import { ShieldCheck, Eye, Mic, Video, Image, Globe, Zap, Lock } from 'lucide-react';

const DeepfakeDetection = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
            <ShieldCheck className="w-4 h-4 text-accent-500" />
            Powered by Reality Defender & Sensity
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered <span className="text-gradient">Deepfake Detection</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Protect your organization from AI-generated synthetic media threats with enterprise-grade 
            detection technology. Our partnerships with industry leaders Reality Defender and Sensity 
            deliver unmatched accuracy in identifying manipulated content.
          </p>
          <Button as={Link} to="/consultation" size="lg">
            Request a Demo
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container pb-16">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { stat: '99.2%', label: 'Detection Accuracy' },
            { stat: '<500ms', label: 'Analysis Time' },
            { stat: '24/7', label: 'Real-time Monitoring' },
            { stat: '50+', label: 'Media Formats Supported' },
          ].map((item, i) => (
            <Card key={i} className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">{item.stat}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Partnership Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Technology Partners</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-2xl font-bold">Reality Defender</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Reality Defender provides cutting-edge AI detection technology trusted by governments, 
              financial institutions, and media organizations worldwide. Their multi-modal detection 
              system analyzes visual, audio, and behavioral patterns to identify synthetic content 
              with industry-leading accuracy.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent-400" />
                Real-time API integration
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent-400" />
                Enterprise-grade security
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent-400" />
                Global threat intelligence
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
                <Eye className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-2xl font-bold">Sensity</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Sensity is a pioneer in visual threat intelligence, specializing in the detection of 
              AI-generated faces and manipulated imagery. Their technology protects organizations 
              from identity fraud, disinformation campaigns, and synthetic media attacks.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Image className="w-4 h-4 text-accent-400" />
                Advanced facial analysis
              </li>
              <li className="flex items-center gap-2">
                <Video className="w-4 h-4 text-accent-400" />
                Video manipulation detection
              </li>
              <li className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-accent-400" />
                Voice clone identification
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Detection Capabilities */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Detection Capabilities</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Our comprehensive deepfake detection suite covers all major attack vectors
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Video,
              title: 'Video Deepfakes',
              desc: 'Detect face-swaps, lip-sync manipulation, and full-body synthetic videos'
            },
            {
              icon: Image,
              title: 'Image Authentication',
              desc: 'Identify AI-generated images, face morphs, and document tampering'
            },
            {
              icon: Mic,
              title: 'Voice Clone Detection',
              desc: 'Recognize synthetic speech, voice cloning, and audio manipulation'
            },
            {
              icon: Globe,
              title: 'Live Stream Monitoring',
              desc: 'Real-time analysis of video calls and live broadcasts'
            },
          ].map((item, i) => (
            <Card key={i} className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Industry Applications</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Financial Services',
              desc: 'Prevent identity fraud in KYC/AML processes and protect against CEO impersonation attacks.',
            },
            {
              title: 'Media & Broadcasting',
              desc: 'Verify source authenticity and protect against disinformation campaigns.',
            },
            {
              title: 'Government & Defense',
              desc: 'Secure communications and detect synthetic media in intelligence operations.',
            },
            {
              title: 'Healthcare',
              desc: 'Protect patient records and verify telehealth participant identity.',
            },
            {
              title: 'Legal & Compliance',
              desc: 'Authenticate evidence and ensure regulatory compliance for digital content.',
            },
            {
              title: 'Human Resources',
              desc: 'Verify candidate identity in remote hiring and protect against interview fraud.',
            },
          ].map((item, i) => (
            <Card key={i}>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Easy Integration</h2>
          <p className="text-center text-muted-foreground mb-8">
            Deploy deepfake detection across your organization with flexible integration options
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">API Access</h3>
              <p className="text-sm text-muted-foreground">
                RESTful API endpoints for seamless integration with your existing systems and workflows.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Dashboard Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Real-time threat dashboard with alerts, analytics, and comprehensive reporting.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Batch Processing</h3>
              <p className="text-sm text-muted-foreground">
                Bulk analysis capability for scanning large volumes of media content efficiently.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Custom Deployment</h3>
              <p className="text-sm text-muted-foreground">
                On-premise or private cloud options for organizations with strict data residency requirements.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default DeepfakeDetection;
