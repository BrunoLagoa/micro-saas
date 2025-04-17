import { handleAuth } from '@/actions/handle-auth';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-10">Login</h1>
      <form action={handleAuth}>
        <button
          type="submit"
          className="mt-4 border rounded-md p-2 cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Signin with Google
        </button>
      </form>
    </div>
  );
}
