'use client';

import { handleAuth } from '@/actions/handle-auth';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 md:flex-row">
      <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent"
            >
              Bem-vindo de volta!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-3 text-gray-600"
            >
              Faça login para acessar sua conta e gerenciar seus projetos
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm"
          >
            <form action={handleAuth} className="space-y-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white shadow-md transition-all duration-200 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z"
                  />
                </svg>
                Entrar com Google
              </motion.button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Ao continuar, você concorda com nossos
              <p>
                <Link
                  href="/termos"
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  Termos de Serviço
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden w-1/2 flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white md:flex">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md space-y-8 text-center"
        >
          <h2 className="text-3xl font-bold">
            Gerencie seus projetos com facilidade
          </h2>
          <p className="text-lg text-blue-100">
            Acesse todas as ferramentas necessárias para o sucesso do seu
            negócio em um só lugar.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <h3 className="mb-2 font-semibold">Dashboard Intuitivo</h3>
              <p className="text-sm text-blue-100">
                Visualize métricas importantes em tempo real
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <h3 className="mb-2 font-semibold">Pagamentos Seguros</h3>
              <p className="text-sm text-blue-100">
                Processe transações com total segurança
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
