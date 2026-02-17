'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import { BarChart3, Settings, Globe, Users, Package, ShoppingCart, Code2, Zap, Cloud, Wrench } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Business Management Software',
    description: 'Custom solutions for managing daily operations, data, workflows, and automation.',
    Icon: BarChart3,
  },
  {
    id: 2,
    title: 'Enterprise Resource Planning',
    description: 'Integrated systems for managing operations, resources, and internal processes.',
    Icon: Settings,
  },
  {
    id: 3,
    title: 'Web Application Systems',
    description: 'Secure and scalable web-based applications with admin panels and dashboards.',
    Icon: Globe,
  },
  {
    id: 4,
    title: 'CRM & Customer Management',
    description: 'Manage customer records, communications, and relationship tracking efficiently.',
    Icon: Users,
  },
  {
    id: 5,
    title: 'Inventory & Data Management',
    description: 'Structured data systems and automated reporting for operational efficiency.',
    Icon: Package,
  },
  {
    id: 6,
    title: 'E-commerce & Web Solutions',
    description: 'Professional websites, digital storefronts, and online presence platforms.',
    Icon: ShoppingCart,
  },
  {
    id: 7,
    title: 'Custom Application Development',
    description: 'Tailor-made software and system applications developed according to specific requirements.',
    Icon: Code2,
  },
  {
    id: 8,
    title: 'Digital Workflow & Automation Tools',
    description: 'Software tools that automate internal processes, documentation flow, and tracking.',
    Icon: Zap,
  },
  {
    id: 9,
    title: 'Cloud-Based Software Solutions',
    description: 'Secure cloud-hosted applications and software systems accessible remotely.',
    Icon: Cloud,
  },
  {
    id: 10,
    title: 'Software Maintenance & Support Services',
    description: 'Ongoing support, updates, and maintenance for software systems and applications.',
    Icon: Wrench,
  },
]

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute -bottom-40 left-10 w-[450px] h-[450px] bg-primary/8 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          {/* Badge */}
          <div className="animate-in fade-in slide-in-from-top-8 duration-700 delay-100">
            <div className="inline-block px-6 py-3 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm hover:bg-accent/15 transition-colors duration-300">
              <span className="text-accent font-semibold text-sm tracking-wide">Enterprise Software Solutions</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-in fade-in slide-in-from-top-8 duration-700 delay-200">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-balance leading-tight tracking-tight">
              <span className="block">Transform Your</span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 bg-clip-text text-transparent">Business Operations</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-foreground/70 text-balance max-w-3xl mx-auto animate-in fade-in slide-in-from-top-8 duration-700 delay-300 leading-relaxed">
            Comprehensive digital and software solutions for modern enterprises. From ERP systems to custom applications, we deliver excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 pt-4">
            <Link
              href="#services"
              className="px-8 py-4 bg-primary rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
              style={{ color: 'white' }}
            >
              Explore Solutions
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce pt-8">
            <ChevronDown className="h-8 w-8 text-primary/60 hover:text-accent transition-colors" />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-background via-primary/3 to-background border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">10 Comprehensive Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Our Complete Service <span className="text-accent">Portfolio</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Comprehensive software solutions designed to streamline your business operations, maximize efficiency, and drive sustainable growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.title.toLowerCase().replace(/[&\s]+/g, '-')}`}
                className="group relative bg-card border border-accent/10 rounded-2xl p-8 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-primary/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors">{service.description}</p>
                  <div className="pt-4 flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold">Learn more</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Solutions Section */}
      <section id="solutions" className="py-32 bg-gradient-to-b from-primary/3 to-background border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-balance">
                  Enterprise-Grade <span className="text-accent">Software Solutions</span>
                </h2>
              </div>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Built with the latest technologies and best practices, our software solutions provide enterprise-grade reliability, scalability, and performance for organizations of all sizes.
              </p>
              <ul className="space-y-4">
                {[
                  'Scalable and secure architecture',
                  'Real-time data synchronization',
                  'Advanced reporting and analytics',
                  'Cloud deployment options',
                  'Dedicated 24/7 technical support',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="h-2 w-2 rounded-full bg-background" />
                    </div>
                    <span className="text-lg text-foreground group-hover:text-accent transition-colors duration-300 pt-1">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/solutions"
                className="inline-flex px-8 py-3 bg-primary rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 items-center gap-2 group"
                style={{ color: 'white' }}
              >
                Explore Solutions
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Visual */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/15 to-primary/15 rounded-3xl blur-3xl opacity-50" />
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-accent/20 backdrop-blur-sm hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-lg flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-primary/20 rounded w-3/4" />
                      <div className="h-3 bg-primary/10 rounded w-full" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-accent to-primary rounded-lg flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-accent/20 rounded w-4/5" />
                      <div className="h-3 bg-accent/10 rounded w-full" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-primary/50 to-accent/50 rounded-lg flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-primary/15 rounded w-3/5" />
                      <div className="h-3 bg-primary/10 rounded w-4/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Company Section */}
      <section id="about" className="py-32 bg-background border-y border-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Main About */}
            <div className="text-center space-y-6 animate-in fade-in slide-in-from-top-8 duration-700">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <span className="text-accent font-semibold text-sm uppercase tracking-wide">About Noventra</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-balance">
                Transforming Businesses with <span className="text-accent">Software Excellence</span>
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                We are a premier software solutions provider based in Panipat, Haryana, delivering innovative digital and enterprise software products. Our mission is to transform businesses through intelligent automation, data-driven insights, and scalable technology solutions that drive real growth.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '45+', label: 'Clients Served', icon: '🏢' },
                { number: '50+', label: 'Projects Delivered', icon: '✅' },
                { number: '150%', label: 'Avg ROI Improvement', icon: '📈' },
                { number: '24/7', label: 'Support Available', icon: '🛡️' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative bg-card border border-accent/10 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="space-y-3">
                    <div className="text-4xl group-hover:scale-125 transition-transform duration-300 origin-left">{stat.icon}</div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.number}</div>
                    <p className="text-foreground/70 font-semibold">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center pt-8">
              <Link
                href="/about"
                className="inline-flex px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-background transition-all duration-300 items-center gap-2 group"
              >
                Learn Our Full Story
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              Get in touch with our team to discuss how our solutions can help streamline your operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-primary">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground/70">Phone</p>
                    <p className="text-lg font-semibold">+91 8100012764</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">GSTIN</p>
                    <p className="text-lg font-semibold">06AALCN1852F1ZI</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Address</p>
                    <p className="text-lg font-semibold">
                      0, Gohana Road, OPP. SUGAR MILL, <br />
                      Sanjay Colony, Panipat, Haryana 132103
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                        → View Services
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" className="text-foreground/70 hover:text-primary transition-colors">
                        → Our Solutions
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@noventra.com" className="text-foreground/70 hover:text-primary transition-colors">
                        → Send Email
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Button className="w-full mt-8 bg-primary hover:bg-primary/90 py-6" style={{ color: 'white' }}>
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
