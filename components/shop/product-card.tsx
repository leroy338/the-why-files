import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Link } from "@/components/ui/link"

interface ProductCardProps {
  title: string
  description: string
  price: number
  image: string
  link: string
}

export function ProductCard({
  title,
  description,
  price,
  image,
  link
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">
            ${price.toFixed(2)}
          </span>
          <Button size="sm" asChild>
            <Link href={link}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
} 