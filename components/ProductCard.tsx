'use client';

import Image from 'next/image';
import Button from './Button';
import ReactStars from 'react-stars';

interface ProductCardProps {
  name: string;
  price?: string;
  image: string;
  icons?: string[];
  rating: number;
  text?: string;
}

export default function ProductCard({
  name,
  price,
  image,
  icons,
  rating,
  text,
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col bg-white gap-4 items-start justify-between rounded-md pb-4 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out`}
    >
      <Image
        src={image}
        alt="product"
        width={300}
        height={300}
        className="object-contain"
      />

      <div className="w-full flex flex-col items-start px-2">
        <h4 className="font-bold text-xs sm:text-sm">{name}</h4>
        <div className="w-full flex justify-between border-b">
          <p className="text-sm text-center text-[#BC2A2B]">{price || text}</p>
          <ReactStars value={rating} />
        </div>
        {icons && (
          <div>
            <Image
              src={icons[0]}
              alt="icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        )}
        <Button label="more details" />
      </div>
    </div>
  );
}
