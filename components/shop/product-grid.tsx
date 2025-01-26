import { ProductCard } from "./product-card"
import { products } from "@/lib/mock-products"

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          {...product}
        />
      ))}
    </div>
  )
} 