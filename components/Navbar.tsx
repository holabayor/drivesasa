'use client';

import { navLinks } from '@/app/constants';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const [toggle, setToggle] = React.useState(false);
  const Icon = toggle ? X : Menu;
  return (
    <nav className="max-width flex-between py-2 bg-white px-4 md:px-6 z-50">
      <Image src="/logo.png" alt="logo" width={70} height={70} />
      <ul className="hidden sm:flex list-none">
        {navLinks.map((nav, index) => (
          <li key={index} className="nav-link underline-link">
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex sm:hidden">
        <Icon color="gray" size={40} onClick={() => setToggle(!toggle)} />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } py-2 px-4 absolute top-[50px] border-t-2 right-0 w-full h-contain bg-white animate-nav-slide z-20`}
        >
          <ul className="flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={index} className="nav-link font-bold">
                <Link
                  href={nav.link}
                  className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
