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
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-2 text-4xl font-bold">Pagamentos</h1>
      <p className="mb-10">Listagem de pagamentos</p>

      <div className="mb-6 flex flex-col space-y-4">
        <button
          onClick={() => {
            createPaymentStipeCheckout({
              testeId: '123',
            });
          }}
          className="cursor-pointer rounded-md border bg-green-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
        >
          Criar pagamento stripe
        </button>
        <button
          onClick={() => {
            createSubscriptionStripeCheckout({
              testeId: '123',
            });
          }}
          className="cursor-pointer rounded-md border bg-purple-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50"
        >
          Criar assinatura tripe
        </button>
        <button
          onClick={handleCreateStripePortal}
          className="cursor-pointer rounded-md border bg-orange-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50"
        >
          Criar portal de pagamentos
        </button>
      </div>

      <Link href="/dashboard" className="mt-4">
        <button className="cursor-pointer rounded-md border bg-blue-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Dashboard
        </button>
      </Link>
    </div>
  );
}
