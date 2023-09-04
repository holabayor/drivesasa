'use client';

import Image from 'next/image';

export default function page() {
  return (
    <div className="max-width flex flex-1 min-h-screen">
      <div className="">
        <Image
          src="/images/woman.png"
          height={500}
          width={500}
          layout="responsive"
          alt="logo"
          className="object-contain"
        />
      </div>
      <div className="w-[50%]">
        <h1 className="text-4xl font-bold">Login here</h1>
      </div>
    </div>
  );
}
