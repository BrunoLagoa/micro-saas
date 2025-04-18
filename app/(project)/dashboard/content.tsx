'use client';

import { motion } from 'framer-motion';

export const DashboardContent = () => {
  return (
    <main className="p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card de Vendas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Total de Vendas
            </h3>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
              +12%
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">R$ 12.450</p>
          <p className="mt-1 text-sm text-gray-500">
            Comparado ao mês anterior
          </p>
        </motion.div>

        {/* Card de Atividades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            Transações Recentes
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-4 w-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Nova Venda
                  </p>
                  <p className="text-xs text-gray-500">Há 2 horas</p>
                </div>
              </div>
              <span className="text-sm font-medium text-green-600">
                + R$ 450,00
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card de Metas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-800">Meta Mensal</h3>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">78%</span>
              <span className="ml-2 text-sm text-gray-500">completado</span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[78%] rounded-full bg-blue-600"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
