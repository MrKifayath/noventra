'use client'

import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses starting their digital journey',
    price: 'Custom',
    features: [
      'Basic Business Management Software',
      'Up to 5 users',
      'Cloud hosting included',
      'Monthly backups',
      'Email support',
      'Standard implementation',
      'Basic training included',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'For growing organizations with advanced requirements',
    price: 'Custom',
    features: [
      'Enterprise Resource Planning System',
      'Up to 50 users',
      'Advanced cloud infrastructure',
      'Daily automated backups',
      'Priority email & phone support',
      'Custom implementation',
      'Comprehensive training program',
      'Advanced reporting & analytics',
      'API integration support',
      'Custom modules included',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Complete solutions for large-scale operations',
    price: 'Custom',
    features: [
      'Full suite of enterprise products',
      'Unlimited users',
      'Dedicated server infrastructure',
      'Real-time replication backups',
      '24/7 dedicated support team',
      'Full custom development',
      'Executive training program',
      'Advanced analytics & BI',
      'Unlimited API integration',
      'Unlimited custom modules',
      'On-premise option available',
      'SLA guarantee (99.99% uptime)',
    ],
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Implementation timeline depends on your requirements. Starter packages typically take 2-4 weeks, Professional 4-8 weeks, and Enterprise solutions 8-16 weeks. We work closely with you to ensure a smooth transition.',
  },
  {
    question: 'Do you offer post-implementation support?',
    answer: 'Absolutely! All plans include ongoing support. We provide training, bug fixes, and maintenance. You can upgrade your support level at any time based on your needs.',
  },
  {
    question: 'Can I scale up later?',
    answer: 'Yes, our solutions are designed to scale. You can start with a Starter plan and upgrade to Professional or Enterprise as your business grows without losing any data or configuration.',
  },
  {
    question: 'What about integration with existing systems?',
    answer: 'We specialize in seamless integrations. Our team can connect your new solution with existing systems, databases, and third-party applications. Integration support is included in Professional and Enterprise plans.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'We offer customized demos based on your specific needs. Contact our sales team to schedule a demo and discuss which plan is best for your organization.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Pricing Plans</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Transparent Pricing
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All prices are customized based on your specific requirements.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700 ${
                  plan.highlighted
                    ? 'border-2 border-accent shadow-2xl scale-105 md:scale-110'
                    : 'border border-border'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {/* Background */}
                <div className={`absolute inset-0 rounded-2xl ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-accent/20 to-primary/20'
                    : 'bg-gradient-to-br from-card/50 to-background/50'
                }`} />

                {/* Content */}
                <div className="relative z-10 p-8">
                  {plan.highlighted && (
                    <div className="inline-block px-3 py-1 bg-accent text-background rounded-full text-xs font-bold mb-4">
                      MOST POPULAR
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground/70 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  </div>

                  <Link href="/solutions">
                    <Button
                      className={`w-full mb-8 py-6 ${
                        plan.highlighted
                          ? 'bg-primary hover:bg-primary/90 text-white'
                          : 'border border-primary text-primary hover:bg-primary/10'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">What Every Plan Includes</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: '🚀',
                title: 'Quick Implementation',
                desc: 'Fast deployment process tailored to your timeline',
              },
              {
                icon: '💻',
                title: 'Modern Technology',
                desc: 'Built with latest frameworks and best practices',
              },
              {
                icon: '🔒',
                title: 'Enterprise Security',
                desc: 'Bank-level security and data encryption',
              },
              {
                icon: '📞',
                title: 'Expert Support',
                desc: 'Dedicated team ready to assist you',
              },
              {
                icon: '📈',
                title: 'Scalability',
                desc: 'Grows with your business needs',
              },
              {
                icon: '🌐',
                title: 'Cloud Infrastructure',
                desc: 'Reliable and accessible from anywhere',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 animate-in fade-in duration-700" style={{ transitionDelay: `${idx * 50}ms` }}>
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300 animate-in fade-in duration-700"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <h3 className="text-lg font-bold mb-3 text-primary">{faq.question}</h3>
                <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Not sure which plan is right for you?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Our team can help you find the perfect solution for your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90  px-8" style={{ color: 'white' }}>
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Noventra" className="h-24 w-24 rounded-lg" />
              <span className="text-lg font-bold text-primary">Noventra Technologies</span>
            </div>
            <p className="text-sm text-foreground/70">
              © 2024 Noventra Technologies Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
