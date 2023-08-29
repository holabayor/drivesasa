'use client';

import { ArrowBigRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#10255A] p-6">
      <div className="max-width flex-between border-b-2 border-gray-100 py-4">
        Links
        <div className="bg-[#979797] p-4">
          <h4>Subscribe</h4>
          <div className="flex items-center border bg-blue-600">
            <input placeholder="Email address" className="p-2" />
            <ArrowBigRight size={25} />
          </div>
        </div>
      </div>
    </footer>
  );
}
