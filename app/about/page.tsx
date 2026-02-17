'use client'

import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const values = [
  {
    title: 'Innovation',
    description: 'We continuously innovate to provide cutting-edge solutions that stay ahead of industry trends.',
    icon: '💡',
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality software and services to our clients.',
    icon: '⭐',
  },
  {
    title: 'Reliability',
    description: 'Our systems are built for stability and consistent performance you can depend on.',
    icon: '✓',
  },
  {
    title: 'Customer Focus',
    description: 'Every solution is designed with your business needs and success in mind.',
    icon: '👥',
  },
]

const team = [
  {
    name: 'Technical Excellence',
    role: 'Experienced developers and architects',
    desc: 'Decade of expertise in enterprise software development',
  },
  {
    name: 'Agile Methodology',
    role: 'Fast and iterative development',
    desc: 'Quick adaptation to changing requirements',
  },
  {
    name: 'Support Team',
    role: '24/7 dedicated support',
    desc: 'Always available to assist with your systems',
  },
  {
    name: 'Quality Assurance',
    role: 'Rigorous testing procedures',
    desc: 'Zero-defect delivery commitment',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Transforming <span className="text-accent">Businesses</span> Through Technology
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Noventra Technologies is a premier enterprise software solutions provider committed to delivering innovative digital products that drive business transformation.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <h2 className="text-4xl font-bold mb-8 text-balance">Our Story</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Founded with a vision to revolutionize enterprise software solutions, Noventra Technologies has been at the forefront of digital transformation. Our journey began with a simple mission: to empower organizations with intelligent, scalable, and user-friendly software solutions.
              </p>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Over the years, we've grown from a startup to a trusted partner for enterprises across various industries. Our expertise spans ERP systems, CRM solutions, web applications, e-commerce platforms, and custom software development.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Today, we continue to innovate and expand our product portfolio, always keeping our clients' success at the center of what we do.
              </p>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
                <div className="space-y-8">
                  <div>
                    <div className="text-5xl font-bold text-primary mb-2">10+</div>
                    <div className="text-foreground/70">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-accent mb-2">100+</div>
                    <div className="text-foreground/70">Satisfied Clients</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-primary mb-2">50+</div>
                    <div className="text-foreground/70">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Strength */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Makes Us Special</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our unique combination of experience, innovation, and customer focus
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((strength, idx) => (
              <div
                key={idx}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{strength.name}</h3>
                  <p className="text-lg font-semibold text-foreground mb-3">{strength.role}</p>
                  <p className="text-foreground/70 leading-relaxed">{strength.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-foreground/70">
              Reach out to us for more information or to discuss your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors duration-300">
              <div className="text-4xl mb-4 flex justify-center">📞</div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <a href="tel:+918100012764" className="text-primary hover:text-primary/80 transition-colors text-lg font-semibold">
                +91 8100012764
              </a>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-accent/50 transition-colors duration-300">
              <div className="text-4xl mb-4 flex justify-center">📍</div>
              <h3 className="text-xl font-bold mb-3">Address</h3>
              <p className="text-foreground/70">
                0, Gohana Road, OPP. SUGAR MILL, Sanjay Colony, Panipat, Haryana 132103
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors duration-300">
              <div className="text-4xl mb-4 flex justify-center">🏛️</div>
              <h3 className="text-xl font-bold mb-3">GSTIN</h3>
              <p className="text-primary font-semibold">06AALCN1852F1ZI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can drive your business forward.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90  px-8" style={{ color: 'white' }}>
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
