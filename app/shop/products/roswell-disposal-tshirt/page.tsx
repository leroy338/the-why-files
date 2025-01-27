import { Metadata } from 'next'
import { products } from '@/lib/mock-products'
import ProductDetails from '@/components/shop/product-details'

export const metadata: Metadata = {
  title: 'Roswell Disposal T-Shirt | Shop',
  description: 'High quality t-shirt featuring the Roswell Disposal design'
}

export default function RoswellDisposalTShirtPage() {
  const product = products.find(p => p.id === 'roswell-disposal-tshirt')
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  )
}