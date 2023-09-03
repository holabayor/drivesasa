'use client';

import Image from 'next/image';

export default function page() {
  return (
    <div className="max-width flex flex-1 min-h-screen">
      <div>
        <Image
          src="/images/woman.png"
          fill={true}
          alt="logo"
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold">Login here</h1>
      </div>
    </div>
  );
}
