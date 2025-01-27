import { products } from '@/lib/mock-products'
import ProductDetails from '@/components/shop/product-details'

export default function GoldfishConspiracyTShirt() {
  const product = products.find(p => p.id === 'goldfish-conspiracy-tshirt')
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  )
}