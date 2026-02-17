'use client'
import { ServicePageTemplate } from '@/components/service-page-template'

export default function WorkflowPage() {
  return (
    <ServicePageTemplate
      title="Digital Workflow &"
      subtitle="Automation"
      description="Software tools that automate internal processes, documentation flow, and operational tracking within organizations."
      features={[
        'Process workflow automation',
        'Document management system',
        'Approval workflows',
        'Task automation',
        'Notification and alerts',
        'Audit trail tracking',
      ]}
      benefits={[
        'Reduce manual processes by 70%',
        'Faster document approval cycles',
        'Eliminate bottlenecks',
        'Improved compliance',
        'Better team productivity',
        'Clear process visibility',
      ]}
      serviceId="workflow"
    />
  )
}
