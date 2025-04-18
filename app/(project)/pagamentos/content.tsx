'use client';

import useMercadoPago from '@/hooks/useMercadoPago';
import { useStripe } from '@/hooks/useStripe';
import { motion } from 'framer-motion';
import { Statistics } from '@/components/statistics';
import { SecurityBanner } from '@/components/security-banner';

export default function PaymentContent() {
  const {
    createPaymentStipeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  const { createMercadoPagoCheckout } = useMercadoPago();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-2 text-4xl font-bold text-gray-800">
          Central de Pagamentos
        </h1>
        <p className="text-gray-600">Escolha a melhor opção para você</p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Pagamento Único
          </h2>
          <p className="mb-4 text-gray-600">
            Realize um pagamento único através do Stripe
          </p>
          <button
            onClick={() => createPaymentStipeCheckout({ testeId: '123' })}
            className="focus:ring-opacity-50 w-full cursor-pointer rounded-lg bg-green-500 py-2 text-white transition-colors hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            Pagar com Stripe
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
            <svg
              className="h-6 w-6 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Assinatura
          </h2>
          <p className="mb-4 text-gray-600">
            Assine um plano recorrente com Stripe
          </p>
          <button
            onClick={() => createSubscriptionStripeCheckout({ testeId: '123' })}
            className="focus:ring-opacity-50 w-full cursor-pointer rounded-lg bg-purple-500 py-2 text-white transition-colors hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            Assinar Agora
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
            <svg
              className="h-6 w-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Portal de Pagamentos
          </h2>
          <p className="mb-4 text-gray-600">
            Gerencie suas assinaturas e pagamentos
          </p>
          <button
            onClick={handleCreateStripePortal}
            className="focus:ring-opacity-50 w-full cursor-pointer rounded-lg bg-orange-500 py-2 text-white transition-colors hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            Acessar Portal
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
            <svg
              className="h-6 w-6 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Mercado Pago
          </h2>
          <p className="mb-4 text-gray-600">Pague usando Mercado Pago</p>
          <button
            onClick={() =>
              createMercadoPagoCheckout({
                testeId: '123',
                userEmail: 'teste@teste.com',
              })
            }
            className="focus:ring-opacity-50 w-full cursor-pointer rounded-lg bg-indigo-500 py-2 text-white transition-colors hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            Pagar com Mercado Pago
          </button>
        </motion.div>
      </div>

      {/* Seção de Estatísticas */}
      <Statistics />

      {/* Seção FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-16 max-w-4xl"
      >
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          Perguntas Frequentes
        </h2>
        <div className="grid gap-6">
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Como funciona o pagamento?
            </h3>
            <p className="mt-2 text-gray-600">
              Nosso sistema utiliza gateways seguros como Stripe e Mercado Pago
              para processar todas as transações de forma segura e eficiente.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Quais métodos de pagamento são aceitos?
            </h3>
            <p className="mt-2 text-gray-600">
              Aceitamos cartões de crédito, débito e outros métodos disponíveis
              através do Stripe e Mercado Pago.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Como cancelar uma assinatura?
            </h3>
            <p className="mt-2 text-gray-600">
              Você pode gerenciar suas assinaturas facilmente através do Portal
              de Pagamentos a qualquer momento.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Banner de Segurança */}
      <SecurityBanner />
    </div>
  );
}
