'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function CancellationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Cancellation Policy</h1>
          <p className="text-lg text-foreground/70 mb-12">Last updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Overview</h2>
              <p className="text-foreground/80">
                Noventra Technologies Private Limited maintains a fair and transparent cancellation policy for all service tokens and software solutions. We understand that business needs can change, and we strive to accommodate our clients while maintaining operational efficiency.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Service Token Cancellation</h2>
              <p className="text-foreground/80">
                Our service token cancellation policy is structured to provide flexibility while ensuring fair treatment for all parties:
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-4">
                <ul className="list-disc list-inside text-foreground/80 space-y-3">
                  <li>Service tokens can be cancelled within 24 hours of purchase for a full refund</li>
                  <li>Cancellations between 24 hours and 7 days are subject to a 15% processing fee</li>
                  <li>After 7 days, cancellations are subject to a 25% processing fee</li>
                  <li>Once service delivery has commenced, tokens are non-cancellable</li>
                  <li>Unused tokens remain valid for 12 months from the date of purchase</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Custom Development Projects</h2>
              <p className="text-foreground/80">
                Custom development projects have specific cancellation terms based on project stage:
              </p>
              <div className="space-y-4 mt-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Planning Phase</h3>
                  <p className="text-foreground/80">
                    Projects can be cancelled with 7 days written notice. A 10% cancellation fee applies to cover initial consultation and planning costs.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Development Phase</h3>
                  <p className="text-foreground/80">
                    Cancellation requires 14 days written notice. Charges apply for work completed up to the cancellation date, plus a 20% cancellation fee on remaining balance.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Testing/Deployment Phase</h3>
                  <p className="text-foreground/80">
                    Projects in final stages cannot be cancelled. Full payment is required for completed work. Modifications to scope can be negotiated.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Subscription Services</h2>
              <p className="text-foreground/80">
                For ongoing subscription-based services:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-4">
                <li>Monthly subscriptions can be cancelled anytime with 30 days notice</li>
                <li>Annual subscriptions can be cancelled with 60 days notice</li>
                <li>No refunds for partial months or unused subscription periods</li>
                <li>Service continues until the end of the current billing cycle</li>
                <li>Data export available for 30 days after cancellation</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">How to Cancel</h2>
              <p className="text-foreground/80">
                To initiate a cancellation, please follow these steps:
              </p>
              <ol className="list-decimal list-inside text-foreground/80 space-y-3 mt-4">
                <li>Submit a written cancellation request to info@noventra.com</li>
                <li>Include your order number, service details, and reason for cancellation</li>
                <li>Our team will review your request within 2 business days</li>
                <li>You will receive a cancellation confirmation with applicable fees</li>
                <li>Refunds (if applicable) will be processed according to our refund policy</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Force Majeure</h2>
              <p className="text-foreground/80">
                In cases of force majeure (natural disasters, pandemics, government actions, etc.), both parties may cancel or suspend services without penalty. We will work with clients to find mutually acceptable solutions during such circumstances.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Company-Initiated Cancellation</h2>
              <p className="text-foreground/80">
                Noventra Technologies reserves the right to cancel services under the following conditions:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-4">
                <li>Non-payment or repeated payment failures</li>
                <li>Violation of terms of service</li>
                <li>Fraudulent or illegal activities</li>
                <li>Abusive behavior towards staff</li>
                <li>Technical impossibility to deliver services</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                In such cases, clients will receive written notice and any applicable refunds for unused services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Token Validity and Expiration</h2>
              <p className="text-foreground/80">
                Service tokens have the following validity terms:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-4">
                <li>All tokens are valid for 12 months from purchase date</li>
                <li>Expired tokens cannot be refunded or extended</li>
                <li>Email reminders sent 60 days and 30 days before expiration</li>
                <li>Tokens can be transferred to different services within validity period</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Exceptions and Special Cases</h2>
              <p className="text-foreground/80">
                We understand that exceptional circumstances may arise. For special cases not covered by this policy, please contact our customer service team. We will review each situation individually and work towards a fair resolution.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <p className="text-foreground/80">
                For cancellation requests or questions about this policy:
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-4">
                <p className="text-foreground font-semibold">Noventra Technologies Private Limited</p>
                <p className="text-foreground/70">0, Gohana Road, OPP. SUGAR MILL</p>
                <p className="text-foreground/70">Sanjay Colony, Panipat, Haryana 132103</p>
                <p className="text-foreground/70 mt-2">Email: info@noventra.com</p>
                <p className="text-foreground/70">Phone: +91 8100012764</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Related Policies</h2>
              <p className="text-foreground/80">
                Please also review our related policies:
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="/refund" className="text-accent hover:text-primary underline font-semibold">
                  Refund Policy
                </Link>
                <Link href="/terms" className="text-accent hover:text-primary underline font-semibold">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-accent hover:text-primary underline font-semibold">
                  Privacy Policy
                </Link>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-accent/10">
            <Link href="/" className="text-accent hover:text-primary transition-colors font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
