'use client'
import { ServicePageTemplate } from '@/components/service-page-template'

export default function CRMPage() {
  return (
    <ServicePageTemplate
      title="CRM & Customer"
      subtitle="Management"
      description="Software solutions that help organizations manage customer records, communication, service tracking and relationship management efficiently."
      features={[
        'Customer contact management',
        'Communication tracking',
        'Service ticket system',
        'Sales pipeline management',
        'Customer history analytics',
        'Automated follow-ups',
      ]}
      benefits={[
        'Improve customer satisfaction by 50%',
        'Centralized customer data',
        'Better sales forecasting',
        'Reduced response times',
        'Increased customer retention',
        'Data-driven insights',
      ]}
      serviceId="crm"
    />
  )
}
