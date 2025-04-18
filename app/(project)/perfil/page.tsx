import Menu from '@/components/menu';
import Header from '@/components/header';
import { ProfileContent } from './content';
import { auth } from '@/lib/auth';

export default async function Profile() {
  const session = await auth();

  const user = {
    name: session?.user?.name || '',
    email: session?.user?.email || '',
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Menu />
      <div className="flex-1 overflow-auto">
        <Header title="Perfil" />
        <div className="mx-auto max-w-4xl p-6">
          <ProfileContent user={user} />
        </div>
      </div>
    </div>
  );
}
