'use client';

import { useStripe } from '@/hooks/useStripe';
import Link from 'next/link';

export default function Pagamentos() {
  const {
    createPaymentStipeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-2">Pagamentos</h1>
      <p className="mb-10">Listagem de pagamentos</p>

      <div className="flex flex-col space-y-4 mb-6">
        <button
          onClick={() => {
            createPaymentStipeCheckout({
              testeId: '123',
            });
          }}
          className="border rounded-md px-4 py-2 cursor-pointer bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
        >
          Criar pagamento stripe
        </button>
        <button
          onClick={() => {
            createSubscriptionStripeCheckout({
              testeId: '123',
            });
          }}
          className="border rounded-md px-4 py-2 cursor-pointer bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50"
        >
          Criar assinatura tripe
        </button>
        <button
          onClick={handleCreateStripePortal}
          className="border rounded-md px-4 py-2 cursor-pointer bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50"
        >
          Criar portal de pagamentos
        </button>
      </div>

      <Link href="/dashboard" className="mt-4">
        <button className="border rounded-md p-2 cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Dashboard
        </button>
      </Link>
    </div>
  );
}
