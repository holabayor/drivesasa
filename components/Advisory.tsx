'use client';

import { advisoryCards } from '@/app/constants';

import CTACard from './CTACard';

export default function Advisory() {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 py-6 md:px-4">
        {advisoryCards.map((card, index) => (
          <CTACard key={index} heading={card.heading} text={card.text} />
        ))}
      </div>
    </section>
  );
}
