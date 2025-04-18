'use client';

import { SecurityBanner } from '@/components/security-banner';
import { Statistics } from '@/components/statistics';
import { motion } from 'framer-motion';

export const DashboardContent = () => {
  return (
    <main className="bg-gray-50 p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card de Vendas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:col-span-3 lg:col-auto"
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
          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-1 w-[75%] bg-green-500"></div>
          </div>
        </motion.div>

        {/* Card de Clientes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:col-span-3 lg:col-auto"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Novos Clientes
            </h3>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
              +8%
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">245</p>
          <p className="mt-1 text-sm text-gray-500">Últimos 30 dias</p>
          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-1 w-[65%] bg-blue-500"></div>
          </div>
        </motion.div>

        {/* Card de Taxa de Conversão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:col-span-3 lg:col-auto"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Taxa de Conversão
            </h3>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
              +5%
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">2.4%</p>
          <p className="mt-1 text-sm text-gray-500">Meta: 3%</p>
          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-1 w-[45%] bg-purple-500"></div>
          </div>
        </motion.div>

        {/* Card de Transações Recentes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:col-span-3 lg:col-auto"
        >
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Transações Recentes
          </h3>
          <div className="space-y-4">
            {[
              {
                id: 1,
                name: 'João Silva',
                amount: 450,
                time: '2h atrás',
                type: 'Novo Plano',
              },
              {
                id: 2,
                name: 'Maria Santos',
                amount: 850,
                time: '4h atrás',
                type: 'Upgrade',
              },
              {
                id: 3,
                name: 'Pedro Costa',
                amount: 250,
                time: '6h atrás',
                type: 'Renovação',
              },
            ].map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="font-semibold text-blue-600">
                        {transaction.name[0]}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {transaction.name}
                    </p>
                    <p className="text-xs text-gray-500">{transaction.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">
                    + R$ {transaction.amount}
                  </p>
                  <p className="text-xs text-gray-500">{transaction.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card de Metas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:col-span-3 lg:col-auto"
        >
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Metas Mensais
          </h3>
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Vendas
                </span>
                <span className="text-sm font-medium text-gray-700">78%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: '78%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Clientes
                </span>
                <span className="text-sm font-medium text-gray-700">65%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-green-600"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Receita
                </span>
                <span className="text-sm font-medium text-gray-700">82%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-purple-600"
                  style={{ width: '82%' }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Seção de Estatísticas */}
      <div className="lg:col-span-3">
        <Statistics />
      </div>

      {/* Banner de Segurança */}
      <div className="lg:col-span-3">
        <SecurityBanner />
      </div>
    </main>
  );
};
