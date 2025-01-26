import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

interface BannerProps {
  children: React.ReactNode
  variant?: 'top' | 'bottom' | 'both'
  className?: string
  header?: string
  subtext?: string
  align?: 'left' | 'center' | 'right'
}

export function Banner({ 
  children, 
  variant = 'both',
  className,
  header,
  subtext,
  align = 'center'
}: BannerProps) {
  return (
    <Container as="section" className={className}>
      <div className="py-4 sm:py-6 md:py-12">
        {(header || subtext) && (
          <div className={cn(
            "mb-4 sm:mb-6 md:mb-8 space-y-2",
            align === 'center' && "text-center",
            align === 'right' && "text-right"
          )}>
            {header && (
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                {header}
              </h2>
            )}
            {subtext && (
              <p className="text-sm sm:text-base text-muted-foreground">
                {subtext}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
      {/* Top divider */}
      {(variant === 'top' || variant === 'both') && (
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 dark:via-foreground/10 to-transparent" />
      )}
      {/* Bottom divider */}
      {(variant === 'bottom' || variant === 'both') && (
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 dark:via-foreground/10 to-transparent" />
      )}
    </Container>
  )
} 