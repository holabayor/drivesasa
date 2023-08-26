import Image from 'next/image';
import React from 'react';
import Button from './Button';

export default function CTA() {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-6 md:px-4">
      <div className="flex flex-col gap-4 items-center rounded-md max-w-[250px] bg-red-400 p-4">
        <Image
          src="/hands.png"
          alt="cta"
          width={50}
          height={50}
          className="object-contain"
        />

        <h4 className="uppercase font-semibold text-xs">expert advisory</h4>
        <p className="text-xs text-center">
          Get expert advisory from the moment you purchase your car.
          Consultation on vehicle choice, insurance options, financing and
          tracking.
        </p>
        <Button />
      </div>
      <div className="flex flex-col gap-4 items-center rounded-md max-w-[250px] bg-red-400 p-4">
        <Image
          src="/hands.png"
          alt="cta"
          width={50}
          height={50}
          className="object-contain"
        />

        <h4 className="uppercase font-semibold text-xs">expert advisory</h4>
        <p className="text-xs text-center">
          Get expert advisory from the moment you purchase your car.
          Consultation on vehicle choice, insurance options, financing and
          tracking.
        </p>
        <Button />
      </div>
      <div className="flex flex-col gap-4 items-center rounded-md max-w-[250px] bg-red-400 p-4">
        <Image
          src="/hands.png"
          alt="cta"
          width={50}
          height={50}
          className="object-contain"
        />

        <h4 className="uppercase font-semibold text-xs">expert advisory</h4>
        <p className="text-xs text-center">
          Get expert advisory from the moment you purchase your car.
          Consultation on vehicle choice, insurance options, financing and
          tracking.
        </p>
        <Button />
      </div>
    </div>
  );
}
