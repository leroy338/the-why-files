'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface NewsletterModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NewsletterModal({ open, onOpenChange }: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [marketingConsent, setMarketingConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add newsletter signup logic here
    console.log('Newsletter signup:', {
      name,
      email,
      marketingConsent
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe to our Newsletter</DialogTitle>
          <DialogDescription>
            Get the latest updates on mysteries and investigations delivered to your inbox.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="marketing" 
              checked={marketingConsent}
              onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
            />
            <Label 
              htmlFor="marketing" 
              className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to receive marketing emails from The Why Files
            </Label>
          </div>
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 