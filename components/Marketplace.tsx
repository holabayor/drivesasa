'use client';
import { products } from '@/constants';
import ProductCard from './ProductCard';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function Marketplace() {
  return (
    <section className="max-width bg-slate-50 flex-center flex-col p-4 md:py-8 lg:py-16">
      <div className="flex flex-col items-center py-2 md:py-6">
        <p className="text-[8px] font-semibold uppercase text-red-600">
          drivesasa marketplace
        </p>
        <h2 className="font-extrabold">From Our Dealers</h2>
      </div>
      <div className="flex flex-wrap justify-evenly gap-4 md:gap-8 py-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="group flex items-center gap-2 py-2 md:py-8 text-red-600">
        <Link href={'/products'}>All Products</Link>
        <MoveRight size={20} className="group-hover:animate-slide" />
      </div>
    </section>
  );
}
