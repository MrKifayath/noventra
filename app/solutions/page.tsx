'use client'

import Link from 'next/link'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

const solutions = [
  {
    id: 1,
    title: 'Business Management Software',
    shortDesc: 'Streamline daily operations',
    fullDesc: 'Our custom business management software is designed to handle the complexities of modern business operations. It includes data management systems, workflow tracking, automated reporting, and complete process automation tailored to your specific business needs.',
    features: [
      'Real-time data management',
      'Automated workflow tracking',
      'Custom reporting dashboards',
      'Process automation engine',
      'Multi-user access control',
      'Scalable architecture',
    ],
    benefits: [
      'Reduce operational costs',
      'Improve efficiency by 40%+',
      'Real-time insights',
      'Better decision making',
    ],
    pricing: {
      starter: { tokens: 500, price: 300 },
      professional: { tokens: 1000, price: 550 },
      business: { tokens: 2000, price: 1000 },
      enterprise: { tokens: 5000, price: 2300 },
    },
  },
  {
    id: 2,
    title: 'Enterprise Resource Planning (ERP)',
    shortDesc: 'Integrated business operations',
    fullDesc: 'Our comprehensive ERP solutions integrate all aspects of your business - finance, supply chain, HR, manufacturing, and more. Access unified data across departments through a centralized system designed for enterprise-scale operations.',
    features: [
      'Financial management module',
      'Supply chain optimization',
      'HR and payroll management',
      'Manufacturing execution',
      'Inventory optimization',
      'Business intelligence',
    ],
    benefits: [
      'Single source of truth',
      'Eliminate data silos',
      'Improve collaboration',
      'Reduce operating expenses',
    ],
    pricing: {
      starter: { tokens: 500, price: 350 },
      professional: { tokens: 1000, price: 650 },
      business: { tokens: 2000, price: 1200 },
      enterprise: { tokens: 5000, price: 5000 },
    },
  },
  {
    id: 3,
    title: 'Web Application Systems',
    shortDesc: 'Secure online platforms',
    fullDesc: 'Build powerful web applications with our secure, scalable infrastructure. From admin dashboards to customer portals, we develop robust web systems that handle enterprise-level traffic and provide exceptional user experiences.',
    features: [
      'Responsive design',
      'Enterprise security',
      'High-performance servers',
      'Admin dashboards',
      'Real-time updates',
      'Mobile optimization',
    ],
    benefits: [
      '99.9% uptime SLA',
      'Fast loading speeds',
      'Secure data handling',
      'Scalable infrastructure',
    ],
    pricing: {
      starter: { tokens: 500, price: 300 },
      professional: { tokens: 1000, price: 550 },
      business: { tokens: 2000, price: 1000 },
      enterprise: { tokens: 5000, price: 2300 },
    },
  },
  {
    id: 4,
    title: 'CRM & Customer Management',
    shortDesc: 'Enhance customer relationships',
    fullDesc: 'Centralize customer information and interactions. Our CRM solutions help you manage leads, track sales, automate customer communications, and build lasting relationships with comprehensive customer insights.',
    features: [
      'Contact management',
      'Sales pipeline tracking',
      'Communication history',
      'Lead scoring',
      'Customer segmentation',
      'Analytics and reporting',
    ],
    benefits: [
      'Increase sales by 30%',
      'Improve customer retention',
      'Better customer insights',
      'Streamlined workflows',
    ],
    pricing: {
      starter: { tokens: 500, price: 300 },
      professional: { tokens: 1000, price: 550 },
      business: { tokens: 2000, price: 1000 },
      enterprise: { tokens: 5000, price: 5000 },
    },
  },
  {
    id: 5,
    title: 'Inventory & Data Management',
    shortDesc: 'Complete asset tracking',
    fullDesc: 'Maintain precise inventory control and structured data management. Our systems track stock levels, automate reordering, provide real-time visibility, and generate comprehensive inventory reports.',
    features: [
      'Real-time inventory tracking',
      'Automated reordering',
      'Barcode integration',
      'Multi-location support',
      'Demand forecasting',
      'Compliance reporting',
    ],
    benefits: [
      'Reduce waste by 25%',
      'Prevent stockouts',
      'Optimize storage',
      'Lower carrying costs',
    ],
    pricing: {
      starter: { tokens: 500, price: 300 },
      professional: { tokens: 1000, price: 550 },
      business: { tokens: 2000, price: 1000 },
      enterprise: { tokens: 5000, price: 4500 },
    },
  },
  {
    id: 6,
    title: 'E-commerce & Web Solutions',
    shortDesc: 'Digital storefronts',
    fullDesc: 'Launch your online business with our comprehensive e-commerce solutions. From product catalogs to payment processing, we provide everything needed for successful online sales.',
    features: [
      'Product management',
      'Shopping cart system',
      'Payment gateway integration',
      'Order management',
      'Customer reviews',
      'SEO optimization',
    ],
    benefits: [
      'Increase revenue',
      'Reach new markets',
      'Reduce operational costs',
      'Better customer experience',
    ],
    pricing: {
      starter: { tokens: 500, price: 300 },
      professional: { tokens: 1000, price: 550 },
      business: { tokens: 2000, price: 1000 },
      enterprise: { tokens: 5000, price: 2300 },
    },
  },
]

const solutionCategories = [
  'Business Management',
  'Enterprise Systems',
  'Web & Cloud',
  'Customer Solutions',
  'Data & Analytics',
]

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-primary/5 to-background pt-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Choose Your Service & Get Started
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Select the solution that fits your needs and choose a plan to get started immediately
          </p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === solution.id ? null : solution.id)}
                  className="w-full px-8 py-6 hover:bg-primary/5 transition-colors text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{solution.title}</h3>
                      <p className="text-foreground/70">{solution.shortDesc}</p>
                    </div>
                    <ChevronRight
                      className={`h-6 w-6 text-accent transition-transform duration-300 ${
                        expandedId === solution.id ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </button>

                {expandedId === solution.id && (
                  <div className="border-t border-border px-8 py-8 bg-background/50 animate-in fade-in slide-in-from-top-4 duration-300">
                    <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                      {solution.fullDesc}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="text-lg font-bold text-primary mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-accent" />
                              </div>
                              <span className="text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-primary mb-4">Business Benefits</h4>
                        <ul className="space-y-3">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                              </div>
                              <span className="text-foreground/80">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 space-y-6">
                      <div className="border-t border-border pt-6">
                        <h4 className="text-lg font-bold text-primary mb-4">Choose Your Plan</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <Link
                            href={`/checkout?service=${encodeURIComponent(solution.title)}&plan=starter&tokens=500&price=300`}
                            className="p-4 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all group"
                          >
                            <div className="text-sm text-foreground/60 mb-1">Starter</div>
                            <div className="text-2xl font-bold text-foreground mb-1">₹300</div>
                            <div className="text-xs text-foreground/50">500 tokens</div>
                            <div className="mt-3 text-sm font-semibold text-accent group-hover:text-primary">Purchase →</div>
                          </Link>
                          <Link
                            href={`/checkout?service=${encodeURIComponent(solution.title)}&plan=professional&tokens=1000&price=550`}
                            className="p-4 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all group"
                          >
                            <div className="text-sm text-foreground/60 mb-1">Professional</div>
                            <div className="text-2xl font-bold text-foreground mb-1">₹550</div>
                            <div className="text-xs text-foreground/50">1000 tokens</div>
                            <div className="mt-3 text-sm font-semibold text-accent group-hover:text-primary">Purchase →</div>
                          </Link>
                          <Link
                            href={`/checkout?service=${encodeURIComponent(solution.title)}&plan=business&tokens=2000&price=1000`}
                            className="p-4 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all group"
                          >
                            <div className="text-sm text-foreground/60 mb-1">Business</div>
                            <div className="text-2xl font-bold text-foreground mb-1">₹1,000</div>
                            <div className="text-xs text-foreground/50">2000 tokens</div>
                            <div className="mt-3 text-sm font-semibold text-accent group-hover:text-primary">Purchase →</div>
                          </Link>
                          <Link
                            href={`/checkout?service=${encodeURIComponent(solution.title)}&plan=enterprise&tokens=5000&price=${solution.id === 2 ? '5000' : solution.id === 4 ? '4500' : solution.id === 5 ? '5000' : '2300'}`}
                            className="p-4 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all group"
                          >
                            <div className="text-sm text-foreground/60 mb-1">Enterprise</div>
                            <div className="text-2xl font-bold text-foreground mb-1">₹{solution.id === 2 ? '5,000' : solution.id === 4 ? '4,500' : solution.id === 5 ? '5,000' : '2,300'}</div>
                            <div className="text-xs text-foreground/50">5000 tokens</div>
                            <div className="mt-3 text-sm font-semibold text-accent group-hover:text-primary">Purchase →</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Have Further Questions?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the right solution and plan for your business needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90  px-8" style={{ color: 'white' }}>
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
