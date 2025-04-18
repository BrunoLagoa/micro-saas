'use client';

import { useMenuClasses } from '@/hooks/useMenuClasses';
import Link from 'next/link';

export default function Menu() {
  const { getLinkClassName } = useMenuClasses();

  return (
    <div className="hidden w-64 flex-shrink-0 bg-white p-4 shadow-lg md:block">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>
      </div>
      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className={`flex items-center rounded-lg p-3 ${getLinkClassName('/dashboard')}`}
        >
          <svg
            className="mr-3 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
            />
          </svg>
          Dashboard
        </Link>
        <Link
          href="/pagamentos"
          className={`flex items-center rounded-lg p-3 ${getLinkClassName('/pagamentos')}`}
        >
          <svg
            className="mr-3 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          Pagamentos
        </Link>
        <Link
          href="/perfil"
          className={`flex items-center rounded-lg p-3 ${getLinkClassName('/perfil')}`}
        >
          <svg
            className="mr-3 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Perfil
        </Link>
      </nav>
    </div>
  );
}
