export interface Product {
  title: string
  description: string
  price: number
  image: string
  slug: string
}

export const products: Product[] = [
  {
    title: "Fear the Crabcat T-Shirt",
    description: "Show your love for the mysterious Crabcat with this unique design featuring our favorite feline cryptid.",
    price: 24.99,
    image: "/products/crabcat-tshirt.webp",
    slug: "fear-the-crabcat-tshirt"
  },
  {
    title: "Camp Green Foot T-Shirt",
    description: "Vintage-style camp design featuring the elusive Bigfoot. Perfect for cryptid hunters and outdoor enthusiasts.",
    price: 24.99,
    image: "/products/camp-green-foot-tshirt.webp",
    slug: "camp-green-foot-tshirt"
  },
  {
    title: "Hecklefish for President T-Shirt",
    description: "Support the aquatic candidate with this whimsical political parody shirt featuring our favorite mysterious fish.",
    price: 24.99,
    image: "/products/hecklefish-tshirt.webp",
    slug: "hecklefish-president-tshirt"
  },
  {
    title: "Goldfish Conspiracy T-Shirt",
    description: "What do goldfish know that we don't? Rock this mysterious goldfish design and question everything.",
    price: 24.99,
    image: "/products/hecklefish-tshirt.webp",
    slug: "goldfish-conspiracy-tshirt"
  },
  {
    title: "Cryptid Anatomy Hoodie",
    description: "Vitruvian monster design featuring detailed cryptid anatomy. Perfect for those chilly investigation nights.",
    price: 49.99,
    image: "/products/lizzid-peeple-vitruvian-hoody.webp",
    slug: "cryptid-anatomy-hoodie"
  },
  {
    title: "Roswell Disposal Unit T-Shirt",
    description: "Official gear of the classified Roswell cleanup crew. Perfect for UFO enthusiasts and conspiracy theorists.",
    price: 24.99,
    image: "/products/roswell-tshirt.webp",
    slug: "roswell-disposal-tshirt"
  },
  {
    title: "Why Files University Hoodie",
    description: "Rep your alma mater of mystery with this collegiate-style Why Files University hoodie.",
    price: 49.99,
    image: "/products/why-files-university-hoody.webp",
    slug: "why-files-university-hoodie"
  },
  {
    title: "Why Files University T-Shirt",
    description: "The classic WF University tee - because some mysteries require higher education.",
    price: 24.99,
    image: "/products/why-files-university-tshirt.webp",
    slug: "why-files-university-tshirt"
  }
]

export const getFeaturedProducts = () => products.slice(0, 3)

export function getProductBySlug(slug: string) {
  return products.find(product => product.slug === slug)
}
