'use client';
import { products } from '@/app/constants';
import ProductCard from './ProductCard';

export default function Marketplace() {
  return (
    <section className="max-width flex flex-col items-center justify-between p-4 md:p-6">
      <div className="flex flex-col py-2 md:py-6">
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
          />
        ))}
      </div>
    </section>
  );
}