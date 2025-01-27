import { products, getProductBySlug } from "@/lib/mock-products"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Banner } from "@/components/ui/banner"

// Import Next.js page types
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Details',
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    notFound()
  }

  return (
    <Container>
      <div className="py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image */}
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-4">
            <Banner variant="top">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <p className="text-muted-foreground">{product.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button size="lg">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Banner>

            {/* Additional Product Details */}
            <Banner variant="bottom">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Product Details</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>100% cotton premium material</li>
                  <li>Available in multiple sizes</li>
                  <li>Machine washable</li>
                  <li>Designed and printed in-house</li>
                  <li>Limited edition design</li>
                </ul>
              </div>
            </Banner>
          </div>
        </div>
      </div>
    </Container>
  )
}

// Generate static params at build time
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
} 