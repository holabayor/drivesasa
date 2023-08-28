'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  const [toggle, setToggle] = React.useState(false);
  const Icon = toggle ? X : Menu;
  return (
    <nav className="max-w-[1440px] mx-auto flex-between py-2 bg-white px-4 md:px-12 lg:px-24 z-50">
      <Image src="/logo.png" alt="logo" width={70} height={70} />
      <ul className="hidden sm:flex list-none">
        <li className="nav-link">Home</li>
        <li className="nav-link">Marketplace</li>
        <li className="nav-link">Services Center</li>
        <li className="nav-link">Blog</li>
        <li className="nav-link">Contacts</li>
      </ul>
      <div className="flex sm:hidden">
        <Icon color="gray" size={40} onClick={() => setToggle(!toggle)} />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } py-2 px-4 absolute top-[50px] right-0 mx-4 w-min-[200px] rounded-xl bg-slate-400 transition z-20`}
        >
          <ul className="flex flex-col justify-end items-center flex-1">
            <li className="nav-link">Home</li>
            <li className="nav-link">Marketplace</li>
            <li className="nav-link">Services Center</li>
            <li className="nav-link">Blog</li>
            <li className="nav-link">Contacts</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
