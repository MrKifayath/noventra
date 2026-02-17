'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

const contactMethods = [
  {
    icon: '📞',
    title: 'Phone',
    value: '+91 8100012764',
    desc: 'Available during business hours',
  },
  {
    icon: '📧',
    title: 'Email',
    value: 'info@noventra.com',
    desc: 'We respond within 24 hours',
  },
  {
    icon: '📍',
    title: 'Office',
    value: 'Panipat, Haryana',
    desc: '0, Gohana Road, OPP. SUGAR MILL',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Get in Touch
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have questions about our solutions? Want to discuss your project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {contactMethods.map((method, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="text-5xl mb-4 flex justify-center">{method.icon}</div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <a href={method.title === 'Phone' ? `tel:${method.value}` : `mailto:${method.value}`} className="text-primary font-semibold hover:text-primary/80 transition-colors mb-2 block">
                  {method.value}
                </a>
                <p className="text-sm text-foreground/70">{method.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl p-12 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service of Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground"
                    >
                      <option value="">Select a service</option>
                      <option value="erp">Enterprise Resource Planning</option>
                      <option value="crm">CRM Solutions</option>
                      <option value="web">Web Applications</option>
                      <option value="ecommerce">E-commerce Solutions</option>
                      <option value="custom">Custom Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90  py-6" style={{ color: 'white' }}>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <p className="text-sm text-foreground/70 text-center mt-6">
                We'll get back to you as soon as possible, typically within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Noventra Technologies</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Your trusted partner for enterprise software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-bold mb-4 text-primary">Company Details</h3>
              <ul className="space-y-3 text-foreground/70">
                <li>
                  <span className="font-semibold text-foreground">GSTIN:</span> 06AALCN1852F1ZI
                </li>
                <li>
                  <span className="font-semibold text-foreground">Company Type:</span> Private Limited
                </li>
                <li>
                  <span className="font-semibold text-foreground">Industry:</span> Software Development
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors">
              <h3 className="text-lg font-bold mb-4 text-primary">Office Hours</h3>
              <ul className="space-y-3 text-foreground/70">
                <li>
                  <span className="font-semibold text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM
                </li>
                <li>
                  <span className="font-semibold text-foreground">Saturday:</span> 10:00 AM - 4:00 PM
                </li>
                <li>
                  <span className="font-semibold text-foreground">Sunday:</span> Closed
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-bold mb-4 text-primary">Support</h3>
              <ul className="space-y-3 text-foreground/70">
                <li>
                  <span className="font-semibold text-foreground">Email Support:</span> 24/7 available
                </li>
                <li>
                  <span className="font-semibold text-foreground">Phone Support:</span> Business hours
                </li>
                <li>
                  <span className="font-semibold text-foreground">Emergency:</span> Available upon request
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Visit Us</h2>
          <div className="bg-card border border-border rounded-3xl overflow-hidden h-96 animate-in fade-in duration-700">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-xl font-semibold text-foreground mb-2">Panipat, Haryana</p>
                <p className="text-foreground/70">0, Gohana Road, OPP. SUGAR MILL</p>
                <p className="text-foreground/70">Sanjay Colony, Panipat 132103</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
