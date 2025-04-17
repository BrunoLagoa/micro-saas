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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-10">Dashboard</h1>
      <p>Email do usuário: {session?.user?.email}</p>

      {session?.user?.email && (
        <button
          onClick={handleAuth}
          className="mt-4 border rounded-md p-2 cursor-pointer bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Logout
        </button>
      )}

      <Link href="/pagamentos" className="mt-4">
        <button className="border rounded-md p-2 cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Pagamentos
        </button>
      </Link>
    </div>
  );
}
