import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Login from './_component/login';

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect('/dashboard');
  }

  return <Login />;
}
