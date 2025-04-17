'use client';

import useMercadoPago from '@/hooks/useMercadoPago';
import { useStripe } from '@/hooks/useStripe';
import Link from 'next/link';

export default function Pagamentos() {
  const {
    createPaymentStipeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  const { createMercadoPagoCheckout } = useMercadoPago();

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
          className="focus:ring-opacity-50 cursor-pointer rounded-md border bg-green-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-green-600 focus:ring focus:ring-green-300 focus:outline-none"
        >
          Criar pagamento stripe
        </button>
        <button
          onClick={() => {
            createSubscriptionStripeCheckout({
              testeId: '123',
            });
          }}
          className="focus:ring-opacity-50 cursor-pointer rounded-md border bg-purple-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-purple-600 focus:ring focus:ring-purple-300 focus:outline-none"
        >
          Criar assinatura tripe
        </button>
        <button
          onClick={handleCreateStripePortal}
          className="focus:ring-opacity-50 cursor-pointer rounded-md border bg-orange-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-orange-600 focus:ring focus:ring-orange-300 focus:outline-none"
        >
          Criar portal de pagamentos
        </button>
        <button
          onClick={() =>
            createMercadoPagoCheckout({
              testeId: '123',
              userEmail: 'teste@teste.com',
            })
          }
          className="focus:ring-opacity-50 cursor-pointer rounded-md border bg-indigo-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-indigo-600 focus:ring focus:ring-indigo-300 focus:outline-none"
        >
          Criar pagamento Mercado Pago
        </button>
      </div>

      <Link href="/dashboard" className="mt-4">
        <button className="focus:ring-opacity-50 cursor-pointer rounded-md border bg-blue-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none">
          Dashboard
        </button>
      </Link>
    </div>
  );
}
