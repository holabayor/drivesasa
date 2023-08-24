import React from 'react';
import Navbar from './Navbar';
import CTA from './CTA';

const Header = () => {
  return (
    <header className="max-width header-gradient flex flex-col items-center justify-between header-bg">
      <h1 className="text-4xl md:text-6xl font-bold md:font-extrabold text-center uppercase">
        welcome to <br className="hidden sm:block" />
        drivesasa
      </h1>
      <p className="text-sm font-semibold md:font-bold">
        Your Trusted Car Advisory Service
      </p>
      <CTA />
    </header>
  );
};

export default Header;
