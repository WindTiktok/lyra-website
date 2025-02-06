// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex-shrink-0">
            <img
              src="/window.svg"
              alt="elizaOS logo"
              className="h-8 w-8"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="/framework" className="text-gray-600 hover:text-black flex items-center gap-2">
              <img src="/globe.svg" className="h-5 w-5" />
              Framework
            </Link>
            <Link href="/dao" className="text-gray-600 hover:text-black flex items-center gap-2">
              <img src="/file.svg" className="h-5 w-5" />
              DAO
            </Link>
            <Link href="/partners" className="text-gray-600 hover:text-black">
              Partners
            </Link>
            <Link href="/myeliza" className="text-gray-600 hover:text-black">
              MyEliza
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://x.com/elizaOS" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-lg">
              <img src="/twitter.svg" className="h-5 w-5" />
            </a>
            <a href="https://github.com/elizaOS" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-lg">
              <img src="/github.svg" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}