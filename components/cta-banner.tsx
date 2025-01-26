'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CTABanner() {
  const router = useRouter()

  return (
    <div className="w-full bg-primary/5 border-y">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">
            Join Our Community
          </h2>
          <p className="text-muted-foreground text-lg">
            Sign up to vote on upcoming projects, participate in discussions, and help shape the future of conspiracy research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              size="lg"
              onClick={() => router.push('/login')}
            >
              Sign In
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => router.push('/signup')}
            >
              Email Newsletter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 