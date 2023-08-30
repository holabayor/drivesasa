'use client';

import { advisoryCards } from '@/app/constants';

import CTACard from './CTACard';

export default function Advisory() {
  return (
    <section className="advisory-bg">
      <div className="max-width flex-center flex-col p-2 md:py-2 lg:py-16">
        <div className="flex flex-col items-center md:items-start py-2 md:py-6">
          <p className="text-[8px] font-semibold uppercase text-red-600">
            car experts
          </p>
          <h2 className="font-extrabold text-left">
            Harness Our <br className="hidden md:block" />
            Vehicle Expertise
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 py-4">
          {advisoryCards.map((card, index) => (
            <CTACard key={index} heading={card.heading} text={card.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
