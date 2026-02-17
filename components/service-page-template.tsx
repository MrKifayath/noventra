import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  benefits: string[]
  serviceId: string
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  features,
  benefits,
  serviceId,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-40">
        <div className="space-y-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-accent font-medium text-sm">Enterprise Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              {title} <span className="text-accent">{subtitle}</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">{description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/contact?service=${serviceId}`}
              className="px-8 py-3 bg-primary rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 inline-flex items-center gap-2 w-fit"
              style={{ color: 'white' }}
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-background transition-all duration-300 inline-flex items-center gap-2 w-fit"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-foreground/5 border-y border-accent/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card border border-accent/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 mt-1">
                    <Check size={20} className="text-accent" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Business Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-xl hover:bg-accent/5 transition-all duration-300 border border-transparent hover:border-accent/20">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Check size={20} className="text-background" />
                </div>
                <p className="text-lg text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-y border-accent/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-foreground/70">
              Let our experts help you implement the perfect solution for your business needs.
            </p>
          </div>
          <Link
            href={`/contact?service=${serviceId}`}
            className="inline-flex px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
            style={{ color: 'white' }}
          >
            Schedule Your Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
