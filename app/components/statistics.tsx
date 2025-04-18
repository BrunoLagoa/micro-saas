'use client';

import { motion } from 'framer-motion';

export function Statistics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mx-auto mt-16 max-w-4xl"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="text-3xl font-bold text-green-500">R$ 150K+</div>
          <div className="mt-2 text-sm text-gray-600">Total Processado</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="text-3xl font-bold text-purple-500">1000+</div>
          <div className="mt-2 text-sm text-gray-600">
            Transações Realizadas
          </div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="text-3xl font-bold text-blue-500">99.9%</div>
          <div className="mt-2 text-sm text-gray-600">Taxa de Sucesso</div>
        </div>
      </div>
    </motion.div>
  );
}
