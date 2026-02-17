'use client'
import { ServicePageTemplate } from '@/components/service-page-template'

export default function WebApplicationsPage() {
  return (
    <ServicePageTemplate
      title="Web Application"
      subtitle="Systems"
      description="Secure and scalable web-based applications for businesses including admin panels, dashboards, client management systems and digital interfaces."
      features={[
        'Responsive design across all devices',
        'Advanced security protocols',
        'Admin dashboards and analytics',
        'Client management systems',
        'API integrations',
        'Cloud-hosted infrastructure',
      ]}
      benefits={[
        'Access your tools from anywhere',
        'Enterprise-grade security',
        'Real-time data synchronization',
        'Scalable to growing demands',
        'Reduced IT infrastructure costs',
        'Automatic backups and updates',
      ]}
      serviceId="web-applications"
    />
  )
}
