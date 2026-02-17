import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">{children}</main>
      <Footer />
    </div>
  )
}
