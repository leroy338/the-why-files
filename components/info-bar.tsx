'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { NewsletterModal } from "@/components/newsletter-modal"

export default function InfoBar() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [showNewsletter, setShowNewsletter] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const navigationItems = [
    { label: 'Shop', href: '/shop' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Contact', href: '/contact' },
  ]

  const handleNavigation = (href: string) => {
    if (href === '/signup') {
      setShowNewsletter(true)
    } else {
      setOpen(false)
      router.push(href)
    }
  }

  return (
    <>
      <div className={`w-full border-b fixed top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-background'
      }`}>
        <div className="container mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10">
                <Image 
                  src="/logo-1.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight">The Why Files</span>
            </Link>
            
            {/* Desktop Navigation - only show on large screens */}
            <div className="hidden lg:flex items-center space-x-4">
              {navigationItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => router.push(item.href)}
                  className="text-sm font-normal"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
                aria-label="Toggle theme"
              >
                {mounted && (
                  theme === 'light' ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/the-fix')}
                className="font-normal"
              >
                Choose Your Platform
              </Button>
              <Button
                onClick={() => setShowNewsletter(true)}
                className="font-normal"
              >
                Email Newsletter
              </Button>
            </div>

            {/* Mobile/Tablet Navigation - show on medium and smaller screens */}
            <div className="lg:hidden flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
                aria-label="Toggle theme"
              >
                {mounted && (
                  theme === 'light' ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )
                )}
              </Button>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="text-lg font-semibold">
                    Navigation
                  </SheetTitle>
                  <div className="flex flex-col space-y-4 mt-4">
                    {navigationItems.map((item) => (
                      <Button
                        key={item.href}
                        variant="ghost"
                        className="w-full justify-start text-base font-medium"
                        onClick={() => handleNavigation(item.href)}
                      >
                        {item.label}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      className="w-full justify-start font-medium"
                      onClick={() => handleNavigation('/the-fix')}
                    >
                      Choose Your Platform
                    </Button>
                    <Button
                      className="w-full font-medium"
                      onClick={() => {
                        setOpen(false)
                        setShowNewsletter(true)
                      }}
                    >
                      Email Newsletter
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      
      <NewsletterModal 
        open={showNewsletter} 
        onOpenChange={setShowNewsletter}
      />
    </>
  )
} 
