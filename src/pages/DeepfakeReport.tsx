import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Building2, 
  Vote, 
  Landmark, 
  Lock,
  FileText,
  Users,
  Globe
} from 'lucide-react';

const DeepfakeReport = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    organization: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Subscription Request Received",
      description: "Thank you! You'll receive the full report via email within 24 hours.",
    });
    
    setFormData({ email: '', organization: '', role: '' });
    setIsSubmitting(false);
  };

  const stats = [
    { value: "4,500%", label: "Increase in deepfake attacks since 2022", icon: TrendingUp },
    { value: "#3", label: "Nigeria's rank in Africa for deepfake fraud", icon: AlertTriangle },
    { value: "67%", label: "Nigerian banks with synthetic identity attempts", icon: Landmark },
    { value: "2027", label: "Elections identified as high-risk for AI disinformation", icon: Vote },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">2026 Threat Intelligence Report</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Global State of<br />
              <span className="text-primary">Deepfake Threats 2026</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              By Vibe Intelligence
            </p>
            <p className="text-lg text-primary font-medium mb-8 max-w-2xl mx-auto">
              How Vibe Intelligence Protects Nigerian Enterprises from Synthetic Media Threats
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                15,000+ words
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Global coverage
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Nigeria focus
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Excerpt */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Report Excerpt</h2>
            
            {/* Executive Summary */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  The global deepfake threat landscape has evolved from a niche technological curiosity into a 
                  sophisticated weapon of mass deception. As we enter 2026, artificial intelligence-generated 
                  synthetic media poses unprecedented risks to governments, financial institutions, democratic 
                  processes, and individual citizens worldwide.
                </p>
                <p>
                  This report, compiled through extensive research by Vibe Intelligence, presents the most comprehensive
                  analysis of deepfake threats ever assembled for the African market, with particular emphasis 
                  on Nigeria—a nation at the nexus of rapid digital transformation and heightened vulnerability.
                </p>
                <p>
                  Our findings reveal a <strong>4,500% increase in deepfake attacks globally since 2022</strong>, 
                  with Africa emerging as the fastest-growing target region. Nigeria, as the continent's largest 
                  economy and most populous nation, faces unique challenges that demand immediate attention from 
                  government agencies, financial institutions, and private enterprises alike.
                </p>
              </CardContent>
            </Card>

            {/* Nigeria Focus: Government */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Nigeria Focus: Government & Public Sector
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Nigerian government institutions face an escalating threat from deepfake technology. In 2025 alone, 
                  our monitoring systems detected over <strong>340 unique deepfake incidents</strong> targeting 
                  Nigerian public officials, ranging from fabricated policy announcements to forged video statements.
                </p>
                <h4 className="text-foreground font-semibold mt-4">Key Threats Identified:</h4>
                <ul>
                  <li><strong>Official Impersonation:</strong> Synthetic videos of ministers, governors, and agency heads 
                  making false policy declarations have caused market disruptions and public panic.</li>
                  <li><strong>Document Forgery:</strong> AI-enhanced document manipulation has compromised procurement 
                  processes and created fraudulent government communications.</li>
                  <li><strong>Voice Cloning:</strong> Phone-based attacks using cloned voices of senior officials have 
                  been used to authorize illegal fund transfers and influence subordinate decision-making.</li>
                </ul>
                <p>
                  The absence of standardized verification protocols across ministries, departments, and agencies (MDAs) 
                  creates exploitable gaps. We recommend immediate implementation of cryptographic authentication for 
                  all official communications and establishment of a rapid-response verification unit.
                </p>
              </CardContent>
            </Card>

            {/* Nigeria Focus: Defense & Intelligence */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Nigeria Focus: Defense & Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  The Nigerian defense and intelligence community faces sophisticated deepfake threats that directly 
                  impact national security. Our analysis indicates that state-sponsored actors have developed 
                  capabilities to generate convincing synthetic media targeting military leadership.
                </p>
                <h4 className="text-foreground font-semibold mt-4">Critical Vulnerabilities:</h4>
                <ul>
                  <li><strong>Command Confusion:</strong> Fabricated video orders from senior military commanders could 
                  disrupt operational coordination during critical security operations.</li>
                  <li><strong>Intelligence Manipulation:</strong> Deepfake evidence could be planted to misdirect 
                  investigative resources and compromise intelligence assessments.</li>
                  <li><strong>Personnel Targeting:</strong> Individual service members are vulnerable to blackmail 
                  schemes using synthetic compromising content.</li>
                </ul>
                <p>
                  We urge the Nigerian Armed Forces and intelligence agencies to implement AI-based detection systems 
                  at all communication nodes and establish secure verification chains for operational orders.
                </p>
              </CardContent>
            </Card>

            {/* Nigeria Focus: Democracy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Vote className="w-5 h-5 text-primary" />
                  Nigeria Focus: Democracy & Electoral Integrity
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  With the 2027 general elections approaching, Nigeria's democratic institutions face their greatest 
                  technological challenge since the advent of social media. Deepfake technology has matured to the 
                  point where synthetic political content is virtually indistinguishable from authentic media.
                </p>
                <h4 className="text-foreground font-semibold mt-4">2027 Election Risk Assessment:</h4>
                <ul>
                  <li><strong>Candidate Manipulation:</strong> Fabricated videos showing candidates making inflammatory 
                  statements could incite violence or swing voter sentiment within hours.</li>
                  <li><strong>Result Fabrication:</strong> Fake announcement videos from INEC officials declaring 
                  false results could trigger civil unrest before corrections can be issued.</li>
                  <li><strong>Voter Suppression:</strong> Targeted disinformation campaigns using deepfakes could 
                  discourage turnout in specific regions or demographics.</li>
                  <li><strong>International Interference:</strong> Foreign actors have demonstrated capability and 
                  intent to deploy deepfakes in Nigerian political discourse.</li>
                </ul>
                <p>
                  INEC, political parties, and media organizations must collaborate on pre-election verification 
                  protocols. We recommend mandatory AI detection screening for all political advertising and the 
                  establishment of a real-time fact-checking coalition with 15-minute response capability.
                </p>
              </CardContent>
            </Card>

            {/* Nigeria Focus: Banking KYC */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-primary" />
                  Nigeria Focus: Financial Services & Bank KYC
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Nigerian financial institutions are experiencing a surge in AI-powered identity fraud that threatens 
                  the integrity of Know Your Customer (KYC) processes. Our research indicates that <strong>67% of 
                  Nigerian banks have encountered synthetic identity attempts</strong> in their onboarding processes.
                </p>
                <h4 className="text-foreground font-semibold mt-4">Emerging Fraud Vectors:</h4>
                <ul>
                  <li><strong>Synthetic Identity Creation:</strong> Criminals are using AI to generate complete 
                  synthetic identities, including fabricated BVN documentation, that pass traditional verification.</li>
                  <li><strong>Liveness Spoofing:</strong> Advanced deepfake technology can now defeat standard 
                  liveness detection in video KYC, enabling account takeovers and fraudulent account creation.</li>
                  <li><strong>Voice Clone Attacks:</strong> Phone banking and voice-authorized transactions are 
                  vulnerable to AI voice cloning, with average fraud losses exceeding ₦15 million per incident.</li>
                  <li><strong>Document Manipulation:</strong> AI-enhanced document forgery produces utility bills, 
                  employment letters, and identity documents that evade traditional verification.</li>
                </ul>
                <h4 className="text-foreground font-semibold mt-4">CBN Compliance Implications:</h4>
                <p>
                  Current CBN KYC guidelines do not adequately address AI-generated synthetic media. We anticipate 
                  regulatory updates requiring AI-based detection integration by Q3 2026. Financial institutions 
                  that proactively implement deepfake detection will gain competitive advantage and reduce fraud losses.
                </p>
                <p>
                  Recommended immediate actions include deploying passive liveness detection, implementing voice 
                  biometric anomaly detection, and establishing cross-institution fraud intelligence sharing.
                </p>
              </CardContent>
            </Card>

            {/* Continue Reading CTA */}
            <div className="text-center py-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                This excerpt covers approximately 15% of the full report. The complete document includes:
              </p>
              <ul className="text-sm text-muted-foreground mb-8 space-y-2">
                <li>• Detailed global threat landscape analysis with regional breakdowns</li>
                <li>• 12 in-depth case studies from Nigeria and West Africa</li>
                <li>• Technical detection methodology comparison</li>
                <li>• Implementation roadmaps for different organization sizes</li>
                <li>• Policy recommendations for government and regulators</li>
                <li>• 2027 threat predictions and preparation guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Access the Full Report</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Subscribe to receive the complete 15,000-word report with all case studies, 
                  technical analysis, and implementation guidelines.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Your company or agency"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      type="text"
                      placeholder="e.g., CISO, Compliance Officer, Risk Manager"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : 'Request Full Report'}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By subscribing, you agree to our{' '}
                    <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                    We'll send the report within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Immediate Deepfake Protection?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vibe Intelligence provides enterprise-grade deepfake detection and AI security 
            solutions for Nigerian organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/deepfake-detection">Learn About Our Service</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeepfakeReport;
