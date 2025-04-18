'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="absolute top-0 -left-4 h-72 w-72 rounded-full bg-blue-100 opacity-50 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-purple-100 opacity-50 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
            Transforme suas ideias em realidade
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Plataforma completa para criar e gerenciar seus projetos de forma
            simples e eficiente. Comece agora mesmo e descubra um novo jeito de
            trabalhar.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/login">
                <button className="focus:ring-opacity-50 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-medium text-white shadow-lg transition-all hover:shadow-xl focus:ring-2 focus:ring-purple-500 focus:outline-none sm:w-auto">
                  Começar Agora
                </button>
              </Link>
            </motion.div>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Fácil de usar',
                description:
                  'Interface intuitiva que permite você focar no que realmente importa.',
                icon: '🚀',
              },
              {
                title: 'Seguro',
                description:
                  'Seus dados estão protegidos com a mais alta tecnologia de segurança.',
                icon: '🔒',
              },
              {
                title: 'Suporte 24/7',
                description:
                  'Nossa equipe está sempre disponível para ajudar você.',
                icon: '💬',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="rounded-2xl bg-white p-6 shadow-xl transition-shadow hover:shadow-2xl"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
