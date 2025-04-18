import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { handleAuth } from '@/actions/handle-auth';
import MobileMenu from './mobile-menu';

type HeaderProps = {
  title: string;
};

export default async function Header({ title }: HeaderProps) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <header className="bg-white p-4 shadow-sm">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex w-full items-center justify-between md:w-auto">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <MobileMenu />
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <span className="text-gray-600">{session?.user?.email}</span>
          <button
            onClick={handleAuth}
            className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
