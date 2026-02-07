export interface Template {
  id: string;
  title: string;
  description: string;
  filename: string;
  content: string;
  icon: string;
}

export const templates: Template[] = [
  {
    id: 'pre-consultation',
    title: 'Pre-Consultation Questionnaire',
    description: 'Comprehensive preparation document for AI consultation sessions.',
    filename: 'vibe-intelligence-pre-consultation.txt',
    icon: 'FileText',
    content: `PRE-CONSULTATION QUESTIONNAIRE
================================
Vibe Intelligence
Confidential Business Document

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION A: ORGANIZATION PROFILE
-------------------------------

1. Organization Name: ____________________
2. Industry/Sector: ____________________
3. Year Established: ____________________
4. Number of Employees: ____________________
5. Annual Revenue Range (₦):
   [ ] Below 50 million
   [ ] 50-200 million
   [ ] 200-500 million
   [ ] 500 million - 1 billion
   [ ] Above 1 billion

6. Primary Contact:
   Name: ____________________
   Title: ____________________
   Email: ____________________
   Phone: ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION B: BUSINESS OBJECTIVES
------------------------------

7. Top 3 business outcomes you want from AI implementation:
   a) ____________________
   b) ____________________
   c) ____________________

8. Primary pain points in current operations:
   [ ] Customer service bottlenecks
   [ ] Manual data processing
   [ ] Fraud/security concerns
   [ ] Compliance management
   [ ] Decision-making speed
   [ ] Other: ____________________

9. Success metrics you track:
   [ ] Revenue growth
   [ ] Customer satisfaction (NPS/CSAT)
   [ ] Operational efficiency
   [ ] Cost reduction
   [ ] Employee productivity
   [ ] Other: ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION C: TECHNICAL INFRASTRUCTURE
-----------------------------------

10. Current technology stack:
    [ ] CRM System (specify): ____________________
    [ ] ERP System (specify): ____________________
    [ ] Cloud provider: ____________________
    [ ] On-premises servers
    [ ] Hybrid infrastructure

11. Data sources available:
    [ ] Customer database
    [ ] Transaction records
    [ ] Website/app analytics
    [ ] Social media data
    [ ] IoT/sensor data
    [ ] Spreadsheets/Excel files
    [ ] Other: ____________________

12. Customer touchpoints to potentially automate:
    [ ] WhatsApp Business
    [ ] Email support
    [ ] Website live chat
    [ ] Phone/IVR system
    [ ] Mobile app
    [ ] In-person/POS
    [ ] Other: ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION D: COMPLIANCE & GOVERNANCE
----------------------------------

13. Regulatory frameworks applicable to your business:
    [ ] CBN regulations (banking/fintech)
    [ ] NITDA Data Protection Regulation
    [ ] GDPR (international operations)
    [ ] PCI-DSS (payment processing)
    [ ] ISO 27001 certified
    [ ] Other: ____________________

14. Data governance status:
    [ ] Formal data governance policy in place
    [ ] Data protection officer appointed
    [ ] Regular security audits conducted
    [ ] Incident response plan documented
    [ ] None of the above

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION E: PROJECT PARAMETERS
-----------------------------

15. Preferred implementation timeline:
    [ ] Immediate (within 1 month)
    [ ] Short-term (1-3 months)
    [ ] Medium-term (3-6 months)
    [ ] Long-term (6-12 months)

16. Budget range for AI initiative (₦):
    [ ] Below 5 million
    [ ] 5-15 million
    [ ] 15-50 million
    [ ] 50-100 million
    [ ] Above 100 million
    [ ] To be determined

17. Internal AI/technical expertise:
    [ ] Dedicated AI/ML team
    [ ] IT department with some AI exposure
    [ ] Limited technical staff
    [ ] No internal technical resources

18. Previous AI/automation experience:
    [ ] Successfully implemented AI solutions
    [ ] Attempted but faced challenges
    [ ] Currently evaluating options
    [ ] No prior experience

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION F: ADDITIONAL INFORMATION
---------------------------------

19. Key stakeholders for this initiative:
    ____________________
    ____________________
    ____________________

20. Any specific concerns or questions for the consultation:
    ____________________
    ____________________
    ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please complete this questionnaire before your scheduled consultation.
Submit to: sales@disruptily.com

Vibe Intelligence | AI Solutions for Nigerian Enterprises
www.vibe-intelligence.com
`
  },
  {
    id: 'ai-readiness',
    title: 'AI Readiness Assessment',
    description: 'Evaluate your organization\'s preparedness for AI adoption.',
    filename: 'vibe-intelligence-ai-readiness-assessment.txt',
    icon: 'BarChart3',
    content: `AI READINESS ASSESSMENT
========================
Vibe Intelligence
Strategic Evaluation Tool

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INSTRUCTIONS
------------
Rate each statement from 1-5:
1 = Strongly Disagree / Not Present
2 = Disagree / Minimal
3 = Neutral / Developing
4 = Agree / Established
5 = Strongly Agree / Advanced

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIMENSION 1: LEADERSHIP & STRATEGY (Maximum 25 points)
------------------------------------------------------

___ 1.1 Executive leadership understands AI's potential business impact
___ 1.2 AI is included in our strategic planning and roadmap
___ 1.3 Budget has been allocated for AI initiatives
___ 1.4 Clear ownership exists for AI transformation
___ 1.5 Risk appetite for innovation is defined

DIMENSION 1 SUBTOTAL: ___/25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIMENSION 2: DATA INFRASTRUCTURE (Maximum 25 points)
----------------------------------------------------

___ 2.1 We have centralized, accessible data repositories
___ 2.2 Data quality is monitored and maintained
___ 2.3 Data governance policies are documented and enforced
___ 2.4 Historical data (2+ years) is available for analysis
___ 2.5 Real-time data capture mechanisms exist

DIMENSION 2 SUBTOTAL: ___/25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIMENSION 3: TECHNOLOGY FOUNDATION (Maximum 25 points)
------------------------------------------------------

___ 3.1 Cloud infrastructure is in place or planned
___ 3.2 APIs enable integration between systems
___ 3.3 Cybersecurity measures are robust and current
___ 3.4 Scalable compute resources are available
___ 3.5 Modern software development practices are followed

DIMENSION 3 SUBTOTAL: ___/25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIMENSION 4: TALENT & CULTURE (Maximum 25 points)
-------------------------------------------------

___ 4.1 Staff are open to adopting new technologies
___ 4.2 Technical training programs exist or are planned
___ 4.3 Cross-functional collaboration is encouraged
___ 4.4 Experimentation and learning from failure is supported
___ 4.5 Change management processes are mature

DIMENSION 4 SUBTOTAL: ___/25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIMENSION 5: USE CASE CLARITY (Maximum 25 points)
-------------------------------------------------

___ 5.1 Specific business problems suitable for AI have been identified
___ 5.2 Expected outcomes and KPIs are defined
___ 5.3 Stakeholder buy-in exists for proposed use cases
___ 5.4 Pilot scope is manageable and measurable
___ 5.5 Path to scaling successful pilots is clear

DIMENSION 5 SUBTOTAL: ___/25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCORING SUMMARY
---------------

Dimension 1 (Leadership & Strategy):    ___/25
Dimension 2 (Data Infrastructure):      ___/25
Dimension 3 (Technology Foundation):    ___/25
Dimension 4 (Talent & Culture):         ___/25
Dimension 5 (Use Case Clarity):         ___/25

TOTAL SCORE:                            ___/125

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INTERPRETATION
--------------

100-125: AI READY
- Your organization is well-positioned for AI implementation
- Focus on selecting high-impact use cases and execution partners
- Consider advanced AI applications

75-99: AI PREPARED
- Strong foundation with some gaps to address
- Prioritize weakest dimensions before major AI investment
- Pilot projects are appropriate

50-74: AI DEVELOPING
- Foundational work needed before AI adoption
- Focus on data infrastructure and leadership alignment
- Consider advisory services before implementation

Below 50: AI EMERGING
- Significant preparation required
- Start with digital transformation basics
- Build data capabilities and technical foundation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NEXT STEPS
----------

1. Identify your lowest-scoring dimension
2. Develop targeted improvement plan
3. Schedule consultation with Vibe Intelligence
4. Reassess in 3-6 months

Contact: sales@disruptily.com
Vibe Intelligence | AI Solutions for Nigerian Enterprises
`
  },
  {
    id: 'deepfake-vulnerability',
    title: 'Deepfake Vulnerability Assessment',
    description: 'Assess your organization\'s exposure to deepfake and synthetic media threats.',
    filename: 'vibe-intelligence-deepfake-vulnerability.txt',
    icon: 'Shield',
    content: `DEEPFAKE VULNERABILITY ASSESSMENT
===================================
Vibe Intelligence
Security Assessment Tool

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORGANIZATION PROFILE
--------------------

Organization: ____________________
Industry: ____________________
Assessment Date: ____________________
Assessor: ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1: IDENTITY VERIFICATION EXPOSURE
-----------------------------------------
Rate risk level: LOW (1) | MEDIUM (2) | HIGH (3) | CRITICAL (4)

___ 1.1 Video-based KYC/customer onboarding
___ 1.2 Voice authentication for transactions
___ 1.3 Remote employee verification
___ 1.4 Executive video communications
___ 1.5 Customer-facing video content

Section 1 Risk Score: ___/20
Critical Threshold: 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 2: HIGH-VALUE TARGETS
-----------------------------
Indicate presence: YES (2 points) | NO (0 points)

___ 2.1 C-suite executives with public media presence
___ 2.2 Spokespersons who make official announcements
___ 2.3 Key personnel authorizing large transactions
___ 2.4 Brand ambassadors or celebrity partnerships
___ 2.5 Political or regulatory relationships

Section 2 Risk Score: ___/10
Critical Threshold: 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 3: CURRENT DETECTION CAPABILITIES
-----------------------------------------
Rate capability: NONE (0) | BASIC (1) | MODERATE (2) | ADVANCED (3)

___ 3.1 Deepfake detection technology deployed
___ 3.2 Document authenticity verification
___ 3.3 Liveness detection for video KYC
___ 3.4 Voice biometric anomaly detection
___ 3.5 Metadata/provenance verification

Section 3 Capability Score: ___/15
Minimum Recommended: 9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 4: INCIDENT RESPONSE READINESS
--------------------------------------
Rate readiness: NOT READY (0) | PARTIAL (1) | READY (2)

___ 4.1 Deepfake incident response plan documented
___ 4.2 Designated response team identified
___ 4.3 Communication protocols for false content
___ 4.4 Legal/regulatory reporting procedures
___ 4.5 Evidence preservation capabilities

Section 4 Readiness Score: ___/10
Minimum Recommended: 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 5: TRAINING & AWARENESS
-------------------------------
Rate coverage: NONE (0) | LIMITED (1) | MODERATE (2) | COMPREHENSIVE (3)

___ 5.1 Staff awareness of deepfake threats
___ 5.2 Verification procedures for unusual requests
___ 5.3 Social engineering defense training
___ 5.4 Executive protection briefings
___ 5.5 Customer-facing staff training

Section 5 Training Score: ___/15
Minimum Recommended: 9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VULNERABILITY CALCULATION
-------------------------

A. Total Exposure Score (Sections 1+2):           ___/30
B. Total Protection Score (Sections 3+4+5):       ___/40
C. Vulnerability Index = A - (B × 0.5):           ___

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RISK CLASSIFICATION
-------------------

Vulnerability Index > 15:  CRITICAL - Immediate action required
Vulnerability Index 10-15: HIGH - Priority remediation needed
Vulnerability Index 5-10:  MODERATE - Planned improvements recommended
Vulnerability Index < 5:   LOW - Maintain vigilance

Your Classification: ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRIORITY RECOMMENDATIONS
------------------------

Based on your assessment, prioritize:

1. ____________________
2. ____________________
3. ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NEXT STEPS
----------

[ ] Schedule deepfake detection demo
[ ] Request executive protection assessment
[ ] Implement basic detection tools
[ ] Develop incident response plan
[ ] Conduct staff training session

Contact Vibe Intelligence: sales@disruptily.com
Detection Partners: Reality Defender | Sensity
`
  },
  {
    id: 'grc-checklist',
    title: 'GRC Compliance Checklist',
    description: 'GDPR, NIST 800, ISO 27001, CBN/NITDA compliance verification.',
    filename: 'vibe-intelligence-grc-checklist.txt',
    icon: 'ClipboardCheck',
    content: `GRC COMPLIANCE CHECKLIST
=========================
Vibe Intelligence
Governance, Risk & Compliance Assessment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORGANIZATION: ____________________
ASSESSMENT DATE: ____________________
ASSESSOR: ____________________

Mark: ✓ (Compliant) | ○ (Partial) | ✗ (Non-Compliant) | N/A (Not Applicable)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION A: NITDA DATA PROTECTION REGULATION (NDPR)
--------------------------------------------------

A1. Data Processing Principles
[ ] A1.1 Lawful basis documented for all personal data processing
[ ] A1.2 Purpose limitation enforced
[ ] A1.3 Data minimization practiced
[ ] A1.4 Accuracy of data maintained
[ ] A1.5 Storage limitation policies in place

A2. Data Subject Rights
[ ] A2.1 Right to access mechanism available
[ ] A2.2 Right to rectification process documented
[ ] A2.3 Right to erasure ("right to be forgotten") implemented
[ ] A2.4 Right to data portability supported
[ ] A2.5 Consent withdrawal process clear

A3. Organizational Measures
[ ] A3.1 Data Protection Officer appointed (if required)
[ ] A3.2 Data Protection Impact Assessments conducted
[ ] A3.3 Privacy notices published and accessible
[ ] A3.4 Third-party processor agreements in place
[ ] A3.5 Annual NDPR audit completed

NDPR Compliance Score: ___/15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION B: CBN REGULATIONS (Financial Services)
-----------------------------------------------

B1. Customer Due Diligence
[ ] B1.1 KYC procedures documented and enforced
[ ] B1.2 Customer risk categorization implemented
[ ] B1.3 Enhanced due diligence for high-risk customers
[ ] B1.4 Ongoing transaction monitoring active
[ ] B1.5 PEP (Politically Exposed Persons) screening

B2. Anti-Money Laundering
[ ] B2.1 AML policy documented and approved
[ ] B2.2 Suspicious activity reporting procedures
[ ] B2.3 Currency transaction reporting (CTR) compliance
[ ] B2.4 Record retention (minimum 5 years)
[ ] B2.5 Staff AML training conducted annually

B3. Operational Resilience
[ ] B3.1 Business continuity plan documented
[ ] B3.2 Disaster recovery tested annually
[ ] B3.3 Third-party risk management framework
[ ] B3.4 Incident reporting to CBN procedures
[ ] B3.5 Cybersecurity framework implemented

CBN Compliance Score: ___/15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION C: GDPR (International Operations)
------------------------------------------

C1. Lawfulness & Transparency
[ ] C1.1 Legal basis for EU data processing documented
[ ] C1.2 Privacy policy meets GDPR requirements
[ ] C1.3 Cookie consent mechanism implemented
[ ] C1.4 Data processing records maintained (Article 30)
[ ] C1.5 Representative in EU appointed (if required)

C2. Individual Rights
[ ] C2.1 Subject access request process (30-day response)
[ ] C2.2 Automated decision-making safeguards
[ ] C2.3 Data breach notification procedures (72-hour)
[ ] C2.4 Cross-border transfer mechanisms (SCCs/adequacy)
[ ] C2.5 Children's data protection measures

C3. Accountability
[ ] C3.1 Data Protection Impact Assessments for high-risk
[ ] C3.2 Privacy by design in new projects
[ ] C3.3 Processor agreements include GDPR clauses
[ ] C3.4 Staff training on GDPR requirements
[ ] C3.5 Documentation of compliance efforts

GDPR Compliance Score: ___/15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION D: NIST 800-53 SECURITY CONTROLS
----------------------------------------

D1. Access Control (AC)
[ ] D1.1 Access control policy documented
[ ] D1.2 Least privilege principle enforced
[ ] D1.3 Multi-factor authentication implemented
[ ] D1.4 Remote access controls in place
[ ] D1.5 Access reviews conducted quarterly

D2. Incident Response (IR)
[ ] D2.1 Incident response plan documented
[ ] D2.2 Incident response team designated
[ ] D2.3 Incident detection capabilities active
[ ] D2.4 Incident reporting procedures defined
[ ] D2.5 Post-incident analysis conducted

D3. Risk Assessment (RA)
[ ] D3.1 Security risk assessment performed annually
[ ] D3.2 Vulnerability scanning conducted regularly
[ ] D3.3 Penetration testing performed
[ ] D3.4 Risk treatment plans documented
[ ] D3.5 Supply chain risk assessed

NIST Compliance Score: ___/15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION E: ISO 27001 ISMS
-------------------------

E1. Context & Leadership
[ ] E1.1 ISMS scope defined
[ ] E1.2 Information security policy approved
[ ] E1.3 Roles and responsibilities assigned
[ ] E1.4 Management commitment demonstrated
[ ] E1.5 Internal/external issues considered

E2. Risk Management
[ ] E2.1 Risk assessment methodology defined
[ ] E2.2 Risk treatment plan in place
[ ] E2.3 Statement of Applicability documented
[ ] E2.4 Risk owners assigned
[ ] E2.5 Residual risk accepted by management

E3. Operations & Improvement
[ ] E3.1 Operational controls implemented
[ ] E3.2 Internal audits conducted
[ ] E3.3 Management reviews performed
[ ] E3.4 Nonconformities addressed
[ ] E3.5 Continual improvement demonstrated

ISO 27001 Compliance Score: ___/15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OVERALL COMPLIANCE SUMMARY
--------------------------

NDPR (Nigeria):     ___/15  (__%)
CBN Regulations:    ___/15  (__%)
GDPR:               ___/15  (__%)
NIST 800-53:        ___/15  (__%)
ISO 27001:          ___/15  (__%)

TOTAL SCORE:        ___/75  (__%)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GAP ANALYSIS NOTES
------------------

Priority 1 (Critical):
____________________

Priority 2 (High):
____________________

Priority 3 (Medium):
____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Contact Vibe Intelligence for GRC advisory: sales@disruptily.com
`
  },
  {
    id: 'project-discovery',
    title: 'Project Discovery Document',
    description: 'Detailed scoping template for AI implementation projects.',
    filename: 'vibe-intelligence-project-discovery.txt',
    icon: 'FolderSearch',
    content: `PROJECT DISCOVERY DOCUMENT
===========================
Vibe Intelligence
AI Implementation Scoping Template

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECT OVERVIEW
----------------

Project Name: ____________________
Client Organization: ____________________
Project Sponsor: ____________________
Discovery Date: ____________________
Vibe Intelligence Lead: ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BUSINESS CONTEXT
-------------------

1.1 Business Problem Statement:
(Describe the specific business challenge this project addresses)

____________________
____________________
____________________

1.2 Current State:
(How is this problem being addressed today?)

____________________
____________________
____________________

1.3 Desired Future State:
(What does success look like?)

____________________
____________________
____________________

1.4 Business Drivers:
[ ] Cost reduction
[ ] Revenue growth
[ ] Customer experience
[ ] Operational efficiency
[ ] Risk mitigation
[ ] Competitive advantage
[ ] Regulatory compliance
[ ] Other: ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. STAKEHOLDER ANALYSIS
-----------------------

2.1 Project Stakeholders:

| Name | Role | Interest Level | Influence |
|------|------|----------------|-----------|
|      |      |                |           |
|      |      |                |           |
|      |      |                |           |

2.2 Decision Makers:
____________________

2.3 End Users (who will use the solution):
____________________

2.4 Change Champions:
____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. REQUIREMENTS
---------------

3.1 Functional Requirements:
(What must the solution do?)

1. ____________________
2. ____________________
3. ____________________
4. ____________________
5. ____________________

3.2 Non-Functional Requirements:

Performance:
- Expected response time: ____________________
- Concurrent users: ____________________
- Availability requirement: ____%

Security:
- Authentication: ____________________
- Data encryption: ____________________
- Audit logging: ____________________

Integration:
- Systems to integrate: ____________________
- API requirements: ____________________

3.3 Out of Scope:
(What is explicitly NOT included?)

1. ____________________
2. ____________________
3. ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DATA ASSESSMENT
------------------

4.1 Data Sources:

| Source | Type | Volume | Quality | Access |
|--------|------|--------|---------|--------|
|        |      |        |         |        |
|        |      |        |         |        |
|        |      |        |         |        |

4.2 Data Preparation Required:
[ ] Data cleaning
[ ] Data transformation
[ ] Data integration
[ ] Data labeling
[ ] None - data is ready

4.3 Data Privacy Considerations:
____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. TECHNICAL ENVIRONMENT
------------------------

5.1 Current Infrastructure:
- Cloud provider: ____________________
- On-premises systems: ____________________
- Development tools: ____________________

5.2 Constraints:
- Technical: ____________________
- Regulatory: ____________________
- Organizational: ____________________

5.3 Preferred Deployment:
[ ] Cloud (SaaS)
[ ] Private cloud
[ ] On-premises
[ ] Hybrid

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SUCCESS CRITERIA
-------------------

6.1 Key Performance Indicators:

| KPI | Current Baseline | Target | Measurement |
|-----|------------------|--------|-------------|
|     |                  |        |             |
|     |                  |        |             |
|     |                  |        |             |

6.2 Acceptance Criteria:
(What must be true for the project to be considered successful?)

1. ____________________
2. ____________________
3. ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. PROJECT PARAMETERS
---------------------

7.1 Timeline:
- Desired go-live date: ____________________
- Key milestones: ____________________
- Dependencies: ____________________

7.2 Budget:
- Approved budget: ₦____________________
- Budget flexibility: ____________________

7.3 Resources:
- Client team availability: ____________________
- Training requirements: ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RISKS & ASSUMPTIONS
----------------------

8.1 Key Risks:

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
|      |             |        |            |
|      |             |        |            |
|      |             |        |            |

8.2 Assumptions:
1. ____________________
2. ____________________
3. ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. NEXT STEPS
-------------

[ ] Complete technical assessment
[ ] Finalize requirements document
[ ] Prepare proposal and SOW
[ ] Schedule kickoff meeting

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SIGN-OFF
--------

Client Representative: ____________________
Date: ____________________

Vibe Intelligence: ____________________
Date: ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Contact: sales@disruptily.com
Vibe Intelligence | AI Solutions for Nigerian Enterprises
`
  },
  {
    id: 'roi-business-case',
    title: 'ROI Business Case Template',
    description: 'Financial justification framework for AI investments.',
    filename: 'vibe-intelligence-roi-business-case.txt',
    icon: 'Calculator',
    content: `ROI BUSINESS CASE TEMPLATE
===========================
Vibe Intelligence
AI Investment Justification Framework

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXECUTIVE SUMMARY
-----------------

Project Name: ____________________
Prepared By: ____________________
Date: ____________________
Version: ____________________

One-Paragraph Summary:
____________________
____________________
____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INVESTMENT OVERVIEW
----------------------

1.1 Proposed AI Solution:
____________________

1.2 Business Problem Addressed:
____________________

1.3 Strategic Alignment:
(How does this support organizational goals?)
____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. COST ANALYSIS (₦)
--------------------

2.1 Implementation Costs (One-Time):

| Cost Category              | Amount (₦)    |
|----------------------------|---------------|
| Software/Platform Licenses |               |
| Integration Development    |               |
| Data Preparation           |               |
| Training & Change Mgmt     |               |
| Infrastructure Setup       |               |
| Consulting/Professional    |               |
| Contingency (10-20%)       |               |
|----------------------------|---------------|
| TOTAL IMPLEMENTATION       |               |

2.2 Ongoing Annual Costs:

| Cost Category              | Year 1 (₦)    | Year 2 (₦)    | Year 3 (₦)    |
|----------------------------|---------------|---------------|---------------|
| Subscription/License Fees  |               |               |               |
| Support & Maintenance      |               |               |               |
| Cloud/Infrastructure       |               |               |               |
| Internal Staff Time        |               |               |               |
| Training (Ongoing)         |               |               |               |
|----------------------------|---------------|---------------|---------------|
| TOTAL ANNUAL               |               |               |               |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. BENEFIT ANALYSIS (₦)
-----------------------

3.1 Quantifiable Benefits:

COST SAVINGS:
| Benefit Category           | Annual Value (₦) | Calculation Basis        |
|----------------------------|------------------|--------------------------|
| Labor cost reduction       |                  |                          |
| Error/rework reduction     |                  |                          |
| Processing time savings    |                  |                          |
| Fraud prevention           |                  |                          |
|----------------------------|------------------|--------------------------|
| TOTAL COST SAVINGS         |                  |                          |

REVENUE ENHANCEMENT:
| Benefit Category           | Annual Value (₦) | Calculation Basis        |
|----------------------------|------------------|--------------------------|
| Increased sales/leads      |                  |                          |
| Improved conversion rate   |                  |                          |
| Customer retention value   |                  |                          |
| New market opportunities   |                  |                          |
|----------------------------|------------------|--------------------------|
| TOTAL REVENUE ENHANCEMENT  |                  |                          |

3.2 Non-Quantifiable Benefits:
(Strategic, competitive, compliance, etc.)

• ____________________
• ____________________
• ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FINANCIAL PROJECTIONS
------------------------

4.1 Three-Year Cash Flow (₦):

|                      | Year 0       | Year 1       | Year 2       | Year 3       |
|----------------------|--------------|--------------|--------------|--------------|
| Implementation Cost  | (           )|              |              |              |
| Annual Costs         |              | (           )| (           )| (           )|
| Cost Savings         |              |              |              |              |
| Revenue Enhancement  |              |              |              |              |
|----------------------|--------------|--------------|--------------|--------------|
| NET CASH FLOW        |              |              |              |              |
| CUMULATIVE           |              |              |              |              |

4.2 ROI Calculation:

Total Investment (3 years): ₦____________________
Total Benefits (3 years):   ₦____________________
Net Benefit:                ₦____________________

ROI = (Total Benefits - Total Investment) / Total Investment × 100

ROI = _____________________%

4.3 Payback Period:

Payback Period = Total Investment / Annual Net Benefit

Payback Period = __________ months

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. SENSITIVITY ANALYSIS
-----------------------

5.1 Scenario Analysis:

| Scenario      | Assumption Change          | Revised ROI | Payback  |
|---------------|----------------------------|-------------|----------|
| Conservative  | Benefits 20% lower         |             |          |
| Base Case     | As calculated              |             |          |
| Optimistic    | Benefits 20% higher        |             |          |
| Worst Case    | Benefits 40% lower         |             |          |

5.2 Break-Even Analysis:
Minimum benefit required to break even: ₦____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. RISK ASSESSMENT
------------------

| Risk                        | Probability | Impact  | Mitigation              |
|-----------------------------|-------------|---------|-------------------------|
| Implementation delays       |             |         |                         |
| Lower than expected adoption|             |         |                         |
| Integration challenges      |             |         |                         |
| Regulatory changes          |             |         |                         |
| Technology obsolescence     |             |         |                         |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. RECOMMENDATION
-----------------

[ ] APPROVE - Strong ROI with acceptable risk
[ ] APPROVE WITH CONDITIONS - Proceed with specified modifications
[ ] DEFER - Revisit when conditions change
[ ] REJECT - Does not meet investment criteria

Recommendation Summary:
____________________
____________________
____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. APPROVAL
-----------

Prepared By: ____________________
Date: ____________________

Reviewed By: ____________________
Date: ____________________

Approved By: ____________________
Date: ____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

APPENDIX: ASSUMPTIONS & CALCULATIONS
------------------------------------

Document all assumptions and calculation methodologies here:

____________________
____________________
____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Need help building your business case?
Contact Vibe Intelligence: sales@disruptily.com
`
  }
];
