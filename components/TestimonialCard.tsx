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
    <div className={`flex max-h-[150px] gap-6 mx-4 bg-white rounded-md`}>
      <Image
        src={image}
        alt="person"
        width={150}
        height={150}
        className="object-cover rounded-l-md"
      />
      <div className="flex flex-col max-w-[200px] items-start py-2 md:py-4">
        <span>{date}</span>
        <h4 className="uppercase font-semibold text-xs py-2">{heading}</h4>
        <p className="text-xs overflow-clip">{text}</p>
      </div>
    </div>
  );
}
