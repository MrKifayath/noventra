'use client'
import { ServicePageTemplate } from '@/components/service-page-template'

export default function SupportPage() {
  return (
    <ServicePageTemplate
      title="Software Support &"
      subtitle="Maintenance"
      description="Ongoing support, updates, and maintenance for software systems, applications, and digital platforms."
      features={[
        '24/7 technical support',
        'Regular software updates',
        'Bug fixes and patches',
        'Performance optimization',
        'Security updates',
        'User training and documentation',
      ]}
      benefits={[
        'System uptime over 99.9%',
        'Quick issue resolution',
        'Proactive maintenance',
        'Security compliance',
        'Latest feature access',
        'Dedicated support team',
      ]}
      serviceId="support"
    />
  )
}
