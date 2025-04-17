'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Failure() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-red-50 to-white p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-red-500"
      >
        <svg
          className="h-24 w-24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Falha no Pagamento
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Desculpe, houve um problema ao processar seu pagamento. Por favor,
          tente novamente.
        </p>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Detalhes da Transação
          </h2>
          <div className="space-y-2 text-gray-600">
            <p>
              Status: <span className="font-medium text-red-500">Falhou</span>
            </p>
            <p>Data: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>
        </div>

        <div className="space-x-4">
          <Link href="/pagamentos">
            <button className="focus:ring-opacity-50 rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Tentar Novamente
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="focus:ring-opacity-50 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:outline-none">
              Voltar ao Dashboard
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
