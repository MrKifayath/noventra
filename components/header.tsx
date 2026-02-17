'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight, BarChart3, Settings, Globe, Users, Package, ShoppingCart, Code2, Zap, Cloud, Wrench } from 'lucide-react'

const services = [
  { id: 1, title: 'Business Management Software', href: '/services/business-management', Icon: BarChart3, slug: 'business-management' },
  { id: 2, title: 'Enterprise Resource Planning', href: '/services/erp', Icon: Settings, slug: 'erp' },
  { id: 3, title: 'Web Application Systems', href: '/services/web-applications', Icon: Globe, slug: 'web-applications' },
  { id: 4, title: 'CRM & Customer Management', href: '/services/crm', Icon: Users, slug: 'crm' },
  { id: 5, title: 'Inventory & Data Management', href: '/services/inventory', Icon: Package, slug: 'inventory' },
  { id: 6, title: 'E-commerce & Web Solutions', href: '/services/ecommerce', Icon: ShoppingCart, slug: 'ecommerce' },
  { id: 7, title: 'Custom Application Development', href: '/services/custom-apps', Icon: Code2, slug: 'custom-apps' },
  { id: 8, title: 'Digital Workflow & Automation', href: '/services/workflow', Icon: Zap, slug: 'workflow' },
  { id: 9, title: 'Cloud-Based Solutions', href: '/services/cloud', Icon: Cloud, slug: 'cloud' },
  { id: 10, title: 'Software Support & Maintenance', href: '/services/support', Icon: Wrench, slug: 'support' },
]

const navLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/98 backdrop-blur-xl shadow-2xl border-b border-accent/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group">
          <img src="/only-logo.png" alt="Noventra" className="h-28 w-28 rounded-xl group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300" />
          <div className="hidden sm:block">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Noventra</span>
            <p className="text-xs text-foreground/60">Enterprise Solutions</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="px-4 py-2 rounded-lg font-medium text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group-hover:bg-accent/5"
            >
              Services
              <ChevronDown size={18} className="transition-transform duration-300 group-hover:rotate-180" />
            </button>
            
            {/* Services Modal */}
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-background/98 backdrop-blur-xl border border-accent/20 rounded-2xl shadow-2xl p-6 w-[600px] animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Our Services</p>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="group/item p-4 rounded-xl hover:bg-accent/10 border border-transparent hover:border-accent/30 transition-all duration-300 flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 group-hover/item:from-primary/30 group-hover/item:to-accent/30 transition-all">
                        <service.Icon size={18} className="text-primary group-hover/item:text-accent transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-foreground group-hover/item:text-primary transition-colors line-clamp-2">
                          {service.title}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-accent/0 group-hover/item:text-accent transition-all duration-300 flex-shrink-0 mt-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg font-medium text-foreground hover:text-primary hover:bg-accent/5 transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 bg-primary font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105 inline-block"
            style={{ color: 'white' }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-accent/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-2">
            {/* Services Mobile */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left px-4 py-3 rounded-lg font-medium text-foreground hover:bg-accent/10 transition-colors flex items-center justify-between"
            >
              Services
              <ChevronDown size={18} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="bg-accent/5 rounded-lg p-4 space-y-2 mb-4 animate-in fade-in duration-300">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <service.Icon size={18} className="text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{service.title}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Other Links Mobile */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg font-medium text-foreground hover:bg-accent/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button Mobile */}
            <Link
              href="/contact"
              className="block px-4 py-3 mt-4 bg-primary rounded-lg font-semibold text-center hover:bg-accent hover:text-accent-foreground transition-colors"
              style={{ color: 'white' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
