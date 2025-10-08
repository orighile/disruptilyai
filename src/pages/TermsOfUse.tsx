import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Use</h1>
          
          <div className="glass-card space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the Disruptily AI website and services, you accept and agree 
                to be bound by these Terms of Use. If you do not agree to these terms, please do not 
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
              <p className="text-muted-foreground">
                Disruptily AI provides AI consulting, automation solutions, and related services 
                to businesses in Nigeria and beyond. Our services include but are not limited to 
                AI strategy consulting, automation implementation, and ongoing support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-3">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, trademarks, and intellectual property on this website are owned by 
                Disruptily AI or our licensors. You may not reproduce, distribute, or create 
                derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Service Limitations</h2>
              <p className="text-muted-foreground">
                While we strive to provide accurate and reliable services, we do not guarantee 
                uninterrupted access or error-free operation. We reserve the right to modify, 
                suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground">
                We maintain strict confidentiality regarding all client information and business 
                requirements shared during consultations. Both parties agree to protect confidential 
                information disclosed during the course of our engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Disruptily AI shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages arising from your 
                use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Use shall be governed by and construed in accordance with the laws 
                of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive 
                jurisdiction of Nigerian courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment terms for services will be outlined in individual service agreements. 
                All fees are in Nigerian Naira (₦) unless otherwise specified. Payment is due 
                according to the terms specified in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Modifications to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Use at any time. We will notify 
                users of any material changes. Your continued use of our services after such 
                modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions regarding these Terms of Use, please contact us:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Disruptily AI</p>
                <p>40a Folakemi Avenue, Eleko, Ibeju-Lekki, Lagos</p>
                <p>Email: <a href="mailto:sales@disruptily.com" className="text-accent-400 hover:underline">sales@disruptily.com</a></p>
              </div>
            </section>

            <section>
              <p className="text-sm text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
