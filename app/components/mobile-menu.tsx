'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useMenuClasses } from '@/hooks/useMenuClasses';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getLinkClassName } = useMenuClasses();

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="block cursor-pointer md:hidden"
        aria-label="Menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white p-4 shadow-lg md:hidden`}
      >
        <nav className="flex flex-col space-y-2">
          <Link
            href="/dashboard"
            className={`rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 ${getLinkClassName('/dashboard')}`}
          >
            Dashboard
          </Link>
          <Link
            href="/pagamentos"
            className={`rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 ${getLinkClassName('/pagamentos')}`}
          >
            Pagamentos
          </Link>
          <Link
            href="/perfil"
            className={`rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 ${getLinkClassName('/perfil')}`}
          >
            Perfil
          </Link>
        </nav>
      </div>
    </>
  );
}
