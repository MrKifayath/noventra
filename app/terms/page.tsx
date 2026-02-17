'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-lg text-foreground/70 mb-12">Last updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-3xl font-bold">1. Acceptance of Terms</h2>
              <p className="text-foreground/80">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">2. Use License</h2>
              <p className="text-foreground/80">
                Permission is granted to temporarily download one copy of the materials (information or software) on Noventra Technologies' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">3. Disclaimer</h2>
              <p className="text-foreground/80">
                The materials on Noventra Technologies' website are provided on an "as is" basis. Noventra Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">4. Limitations</h2>
              <p className="text-foreground/80">
                In no event shall Noventra Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Noventra Technologies' website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">5. Accuracy of Materials</h2>
              <p className="text-foreground/80">
                The materials appearing on Noventra Technologies' website could include technical, typographical, or photographic errors. Noventra Technologies does not warrant that any of the materials on the website are accurate, complete, or current. Noventra Technologies may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">6. Links</h2>
              <p className="text-foreground/80">
                Noventra Technologies has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Noventra Technologies of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">7. Modifications</h2>
              <p className="text-foreground/80">
                Noventra Technologies may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">8. Governing Law</h2>
              <p className="text-foreground/80">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">9. User Content</h2>
              <p className="text-foreground/80">
                Any content you submit, post, or display on or through our services remains your property. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">10. Prohibited Activities</h2>
              <p className="text-foreground/80">
                When using our website, you agree not to:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Harass, threaten, defame, or abuse any individual or entity</li>
                <li>Post spam, malware, or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Engage in any fraudulent or deceptive activities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">11. Limitation of Liability</h2>
              <p className="text-foreground/80">
                In no case shall Noventra Technologies, its directors, officers, employees, or agents be liable to you for any indirect, incidental, special, consequential, or punitive damages, including but not limited to damages for lost profits, revenue, data, or use.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">12. Indemnification</h2>
              <p className="text-foreground/80">
                You agree to indemnify and hold harmless Noventra Technologies and its officers, directors, employees, agents, and successors from any and all claims, actions, damages, liabilities, and expense (including attorney's fees) arising out of your use of or access to our website or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">13. Termination</h2>
              <p className="text-foreground/80">
                Noventra Technologies may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including if you breach the terms and conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">14. Entire Agreement</h2>
              <p className="text-foreground/80">
                These terms and conditions constitute the entire agreement between you and Noventra Technologies regarding your use of the website and supersede all prior negotiations, representations, and agreements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <p className="text-foreground/80">
                For questions about these Terms & Conditions, please contact us:
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
