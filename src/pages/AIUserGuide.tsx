import { Card } from '../components/ui'
import CTASection from '../components/CTASection'

export default function AIUserGuide() {
  return (
    <div className="container max-w-7xl py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">AI User Guide</h1>
      <p className="mt-2 text-slate-300 max-w-3xl">
        A practical guide for Nigerian businesses to adopt, scale, and benefit from Artificial Intelligence.
      </p>

      <div className="mt-8 grid gap-6">
        <Card>
          <h2 className="font-semibold text-xl">1. What is AI in Business?</h2>
          <p className="text-sm text-slate-300 mt-2">
            AI refers to computer systems that can learn, reason, and make decisions. It automates tasks,
            enhances decision-making, and improves customer experiences.
          </p>
        </Card>

        <Card>
          <h2 className="font-semibold text-xl">2. Why Nigerian Businesses Need AI</h2>
          <ul className="list-disc list-inside text-sm text-slate-300 mt-2 grid gap-1">
            <li>📊 Market Competition</li>
            <li>⚡ Efficiency</li>
            <li>💰 Cost Savings</li>
            <li>✅ Compliance</li>
            <li>🌍 Scalability</li>
          </ul>
        </Card>

        <Card>
          <h2 className="font-semibold text-xl">3. How We Apply AI (Roadmap)</h2>
          <ol className="list-decimal list-inside text-sm text-slate-300 mt-2 grid gap-1">
            <li>Discover</li>
            <li>Design</li>
            <li>Deliver</li>
            <li>Scale</li>
          </ol>
        </Card>

        <Card>
          <h2 className="font-semibold text-xl">4. Key AI Use Cases in Nigeria</h2>
          <ul className="list-disc list-inside text-sm text-slate-300 mt-2 grid gap-1">
            <li>🏦 Banking & Finance</li>
            <li>🛒 Retail & E-commerce</li>
            <li>🚚 Logistics</li>
            <li>🏥 Healthcare</li>
            <li>📣 Marketing</li>
          </ul>
        </Card>

        <Card>
          <h2 className="font-semibold text-xl">5. Getting Started (Action Plan)</h2>
          <ul className="list-disc list-inside text-sm text-slate-300 mt-2 grid gap-1">
            <li>Take the AI Readiness Assessment</li>
            <li>Book a Free Consultation</li>
            <li>Start with a Proof of Concept</li>
            <li>Train your staff</li>
          </ul>
        </Card>

        <Card>
          <h2 className="font-semibold text-xl">6. Common Myths about AI in Nigeria</h2>
          <ul className="list-disc list-inside text-sm text-slate-300 mt-2 grid gap-1">
            <li>❌ AI is only for big companies</li>
            <li>❌ AI replaces jobs</li>
            <li>❌ AI requires expensive infrastructure</li>
          </ul>
        </Card>

        <Card>
          <h2 className="font-semibold text-xl">7. Resources</h2>
          <p className="text-sm text-slate-300 mt-2">
            📥 State of AI in Nigeria Report • 📊 ROI Calculator • 📧 Newsletter
          </p>
        </Card>
      </div>

      <CTASection />
    </div>
  )
}