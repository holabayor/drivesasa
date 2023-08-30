'use client';

import Image, { StaticImageData } from 'next/image';
import Button from './Button';

interface CTACardProps {
  heading: string;
  text: string;
  icon?: StaticImageData;
  white?: boolean;
}

export default function CTACard({ heading, text, icon, white }: CTACardProps) {
  return (
    <div
      className={`flex flex-1 flex-col gap-4 items-center justify-between rounded-md max-w-[250px] py-6 px-4 ${
        white
          ? 'first:bg-blue-100 last:bg-blue-100'
          : 'first:bg-white last:bg-white'
      }  bg-rose-100/90 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={40}
          height={40}
          className="object-contain"
        />
      )}

      <div className="flex flex-col items-center">
        <h4 className="uppercase font-semibold text-xs py-2">{heading}</h4>
        <p className="text-xs text-center">{text}</p>
      </div>
      <Button label="book appointment" white={white} />
    </div>
  );
}
