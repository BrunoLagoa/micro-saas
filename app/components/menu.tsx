import Link from 'next/link';

export default function Menu() {
  return (
    <div className="hidden w-64 flex-shrink-0 bg-white p-4 shadow-lg md:block">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>
      </div>
      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center rounded-lg bg-blue-50 p-3 text-blue-700"
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
          className="flex items-center rounded-lg p-3 text-gray-600 hover:bg-gray-50"
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
      </nav>
    </div>
  );
}
