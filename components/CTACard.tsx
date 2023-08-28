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
    <div className="flex flex-col gap-4 items-center justify-between rounded-md max-w-[250px] bg-blue-100 py-6 px-4">
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={40}
          height={40}
          className="object-contain"
        />
      )}
      <>
        <h4 className="uppercase font-semibold text-xs md:pt-2">{heading}</h4>
        <p className="text-xs text-center">{text}</p>
      </>
      <Button label="book appointment" white />
    </div>
  );
}
