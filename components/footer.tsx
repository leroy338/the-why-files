import { Container } from "@/components/ui/container"
import { Link } from "@/components/ui/link"
import { getSocialUrl } from "@/utils/social-links"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  community: [
    { label: "Discord", href: getSocialUrl('discord') ?? '#' },
    { label: "Twitter", href: getSocialUrl('twitter') ?? '#' },
    { label: "Instagram", href: getSocialUrl('instagram') ?? '#' },
    { label: "TikTok", href: getSocialUrl('tiktok') ?? '#' },
  ],
  content: [
    { label: "Episodes", href: "/episodes" },
    { label: "Shop", href: "/shop" },
    { label: "The Fix", href: "/the-fix" },
    { label: "Vote", href: "/#vote" },
  ],
}

export function Footer() {
  return (
    <footer className="w-full border-t py-8 sm:py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">The Why Files</h2>
            <p className="text-sm text-muted-foreground">
              Debunking the myths of the world - one file at a time. Or not.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The Why Files. All rights reserved.
            </p>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Content</h3>
            <ul className="space-y-2">
              {footerLinks.content.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            Maintained by{" "}
            <Link
              href="https://thebrokebros.com"
              target="_blank"
              className="font-bold hover:text-foreground"
            >
              The Broke Bros
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  )
} 