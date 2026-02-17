import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const services = [
  { title: 'Business Management Software', href: '/services/business-management' },
  { title: 'Enterprise Resource Planning', href: '/services/erp' },
  { title: 'Web Application Systems', href: '/services/web-applications' },
  { title: 'CRM & Customer Management', href: '/services/crm' },
  { title: 'Inventory & Data Management', href: '/services/inventory' },
  { title: 'E-commerce & Web Solutions', href: '/services/ecommerce' },
  { title: 'Custom Application Development', href: '/services/custom-apps' },
  { title: 'Digital Workflow & Automation', href: '/services/workflow' },
  { title: 'Cloud-Based Solutions', href: '/services/cloud' },
  { title: 'Software Support & Maintenance', href: '/services/support' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-b from-foreground/5 to-foreground/10 border-t border-accent/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Noventra" className="h-30 w-30 rounded-lg" />
              <div>
                <span className="text-lg font-bold text-primary">Noventra</span>
                <p className="text-xs text-foreground/60">Enterprise Solutions</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Transform your business with cutting-edge software solutions and enterprise technology.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-accent/10 hover:bg-accent hover:text-background transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-accent/10 hover:bg-accent hover:text-background transition-all duration-300" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-accent/10 hover:bg-accent hover:text-background transition-all duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Services Grid 1 */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-foreground/70 hover:text-primary hover:pl-1 transition-all duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Grid 2 */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">More Services</h4>
            <ul className="space-y-2">
              {services.slice(5).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-foreground/70 hover:text-primary hover:pl-1 transition-all duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:info@noventra.com" className="flex items-start gap-3 group">
                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-foreground/60">Email</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">info@noventra.com</p>
                </div>
              </a>
              <a href="tel:+918100012764" className="flex items-start gap-3 group">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-foreground/60">Phone</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">+91 8100012764</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-foreground/60">Address</p>
                  <p className="text-sm text-foreground">Panipat, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {currentYear} Noventra Technologies Private Limited. All rights reserved. | GSTIN: 06AALCN1852F1ZI
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
