'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CreditCard, Lock, CheckCircle2, ArrowLeft } from 'lucide-react'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const service = searchParams.get('service') || ''
  const plan = searchParams.get('plan') || ''
  const tokens = searchParams.get('tokens') || ''
  const price = searchParams.get('price') || ''

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    state: '',
    pincode: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setOrderComplete(true)
    }, 2000)
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-40 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-accent/20 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Order Successful!</h1>
              <p className="text-lg text-foreground/70 mb-8">
                Thank you for your purchase. Your order has been confirmed and you will receive a confirmation email shortly.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm text-foreground/60">Service</p>
                    <p className="font-semibold">{service}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Plan</p>
                    <p className="font-semibold capitalize">{plan}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Tokens</p>
                    <p className="font-semibold">{tokens}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Amount Paid</p>
                    <p className="font-semibold">₹{price}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <Link href="/solutions">
                  <Button className="w-full bg-primary hover:bg-primary/90" style={{ color: 'white' }}>
                    Browse More Solutions
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Solutions
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-accent/20 rounded-2xl p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-foreground/60">Service</p>
                    <p className="font-semibold text-lg">{service}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Plan</p>
                    <p className="font-semibold capitalize">{plan}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Tokens</p>
                    <p className="font-semibold">{tokens} tokens</p>
                  </div>
                </div>
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/70">Subtotal</span>
                    <span className="font-semibold">₹{price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/70">GST (18%)</span>
                    <span className="font-semibold">₹{(parseFloat(price) * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold mt-4 pt-4 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">₹{(parseFloat(price) * 1.18).toFixed(2)}</span>
                  </div>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold mb-1">Secure Checkout</p>
                      <p className="text-xs text-foreground/60">Your payment information is encrypted and secure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-accent/20 rounded-2xl p-8">
                <h1 className="text-3xl font-bold mb-8">Complete Your Purchase</h1>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 98765 43210"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardName">Cardholder Name *</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          placeholder="Name on card"
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            placeholder="MM/YY"
                            maxLength={5}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            placeholder="123"
                            maxLength={3}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Billing Address</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="billingAddress">Street Address *</Label>
                        <Input
                          id="billingAddress"
                          name="billingAddress"
                          value={formData.billingAddress}
                          onChange={handleInputChange}
                          required
                          placeholder="123 Main Street"
                          className="mt-1"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            placeholder="Mumbai"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            placeholder="Maharashtra"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="pincode">Pincode *</Label>
                          <Input
                            id="pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            required
                            placeholder="400001"
                            maxLength={6}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <p className="text-sm text-foreground/70">
                      By completing this purchase, you agree to our{' '}
                      <Link href="/terms" className="text-accent hover:text-primary underline">
                        Terms & Conditions
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-accent hover:text-primary underline">
                        Privacy Policy
                      </Link>
                      . Please review our{' '}
                      <Link href="/cancellation" className="text-accent hover:text-primary underline">
                        Cancellation
                      </Link>
                      {' '}and{' '}
                      <Link href="/refund" className="text-accent hover:text-primary underline">
                        Refund
                      </Link>
                      {' '}policies before proceeding.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-primary hover:bg-primary/90 py-6 text-lg font-semibold"
                    style={{ color: 'white' }}
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing Payment...
                      </span>
                    ) : (
                      `Pay ₹${(parseFloat(price) * 1.18).toFixed(2)}`
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-foreground/70">Loading checkout...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}
