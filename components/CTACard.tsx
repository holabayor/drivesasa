'use client';

import Image, { StaticImageData } from 'next/image';
import Button from './Button';

interface CTACardProps {
  heading: string;
  text: string;
  icon?: StaticImageData;
}

export default function CTACard({ heading, text, icon }: CTACardProps) {
  return (
    <div
      className={`flex flex-1 flex-col gap-4 items-center justify-between rounded-md max-w-[250px] py-6 px-4 bg-blue-100 `}
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
      <Button label="book appointment" white />
    </div>
  );
}
