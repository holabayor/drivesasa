'use client';

import { testimonials } from '@/constants';
import TestimonialCard from './TestimonialCard';
import Marquee from 'react-fast-marquee';

export default function Testimonials() {
  return (
    <section className="advisory-bg py-4 md:py-12">
      <div className="max-width flex-center flex-col p-2 md:py-2 lg:py-16">
        <div className="flex flex-col items-center py-2 md:py-6">
          <p className="text-[8px] font-bold uppercase text-red-600 py">
            what they say about us
          </p>
          <h2 className="font-extrabold">Join Our Happy Clients</h2>
        </div>
        <Marquee speed={35} pauseOnClick={true} autoFill={true}>
          {testimonials.map((card, index) => (
            <TestimonialCard
              key={index}
              date={card.date}
              heading={card.heading}
              text={card.text}
              image={card.image}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
