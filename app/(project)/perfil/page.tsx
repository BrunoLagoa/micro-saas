import Menu from '@/components/menu';
import Header from '@/components/header';
import { ProfileContent } from './content';

export default async function Profile() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Menu />
      <div className="flex-1 overflow-auto">
        <Header title="Perfil" />
        <ProfileContent />
      </div>
    </div>
  );
}
