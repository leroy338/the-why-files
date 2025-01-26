import { Hero2 } from "@/components/hero-2"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

export function ShopHero() {
  return (
    <Hero2
      title="The Why Files Shop"
      description="Gear up with official Why Files merchandise and investigation equipment. From branded apparel to professional-grade tools, we've got everything you need to become a master investigator."
      imageSrc="/shop-header-guppy.webp"
      imageAlt="The Why Files Shop Collection"
      imagePosition="right"
    >
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <Link href="#featured">
            Shop Featured
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="#all-products">
            View All
          </Link>
        </Button>
      </div>
    </Hero2>
  )
} 