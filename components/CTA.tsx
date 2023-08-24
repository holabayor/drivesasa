import Image from 'next/image';
import React from 'react';

export default function CTA() {
  return (
    <div className="flex flex-col items-center rounded-md max-w-[250px]">
      <h4 className="uppercase font-semibold">expert advisory</h4>
      <Image
        src="/hands.png"
        alt="cta"
        width={40}
        height={40}
        className="object-contain"
      />

      <p className="p-2 text-xs text-center">
        Get expert advisory from the moment you purchase your car. Consultation
        on vehicle choice, insurance options, financing and tracking.
      </p>
    </div>
  );
}
