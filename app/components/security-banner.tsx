'use client';

import { motion } from 'framer-motion';

export const SecurityBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mx-auto mt-16 max-w-4xl rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Pagamentos 100% Seguros</h2>
          <p className="mt-2 max-w-xl">
            Todas as transações são processadas com criptografia de ponta a
            ponta e seguem os mais rigorosos padrões de segurança do mercado.
          </p>
        </div>
        <div className="hidden md:block">
          <svg
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
