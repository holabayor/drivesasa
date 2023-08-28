import React from 'react';
import CTA from './CTA';
import { heroCards } from '@/app/constants';
import CTACard from './CTACard';

const Hero = () => {
  return (
    <section className="max-width hero-bg flex flex-col items-center justify-between min-h-screen py-2 md:py-6">
      <div className="flex flex-col items-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold md:font-extrabold text-center uppercase">
          welcome to <br />
          drivesasa
        </h1>
        <p className="text-sm font-semibold md:font-bold">
          Your Trusted Car Advisory Service
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 md:gap-4 py-6 md:px-4">
        {heroCards.map((card, index) => (
          <CTACard
            key={index}
            heading={card.heading}
            text={card.text}
            icon={card.icon}
            white
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
