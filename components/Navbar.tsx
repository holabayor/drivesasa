import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="min-w-full flex-between bg-white">
      <Image
        src="/logo.png"
        alt="logo"
        width={80}
        height={80}
        className="pl-6"
      />
      <ul className="flex">
        <li className="nav-link">Home</li>
        <li className="nav-link">Marketplace</li>
        <li className="nav-link">Services Center</li>
        <li className="nav-link">Blog</li>
        <li className="nav-link">Contacts</li>
      </ul>
    </nav>
  );
}
