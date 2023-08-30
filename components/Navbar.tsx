'use client';

import { navLinks } from '@/app/constants';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  const [toggle, setToggle] = React.useState(false);
  const Icon = toggle ? X : Menu;
  return (
    <nav className="max-width flex-between py-2 bg-white px-4 md:px-6 z-50">
      <Image src="/logo.png" alt="logo" width={70} height={70} />
      <ul className="hidden sm:flex list-none">
        {navLinks.map((link, index) => (
          <li key={index} className="nav-link">
            {link.name}
          </li>
        ))}
      </ul>
      <div className="flex sm:hidden">
        <Icon color="gray" size={40} onClick={() => setToggle(!toggle)} />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } py-2 px-4 absolute top-[50px] right-0 w-full h-contain bg-white animate-nav-slide z-20`}
        >
          <ul className="flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-link font-bold">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
