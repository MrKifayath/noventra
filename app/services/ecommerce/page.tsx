'use client'
import { ServicePageTemplate } from '@/components/service-page-template'

export default function EcommercePage() {
  return (
    <ServicePageTemplate
      title="E-commerce & Web"
      subtitle="Solutions"
      description="Development of business websites, digital storefronts, and web platforms for online presence and product/service display."
      features={[
        'Professional storefront design',
        'Secure payment processing',
        'Product catalog management',
        'Shopping cart and checkout',
        'SEO optimization',
        'Mobile responsiveness',
      ]}
      benefits={[
        'Launch online store in weeks',
        'Reach customers globally',
        'Secure transactions for buyers',
        'Increased revenue channels',
        'Better customer engagement',
        'Performance analytics',
      ]}
      serviceId="ecommerce"
    />
  )
}
