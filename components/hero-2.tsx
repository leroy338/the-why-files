import { cn } from "@/lib/utils"
import Image from "next/image"
import { Card } from "./ui/card"
import { Container } from "@/components/ui/container"

interface Hero2Props {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  className?: string
  children?: React.ReactNode
}

export function Hero2({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  className,
  children
}: Hero2Props) {
  return (
    <Container as="section" className={className}>
      <div className="flex flex-col md:flex-row items-center justify-between py-4 sm:py-6 md:py-12 gap-4 sm:gap-6 md:gap-12">
        {/* Content */}
        <div className="w-full md:w-5/12 lg:w-1/2 flex flex-col gap-2 sm:gap-3 md:gap-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
            {title}
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-center md:text-left text-muted-foreground">
            {description}
          </p>

          {children && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 mt-2 sm:mt-3 md:mt-4 w-full sm:w-auto">
              {children}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="w-full md:w-7/12 lg:w-1/2">
          <Card className="bg-background/50 backdrop-blur-sm p-3 sm:p-4 md:p-6">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </Card>
        </div>
      </div>
    </Container>
  )
} 