import React from "react";
import { Link } from "react-router-dom";
import { Button, GhostButton } from "./ui";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-ai-tech.jpg";

const Hero = () => {
  return (
    <section className="container py-20 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              AI Security & Compliance Experts
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Protect &amp; Grow Your Business with <span className="text-gradient">AI Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Enterprise-grade deepfake detection, AI governance, and marketing automation — built for organizations that demand security, compliance, and results.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Vibe Intelligence empowers enterprises worldwide to harness AI responsibly. From real-time deepfake detection and synthetic media analysis to regulatory compliance and AI-powered marketing, our expert team delivers tailored solutions that drive measurable impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button as={Link} to="/consultation" size="lg" className="group">
              Book Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8">
            <div>
              <div className="text-2xl font-bold text-accent-400">50+</div>
              <div className="text-sm text-muted-foreground">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-400">$10M+</div>
              <div className="text-sm text-muted-foreground">Cost Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-400">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-accent-600/20 rounded-3xl blur-3xl"></div>
          <img src={heroImage} alt="AI Technology Visualization" className="relative z-10 rounded-3xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
