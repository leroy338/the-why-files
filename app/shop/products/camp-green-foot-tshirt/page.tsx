import { Product } from '@/lib/mock-products'
import ProductDetails from '@/components/shop/product-details'
import { products } from '@/lib/mock-products'

export default function CampGreenFootTshirtPage() {
  const product = products.find((p: Product) => p.id === 'camp-green-foot-tshirt')

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  )
}
