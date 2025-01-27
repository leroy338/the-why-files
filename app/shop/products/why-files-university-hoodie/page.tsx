import { products } from '@/lib/mock-products'
import ProductDetails from '@/components/shop/product-details'

export default function WhyFilesUniversityHoodie() {
  const product = products.find(p => p.id === 'why-files-university-hoodie')
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  )
}