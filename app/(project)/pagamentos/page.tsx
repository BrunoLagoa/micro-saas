import Menu from '@/components/menu';
import Header from '@/components/header';
import PaymentContent from './content';

export default async function Payment() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Menu />
      <div className="flex-1 overflow-auto">
        <Header title="Pagamento" />
        <PaymentContent />
      </div>
    </div>
  );
}
