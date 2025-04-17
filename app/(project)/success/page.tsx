'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-green-500"
      >
        <svg
          className="w-24 h-24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pagamento Confirmado!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Obrigado pela sua compra. Seu pagamento foi processado com sucesso.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Detalhes da Transação</h2>
          <div className="space-y-2 text-gray-600">
            <p>Status: <span className="text-green-500 font-medium">Aprovado</span></p>
            <p>Data: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>
        </div>

        <Link href="/dashboard">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Voltar ao Dashboard
          </button>
        </Link>
      </motion.div>
    </div>
  );
}