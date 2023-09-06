'use client';

import Image from 'next/image';

export default function page() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block w-[50%] bg-no-repeat bg-right bg-cover bg-[url('/images/woman.png')]"></div>
      <div className="w-[100%] lg:w-[50%] text-center">
        <h1 className="text-4xl font-bold">Login here</h1>
      </div>
    </div>
  );
}
