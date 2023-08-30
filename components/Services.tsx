'use client';
import { services } from '@/app/constants';
import ProductCard from './ProductCard';

export default function Services() {
  return (
    <section className="max-width bg-rose-100 flex-center flex-col p-4 md:py-8 lg:py-16">
      <div className="flex flex-col items-center py-2 md:py-6">
        <p className="text-[8px] font-semibold uppercase text-red-600 py">
          service providers
        </p>
        <h2 className="font-extrabold">Quality Services</h2>
      </div>
      <div className="flex flex-wrap justify-evenly gap-4 md:gap-8 py-4">
        {services.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            text={product.text}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
}
