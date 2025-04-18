import { handleAuth } from '@/actions/handle-auth';
import { Footer } from '@/components/footer/footer';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="mb-10 text-4xl font-bold">Dashboard</h1>
        <p>Email do usuário: {session?.user?.email}</p>

        {session?.user?.email && (
          <button
            onClick={handleAuth}
            className="focus:ring-opacity-50 mt-4 cursor-pointer rounded-md border bg-red-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-red-600 focus:ring focus:ring-blue-300 focus:outline-none"
          >
            Logout
          </button>
        )}

        <Link href="/pagamentos" className="mt-4">
          <button className="focus:ring-opacity-50 cursor-pointer rounded-md border bg-blue-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none">
            Pagamentos
          </button>
        </Link>
      </div>
      <div className="bg-blue-100">
        <Footer />
      </div>
    </div>
  );
}
