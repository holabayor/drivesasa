import React from 'react';
import { heroCards } from '@/app/constants';
import CTACard from './CTACard';

const Hero = () => {
  return (
    <section className="max-width hero-bg flex flex-col items-center justify-between md:min-h-[90vh] py-2 md:py-6">
      <div className="after flex flex-col items-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold md:font-extrabold text-center drop-shadow-[0_1px_2px_rgba(255,255,255,90%)] uppercase z-40">
          <span className="text-white">welcome to</span>
          <br />
          <span className="text-[#10255A]">drivesasa</span>
        </h1>
        <p className="text-sm text-red-600 font-semibold md:font-bold">
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
