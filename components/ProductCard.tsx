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
  count?: number;
}

export default function ProductCard({
  name,
  price,
  image,
  icons,
  rating,
  text,
  count,
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
        <div className="w-full flex items-center justify-between border-b mb-2">
          <p className={`text-[#BC2A2B] ${price ? 'font-bold' : 'text-xs'}`}>
            {price || text}
          </p>
          <div className="flex items-center gap-1">
            <ReactStars value={rating} />{' '}
            {count && <span className="text-xs">({count})</span>}
          </div>
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
