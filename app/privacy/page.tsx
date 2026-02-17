'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-lg text-foreground/70 mb-12">Last updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Introduction</h2>
              <p className="text-foreground/80">
                Noventra Technologies Private Limited ("Company", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website and use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                  <p className="text-foreground/80">
                    We may collect personal information that you voluntarily provide to us, such as:
                  </p>
                  <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-2">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Company information and industry details</li>
                    <li>Information provided through contact forms and inquiries</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Usage Information</h3>
                  <p className="text-foreground/80">
                    We automatically collect certain information about your interaction with our website:
                  </p>
                  <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-2">
                    <li>IP addresses and browser types</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Device information and operating systems</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">How We Use Your Information</h2>
              <p className="text-foreground/80">We use the information we collect for various purposes:</p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and requests</li>
                <li>To send transactional and promotional communications</li>
                <li>To improve and optimize our website and services</li>
                <li>To monitor and analyze usage patterns and trends</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Information Sharing</h2>
              <p className="text-foreground/80">
                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as follows:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2">
                <li>To service providers who assist us in operating our website and conducting business</li>
                <li>When required by law or to protect our legal rights</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Data Security</h2>
              <p className="text-foreground/80">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Secure socket layer (SSL) technology</li>
                <li>Restricted access to personal information</li>
                <li>Regular security audits and assessments</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Your Rights</h2>
              <p className="text-foreground/80">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your information</li>
                <li>Right to opt-out of marketing communications</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Cookies and Tracking</h2>
              <p className="text-foreground/80">
                Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Children's Privacy</h2>
              <p className="text-foreground/80">
                Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete it immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Policy Changes</h2>
              <p className="text-foreground/80">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="text-foreground/80">
                For questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-4">
                <p className="text-foreground font-semibold">Noventra Technologies Private Limited</p>
                <p className="text-foreground/70">0, Gohana Road, OPP. SUGAR MILL</p>
                <p className="text-foreground/70">Sanjay Colony, Panipat, Haryana 132103</p>
                <p className="text-foreground/70 mt-2">Email: info@noventra.com</p>
                <p className="text-foreground/70">Phone: +91 8100012764</p>
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
