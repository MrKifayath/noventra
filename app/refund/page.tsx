'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Refund Policy</h1>
          <p className="text-lg text-foreground/70 mb-12">Last updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Our Commitment</h2>
              <p className="text-foreground/80">
                At Noventra Technologies Private Limited, we are committed to customer satisfaction. Our refund policy is designed to be fair, transparent, and straightforward. We want you to feel confident in your purchase decisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Service Token Refunds</h2>
              <p className="text-foreground/80">
                Our service token refund policy provides flexibility based on timing and usage:
              </p>
              <div className="space-y-4 mt-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Within 24 Hours</h3>
                  <p className="text-foreground/80">
                    <strong>100% Full Refund</strong> - No questions asked. Simply contact us within 24 hours of purchase for a complete refund.
                  </p>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">24 Hours - 7 Days</h3>
                  <p className="text-foreground/80">
                    <strong>85% Refund</strong> - If no services have been utilized, you'll receive 85% of the purchase value (15% processing fee applies).
                  </p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-orange-400">After 7 Days</h3>
                  <p className="text-foreground/80">
                    <strong>75% Refund</strong> - Available only if no services have been utilized (25% processing fee applies).
                  </p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-red-400">After Service Delivery</h3>
                  <p className="text-foreground/80">
                    <strong>No Refund</strong> - Once service delivery has started or tokens have been partially used, refunds are not available.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Custom Development Refunds</h2>
              <p className="text-foreground/80">
                For custom development projects, refunds are calculated based on work completed:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-3 mt-4">
                <li>Planning phase: 90% refund available (10% covers consultation costs)</li>
                <li>Development phase: Refund = Total paid - (Work completed + 20% cancellation fee)</li>
                <li>Testing phase: Refund = Total paid - (Work completed + 30% cancellation fee)</li>
                <li>Completed projects: No refunds available</li>
                <li>All work-in-progress will be delivered to client upon refund processing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Defective or Non-Delivered Services</h2>
              <p className="text-foreground/80">
                We stand behind the quality of our work. If services are defective or not delivered as promised:
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-4">
                <ul className="list-disc list-inside text-foreground/80 space-y-3">
                  <li>Full refund available for services that don't meet agreed specifications</li>
                  <li>We will first attempt to resolve issues and deliver as promised</li>
                  <li>If resolution is not possible, full refund will be processed</li>
                  <li>Refund includes all payments made for the defective service</li>
                  <li>Processing time: 7-14 business days from approval</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Subscription Refunds</h2>
              <p className="text-foreground/80">
                Subscription-based services have specific refund terms:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-4">
                <li>Monthly subscriptions: No refunds for partial months</li>
                <li>Annual subscriptions: Pro-rated refund available within first 30 days</li>
                <li>After 30 days: No refunds, but cancellation prevents future charges</li>
                <li>Service continues until end of current billing period</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">How to Request a Refund</h2>
              <p className="text-foreground/80">
                Follow these steps to request a refund:
              </p>
              <ol className="list-decimal list-inside text-foreground/80 space-y-3 mt-4 bg-card border border-border rounded-lg p-6">
                <li>Email info@noventra.com with subject line "Refund Request"</li>
                <li>Include your order number and purchase date</li>
                <li>Provide reason for refund request</li>
                <li>Attach any relevant documentation or screenshots</li>
                <li>Our team will review within 2 business days</li>
                <li>You'll receive approval/denial notification via email</li>
                <li>Approved refunds processed within 5-10 business days</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Refund Processing</h2>
              <p className="text-foreground/80">
                Once your refund is approved:
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-4">
                <ul className="list-disc list-inside text-foreground/80 space-y-3">
                  <li>Refunds are credited to the original payment method</li>
                  <li>Processing time: 5-10 business days from approval</li>
                  <li>Bank processing may take additional 3-5 business days</li>
                  <li>You'll receive email confirmation when refund is initiated</li>
                  <li>For credit card payments, refund appears as credit on statement</li>
                  <li>For bank transfers, funds deposited directly to account</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Non-Refundable Items</h2>
              <p className="text-foreground/80">
                The following are not eligible for refunds:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-4">
                <li>Services already delivered and accepted</li>
                <li>Tokens used for any service delivery</li>
                <li>Third-party software licenses purchased on your behalf</li>
                <li>Domain names and SSL certificates</li>
                <li>Expired service tokens (beyond 12-month validity)</li>
                <li>Training sessions already conducted</li>
                <li>Consultation fees for completed consultations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Partial Refunds</h2>
              <p className="text-foreground/80">
                In certain situations, partial refunds may be granted:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-4">
                <li>Services partially delivered but not meeting specifications</li>
                <li>Project scope reduced by mutual agreement</li>
                <li>Unused portions of service packages</li>
                <li>Prorated refunds for annual subscriptions (first 30 days only)</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                Partial refund amounts are calculated based on work completed, resources utilized, and applicable fees.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Disputed Charges</h2>
              <p className="text-foreground/80">
                If you believe you've been charged incorrectly:
              </p>
              <ol className="list-decimal list-inside text-foreground/80 space-y-2 mt-4">
                <li>Contact us immediately at info@noventra.com</li>
                <li>Provide transaction details and reason for dispute</li>
                <li>We'll investigate within 3 business days</li>
                <li>If charge was in error, immediate refund will be processed</li>
                <li>You'll receive detailed explanation of all charges</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Refund Exceptions</h2>
              <p className="text-foreground/80">
                We reserve the right to deny refunds in cases of:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-4">
                <li>Fraudulent refund requests</li>
                <li>Violation of terms of service</li>
                <li>Abuse of refund policy</li>
                <li>Services delivered as specified and accepted by client</li>
                <li>Requests made beyond eligible timeframes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <p className="text-foreground/80">
                For refund requests or questions about this policy:
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-4">
                <p className="text-foreground font-semibold">Noventra Technologies Private Limited</p>
                <p className="text-foreground/70">0, Gohana Road, OPP. SUGAR MILL</p>
                <p className="text-foreground/70">Sanjay Colony, Panipat, Haryana 132103</p>
                <p className="text-foreground/70 mt-2">Email: info@noventra.com</p>
                <p className="text-foreground/70">Phone: +91 8100012764</p>
                <p className="text-foreground/70 mt-2">GSTIN: 06AALCN1852F1ZI</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Related Policies</h2>
              <p className="text-foreground/80">
                Please also review our related policies:
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="/cancellation" className="text-accent hover:text-primary underline font-semibold">
                  Cancellation Policy
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
