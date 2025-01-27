import { Metadata } from 'next'
import { products } from '@/lib/mock-products'
import ProductDetails from '@/components/shop/product-details'

export const metadata: Metadata = {
  title: 'Fear the Crabcat T-Shirt | Shop',
  description: 'Show your Crabcat pride with our signature t-shirt'
}

export default function FearTheCrabcatTShirtPage() {
  const product = products.find(p => p.id === 'fear-the-crabcat-tshirt')
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  )
}