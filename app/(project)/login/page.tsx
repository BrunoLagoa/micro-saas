import { handleAuth } from '@/actions/handle-auth';

export default function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl font-bold">Login</h1>
      <form action={handleAuth}>
        <button
          type="submit"
          className="mt-4 cursor-pointer rounded-md border bg-blue-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Signin with Google
        </button>
      </form>
    </div>
  );
}
