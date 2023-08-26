import React from 'react';
import Navbar from './Navbar';
import CTA from './CTA';

const Header = () => {
  return (
    <header className="max-width flex flex-col items-center justify-between header-bg">
      <div className="flex flex-col items-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold md:font-extrabold text-center uppercase">
          welcome to <br />
          drivesasa
        </h1>
        <p className="text-sm font-semibold md:font-bold">
          Your Trusted Car Advisory Service
        </p>
      </div>
      <CTA />
    </header>
  );
};

export default Header;
