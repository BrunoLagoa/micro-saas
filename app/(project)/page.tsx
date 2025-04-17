import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">Landing pages</h1>
      <Link href="/login">
        <button className="focus:ring-opacity-50 rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
          Fazer Login
        </button>
      </Link>
    </div>
  );
}
