import { products } from '@/lib/mock-products'
import ProductDetails from '@/components/shop/product-details'

export default function CryptidAnatomyHoodiePage() {
  const product = products.find(p => p.id === 'cryptid-anatomy-hoodie')
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <ProductDetails product={product} />
  )
}