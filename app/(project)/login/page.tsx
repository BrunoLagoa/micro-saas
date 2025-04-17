import { handleAuth } from '@/actions/handle-auth';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Login() {
  const session = await auth();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl font-bold">Login</h1>
      <form action={handleAuth}>
        <button
          type="submit"
          className="focus:ring-opacity-50 mt-4 cursor-pointer rounded-md border bg-blue-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
        >
          Signin with Google
        </button>
      </form>
    </div>
  );
}
