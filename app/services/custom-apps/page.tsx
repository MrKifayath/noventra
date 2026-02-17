'use client'
import { ServicePageTemplate } from '@/components/service-page-template'

export default function CustomAppsPage() {
  return (
    <ServicePageTemplate
      title="Custom Application"
      subtitle="Development"
      description="Tailor-made software and system applications developed according to specific business or organizational requirements."
      features={[
        'Requirements analysis and planning',
        'Custom architecture design',
        'Scalable development',
        'Integration with existing systems',
        'Comprehensive testing',
        'Ongoing maintenance',
      ]}
      benefits={[
        'Solution perfectly tailored to your needs',
        'No unnecessary features or costs',
        'Full ownership and control',
        'Competitive advantage',
        'Future-proof architecture',
        'Expert technical support',
      ]}
      serviceId="custom-apps"
    />
  )
}
