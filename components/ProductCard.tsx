'use client';

import Image, { StaticImageData } from 'next/image';
import Button from './Button';

interface ProductCardProps {
  name: string;
  price: string;
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
      className={`flex flex-1 flex-col gap-4 items-start justify-between rounded-md w-full py-6 px-4 bg-blue-100 `}
    >
      <Image
        src={image}
        alt="product"
        width={200}
        height={200}
        className="object-contain"
      />
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
      <div className="flex flex-col items-start">
        <h4 className="uppercase font-semibold text-xs py-2">{name}</h4>
        <p className="text-xs text-center">{price}</p>
      </div>

      <Button label="more details" />
    </div>
  );
}
