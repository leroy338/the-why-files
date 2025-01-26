import { ProductCard } from "./product-card"
import { getFeaturedProducts } from "@/lib/mock-products"

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard
          key={product.slug}
          {...product}
        />
      ))}
    </div>
  )
} 