'use client';

import Image from 'next/image';

interface TestimonialCardProps {
  date: string;
  heading: string;
  text: string;
  image: string;
}

export default function TestimonialCard({
  date,
  heading,
  text,
  image,
}: TestimonialCardProps) {
  return (
    <div
      className={`flex flex-1 gap-6 items-center justify-between rounded-md max-w-[250px] py-6 px-4 bg-rose-100/90 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out`}
    >
      <div className="w-full">
        <Image
          src={image}
          alt="person"
          width={1000}
          height={1000}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-start">
        <span>{date}</span>
        <h4 className="uppercase font-semibold text-xs py-2">{heading}</h4>
        <p className="text-xs text-center">{text}</p>
      </div>
    </div>
  );
}
