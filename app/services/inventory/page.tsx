'use client'
import { ServicePageTemplate } from '@/components/service-page-template'

export default function InventoryPage() {
  return (
    <ServicePageTemplate
      title="Inventory & Data"
      subtitle="Management"
      description="Digital systems designed for maintaining structured data, inventory records, and automated reporting for operational efficiency."
      features={[
        'Real-time inventory tracking',
        'Automated stock alerts',
        'Multi-location support',
        'Barcode scanning integration',
        'Historical data analysis',
        'Inventory forecasting',
      ]}
      benefits={[
        'Reduce inventory waste by 35%',
        'Prevent stockouts and overstock',
        'Accurate inventory counts',
        'Better demand planning',
        'Automated reordering',
        'Cost savings optimization',
      ]}
      serviceId="inventory"
    />
  )
}
