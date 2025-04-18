'use client';

import { motion } from 'framer-motion';

export const ProfileContent = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {/* Perfil do Usuário */}
        <div className="rounded-xl bg-white p-6 shadow-lg md:col-span-3">
          <div className="flex items-center space-x-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-2xl font-bold text-white">
              JD
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                João da Silva
              </h2>
              <p className="text-gray-600">joao@email.com</p>
              <p className="text-sm text-gray-500">Membro desde Jan 2024</p>
            </div>
          </div>
        </div>

        {/* Alteração de dados pessoais */}
        <div className="rounded-xl bg-white p-6 shadow-lg md:col-span-3">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Alteração de dados pessoais
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                placeholder="João da Silva"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                placeholder="EMAIL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Data de Nascimento
              </label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>
        </div>

        {/* Estatísticas do Usuário */}
        <div className="rounded-xl bg-white p-6 shadow-lg md:col-span-1">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Estatísticas
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Total Investido</p>
              <p className="text-2xl font-bold text-blue-600">R$ 15.000</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Transações</p>
              <p className="text-2xl font-bold text-purple-600">24</p>
            </div>
          </div>
        </div>

        {/* Preferências */}
        <div className="rounded-xl bg-white p-6 shadow-lg md:col-span-2">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Preferências
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Autenticação em 2 Fatores</span>
              <div className="relative h-6 w-12 cursor-pointer rounded-full bg-green-500">
                <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Notificações por Email</span>
              <div className="relative h-6 w-12 cursor-pointer rounded-full bg-blue-500">
                <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Notificações de Login</span>
              <div className="relative h-6 w-12 cursor-pointer rounded-full bg-gray-300">
                <div className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Relatório Mensal</span>
              <div className="relative h-6 w-12 cursor-pointer rounded-full bg-gray-300">
                <div className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Últimas Transações */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Últimas Transações
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Investimento #123</span>
              <span className="font-medium text-green-500">R$ 1.000</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Investimento #122</span>
              <span className="font-medium text-green-500">R$ 2.500</span>
            </div>
          </div>
        </div>

        {/* Histórico de Atividades */}
        <div className="rounded-xl bg-white p-6 shadow-lg md:col-span-2">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Histórico de Atividades
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
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
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Login realizado
                </p>
                <p className="text-xs text-gray-500">Hoje, 10:30</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-4 w-4 text-green-600"
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
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Investimento realizado
                </p>
                <p className="text-xs text-gray-500">Ontem, 15:45</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-4 w-4 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Perfil atualizado
                </p>
                <p className="text-xs text-gray-500">3 dias atrás</p>
              </div>
            </div>
          </div>
        </div>

        {/* Configurações Avançadas */}
        <div className="rounded-xl bg-white p-6 shadow-lg md:col-span-3">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Configurações Avançadas
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Idioma
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none">
                <option>Português</option>
                <option>English</option>
                <option>Español</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fuso Horário
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none">
                <option>Brasília (GMT-3)</option>
                <option>Lisboa (GMT)</option>
                <option>New York (GMT-4)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Formato de Data
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none">
                <option>DD/MM/YYYY</option>
                <option>MM/DD/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Moeda
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none">
                <option>BRL (R$)</option>
                <option>USD ($)</option>
                <option>EUR (€)</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
