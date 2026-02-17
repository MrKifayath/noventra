'use client'
import { ServicePageTemplate } from '@/components/service-page-template'

export default function CloudPage() {
  return (
    <ServicePageTemplate
      title="Cloud-Based"
      subtitle="Solutions"
      description="Secure cloud-hosted applications and software systems accessible remotely for business and enterprise usage."
      features={[
        'Secure cloud infrastructure',
        'Automatic scaling',
        'Remote accessibility',
        'Data encryption',
        'Disaster recovery',
        'Multi-user access',
      ]}
      benefits={[
        'Access anywhere, anytime',
        'Zero server maintenance',
        'Automatic updates',
        'Better disaster recovery',
        'Reduced capital costs',
        'Enterprise-grade security',
      ]}
      serviceId="cloud"
    />
  )
}
