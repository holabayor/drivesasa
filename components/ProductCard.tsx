'use client';

import Image, { StaticImageData } from 'next/image';
import Button from './Button';

interface ProductCardProps {
  name: string;
  price?: string;
  image: string;
  icons?: string[];
}

export default function ProductCard({
  name,
  price,
  image,
  icons,
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

      <div className="flex flex-col items-start px-2">
        <h4 className="uppercase font-semibold text-xs sm:text-sm">{name}</h4>
        <p className="text-sm text-center">{price}</p>
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
