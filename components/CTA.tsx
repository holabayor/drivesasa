import Image from 'next/image';
import React from 'react';
import Button from './Button';
import CTACard from './CTACard';
import { heroCards } from '@/constants';

export default function CTA() {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 py-6 md:px-4">
      {heroCards.map((card, index) => (
        <CTACard
          key={index}
          heading={card.heading}
          text={card.text}
          icon={card.icon}
        />
      ))}
    </div>
  );
}
