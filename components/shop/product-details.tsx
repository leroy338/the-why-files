import React from 'react';

interface Product {
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <img src={product.image} alt={product.title} className="object-cover rounded-lg w-full" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-muted-foreground mt-4">{product.description}</p>
          <span className="text-2xl font-bold mt-4 block">${product.price.toFixed(2)}</span>
        </div>
        <button className="w-32 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails; 