import { Banner } from "@/components/ui/banner"
import { ShopHero } from "@/components/shop/shop-hero"
import { FeaturedProducts } from "@/components/shop/featured-products"
import { ProductGrid } from "@/components/shop/product-grid"

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      
      <Banner
        variant="both"
        header="Featured Products"
        subtext="Check out our latest mystery-solving gear"
        align="center"
      >
        <FeaturedProducts />
      </Banner>
      
      <Banner
        variant="both"
        header="All Products"
        subtext="Everything you need to solve mysteries"
        align="center"
      >
        <ProductGrid />
      </Banner>
    </>
  )
}
