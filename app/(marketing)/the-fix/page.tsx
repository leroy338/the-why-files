import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { socialLinks } from "@/utils/social-links"

export default function TheFix() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">The Fix</h1>
          <p className="text-muted-foreground">
            Get your daily dose of mysteries across all platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link 
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-6 h-full transition-all duration-200 hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${link.color}`} />
                      <h2 className={`font-semibold text-xl transition-colors ${link.color}`}>
                        {link.title}
                      </h2>
                    </div>
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {link.description}
                  </p>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 