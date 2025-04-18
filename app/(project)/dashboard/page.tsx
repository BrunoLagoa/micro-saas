import Menu from '@/components/menu';
import { DashboardContent } from './content';
import Header from '@/components/header';

export default async function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Menu />
      <div className="flex-1 overflow-auto">
        <Header title="Dashboard" />
        <DashboardContent />
      </div>
    </div>
  );
}
