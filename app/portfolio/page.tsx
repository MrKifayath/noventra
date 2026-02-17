'use client'

import Link from 'next/link'
import { ArrowRight, Award, TrendingUp, Users, Target } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const caseStudies = [
  {
    id: 1,
    title: 'Manufacturing ERP Transformation',
    industry: 'Manufacturing',
    client: 'Top Tier Manufacturing Group',
    year: 2023,
    challenge: 'Company had 12 separate systems across departments causing data silos, manual reconciliations, and visibility gaps.',
    solution: 'Implemented integrated ERP system with real-time dashboards, automated workflows, and centralized data management.',
    results: [
      { metric: '35%', description: 'Reduction in operational costs' },
      { metric: '50%', description: 'Faster order processing' },
      { metric: '99.8%', description: 'System uptime achieved' },
      { metric: '6 mo', description: 'Time to ROI' },
    ],
    testimonial: 'The transformation was seamless. Our team productivity increased significantly and we recovered our investment within 6 months.',
    testimonialAuthor: 'Operations Director',
    image: '📊',
  },
  {
    id: 2,
    title: 'E-Commerce Platform Launch',
    industry: 'Retail & Distribution',
    client: 'Multi-Brand Retail Enterprise',
    year: 2023,
    challenge: 'Manual inventory management across 50+ stores with limited online presence, preventing market expansion.',
    solution: 'Built scalable e-commerce platform with real-time inventory sync, multi-channel sales, and automated fulfillment.',
    results: [
      { metric: '200%', description: 'Increase in online revenue' },
      { metric: '60%', description: 'Reduction in manual work' },
      { metric: '5x', description: 'Customer reach expansion' },
      { metric: '3 mo', description: 'To market launch' },
    ],
    testimonial: 'The platform exceeded our expectations. We doubled our market reach and achieved record sales within the first quarter.',
    testimonialAuthor: 'Chief Marketing Officer',
    image: '🛍️',
  },
  {
    id: 3,
    title: 'CRM Implementation & Automation',
    industry: 'Business Services',
    client: 'Leading B2B Services Company',
    year: 2024,
    challenge: 'Customer data scattered across spreadsheets and emails, limiting sales effectiveness and customer insights.',
    solution: 'Deployed centralized CRM with advanced automation, analytics, and integration with existing systems.',
    results: [
      { metric: '45%', description: 'Improvement in sales conversion' },
      { metric: '30%', description: 'Increase in customer retention' },
      { metric: '8x', description: 'Faster response time' },
      { metric: '100%', description: 'Data centralization' },
    ],
    testimonial: 'Our sales team now has complete visibility into customer interactions. Conversion rates improved dramatically.',
    testimonialAuthor: 'VP of Sales',
    image: '👥',
  },
  {
    id: 4,
    title: 'Digital Workflow Automation',
    industry: 'Financial Services',
    client: 'Premier Financial Services Firm',
    year: 2024,
    challenge: 'Manual approval processes causing 10+ day delays in document processing and high error rates.',
    solution: 'Implemented automated workflow system with digital approvals, audit trails, and real-time tracking.',
    results: [
      { metric: '70%', description: 'Faster processing time' },
      { metric: '90%', description: 'Reduction in errors' },
      { metric: '24/7', description: 'Process availability' },
      { metric: '2 mo', description: 'Payback period' },
    ],
    testimonial: 'The automation freed up significant resources. We now process 10x more documents with fewer errors.',
    testimonialAuthor: 'Head of Operations',
    image: '⚡',
  },
  {
    id: 5,
    title: 'Cloud Migration & Modernization',
    industry: 'Technology & SaaS',
    client: 'Enterprise Tech Solutions Provider',
    year: 2023,
    challenge: 'Legacy on-premise systems with high maintenance costs and limited scalability for growing customer base.',
    solution: 'Migrated infrastructure to cloud with modern architecture, auto-scaling, and enhanced security.',
    results: [
      { metric: '45%', description: 'Reduction in IT costs' },
      { metric: '100%', description: 'Increase in system capacity' },
      { metric: '99.99%', description: 'Uptime achieved' },
      { metric: '0', description: 'Infrastructure issues' },
    ],
    testimonial: 'The cloud migration improved our service reliability and significantly reduced operational overhead.',
    testimonialAuthor: 'CTO',
    image: '☁️',
  },
  {
    id: 6,
    title: 'Custom Application Development',
    industry: 'Logistics & Supply Chain',
    client: 'National Logistics Provider',
    year: 2024,
    challenge: 'No unified tracking system for shipments across different regions and transportation modes.',
    solution: 'Developed custom logistics platform with real-time tracking, route optimization, and integration with carriers.',
    results: [
      { metric: '25%', description: 'Improvement in delivery times' },
      { metric: '15%', description: 'Fuel cost reduction' },
      { metric: '99.2%', description: 'On-time delivery rate' },
      { metric: '40%', description: 'Customer satisfaction increase' },
    ],
    testimonial: 'The custom solution perfectly fits our logistics operations. Our customers now have complete shipment visibility.',
    testimonialAuthor: 'Operations Director',
    image: '📦',
  },
]

const stats = [
  { icon: Award, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '45+' },
  { icon: TrendingUp, label: 'Avg ROI Improvement', value: '150%+' },
  { icon: Target, label: 'Success Rate', value: '98%' },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-top-8 duration-700">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-accent font-medium text-sm">Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Proven Track Record of <span className="text-accent">Enterprise Success</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Discover how leading enterprises transformed their operations with our digital solutions. Real results from real businesses.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-card border border-accent/10 hover:border-accent/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-6 h-6 text-accent mx-auto mb-3" />
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-foreground/60 mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <div
                key={study.id}
                className="group rounded-2xl overflow-hidden border border-accent/10 hover:border-accent/30 transition-all duration-300 bg-card hover:shadow-xl hover:shadow-accent/10 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-10">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{study.image}</span>
                        <div>
                          <p className="text-sm font-semibold text-accent uppercase tracking-wide">{study.industry}</p>
                          <p className="text-sm text-foreground/60">{study.year}</p>
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{study.title}</h3>
                      <p className="text-lg font-semibold text-primary">{study.client}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-foreground/70">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-foreground/70">{study.solution}</p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="p-4 bg-accent/5 rounded-lg border border-accent/10 space-y-2">
                      <p className="text-sm italic text-foreground/80 leading-relaxed">"{study.testimonial}"</p>
                      <p className="text-xs font-semibold text-accent">— {study.testimonialAuthor}, {study.client}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="flex flex-col justify-center">
                    <h4 className="font-semibold text-foreground text-lg mb-6">Key Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, resultIdx) => (
                        <div
                          key={resultIdx}
                          className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/10 hover:border-accent/30 transition-all duration-300"
                        >
                          <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {result.metric}
                          </p>
                          <p className="text-xs lg:text-sm text-foreground/70 mt-2">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-y border-accent/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Business?</h2>
            <p className="text-xl text-foreground/70">
              Join our network of successful enterprises. Let us help you achieve your goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105 items-center gap-2"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/services"
              className="inline-flex px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-background transition-all duration-300 items-center gap-2"
            >
              Explore Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
