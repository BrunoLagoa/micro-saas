import { handleAuth } from '@/actions/handle-auth';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl font-bold">Dashboard</h1>
      <p>Email do usuário: {session?.user?.email}</p>

      {session?.user?.email && (
        <button
          onClick={handleAuth}
          className="mt-4 cursor-pointer rounded-md border bg-red-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Logout
        </button>
      )}

      <Link href="/pagamentos" className="mt-4">
        <button className="cursor-pointer rounded-md border bg-blue-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Pagamentos
        </button>
      </Link>
    </div>
  );
}
