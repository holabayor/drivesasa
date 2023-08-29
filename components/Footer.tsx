'use client';

import { footerLinks } from '@/app/constants';
import { MoveRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#10255A] text-white p-6">
      <div className="max-width flex items-start flex-row flex-wrap justify-between border-b-2 border-gray-100 py-4">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col my-2 sm:mt-0 md:min-w-[150px]`}
          >
            <h4 className="font-medium">{footerlink.title}</h4>
            <ul className="list-none mt-2">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`text-xs font-light cursor-pointer ${
                    index !== footerlink.links.length - 1
                      ? 'mb-1 md:mb-2'
                      : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-[#979797] p-6 max-w-[350px]">
          <h4 className="text-xs font-bold mb-4">Subscribe</h4>
          <>
            <div className="group relative h-12 w-full">
              <div className="absolute px-4 top-2/4 rounded-r-md right-0 grid h-full -translate-y-2/4 place-items-center bg-blue-500 cursor-pointer">
                <MoveRight
                  size={20}
                  className="group-hover:scale-105 -translate-x-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out"
                />
              </div>
              <input
                type="email"
                className="peer h-full w-full rounded-md p-4 !pr-6 font-sans text-black placeholder:text-xs placeholder:text-gray-600"
                placeholder="Email address"
              />
            </div>
          </>
          <p className="text-xs font-light my-4">
            We are thrilled to share with you very valuable vehicle related
            information for free. Sign up to our newsletter to get yourself in
            the exclusive list.
          </p>
        </div>
      </div>
      <div className="flex"></div>
    </footer>
  );
}
