'use client';

import { useEffect } from 'react';

const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    if (window.location.hash === '#planos') {
      scrollToElement('planos');
    }
  }, []);
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

          <div id="metodos-pagamento" className="mt-20 w-full scroll-mt-16">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Métodos de Pagamento
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Stripe',
                  description:
                    'Pagamentos internacionais com cartão de crédito',
                  icon: '💳',
                  features: [
                    'Pagamento avulso',
                    'Assinatura mensal',
                    'Checkout seguro',
                  ],
                },
                {
                  title: 'Mercado Pago',
                  description: 'A solução mais popular da América Latina',
                  icon: '🌎',
                  features: [
                    'Cartão de crédito',
                    'Boleto',
                    'Checkout integrado',
                  ],
                },
                {
                  title: 'PIX',
                  description: 'Transferência instantânea 24/7',
                  icon: '⚡',
                  features: [
                    'Pagamento imediato',
                    'Sem taxas',
                    'Disponível 24h',
                  ],
                },
                {
                  title: 'Assinatura',
                  description: 'Pagamento recorrente com benefícios exclusivos',
                  icon: '🔄',
                  features: [
                    'Desconto mensal',
                    'Recursos premium',
                    'Suporte prioritário',
                  ],
                },
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="rounded-2xl bg-white p-6 shadow-xl transition-shadow hover:shadow-2xl"
                >
                  <div className="mb-4 text-4xl">{method.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {method.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div id="planos" className="mt-20 w-full scroll-mt-16">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Planos e Preços
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Básico',
                  price: 'R$ 29,90',
                  period: 'por mês',
                  features: [
                    'Acesso básico',
                    'Suporte por email',
                    'Até 3 projetos',
                  ],
                  highlighted: false,
                },
                {
                  title: 'Pro',
                  price: 'R$ 59,90',
                  period: 'por mês',
                  features: [
                    'Acesso completo',
                    'Suporte prioritário',
                    'Projetos ilimitados',
                    'API access',
                  ],
                  highlighted: true,
                },
                {
                  title: 'Enterprise',
                  price: 'Sob consulta',
                  period: '',
                  features: [
                    'Customização total',
                    'Suporte 24/7',
                    'SLA garantido',
                    'Treinamento',
                  ],
                  highlighted: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className={`rounded-2xl p-6 shadow-xl transition-shadow hover:shadow-2xl ${plan.highlighted ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'bg-white'}`}
                >
                  <h3
                    className={`mb-2 text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-800'}`}
                  >
                    {plan.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span
                        className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full rounded-xl px-6 py-3 font-medium transition-all ${plan.highlighted ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'}`}
                  >
                    Começar agora
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 w-full">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Perguntas Frequentes
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: 'Quais formas de pagamento são aceitas?',
                  answer:
                    'Aceitamos diversos métodos de pagamento, incluindo cartão de crédito via Stripe e Mercado Pago, PIX e pagamento recorrente via assinatura.',
                },
                {
                  question: 'Como funciona a assinatura?',
                  answer:
                    'A assinatura é cobrada mensalmente e oferece acesso a recursos premium, suporte prioritário e descontos exclusivos.',
                },
                {
                  question: 'Posso cancelar a qualquer momento?',
                  answer:
                    'Sim, você pode cancelar sua assinatura a qualquer momento sem multa ou compromisso.',
                },
                {
                  question: 'O pagamento é seguro?',
                  answer:
                    'Sim, utilizamos as melhores práticas de segurança e processadores de pagamento confiáveis para proteger suas informações.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="rounded-2xl bg-white p-6 shadow-xl transition-shadow hover:shadow-2xl"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <footer className="mt-32 border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-800">
                Empresa
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/sobre"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/carreiras"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Carreiras
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-800">
                Produto
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#metodos-pagamento"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#planos"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Preços
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentacao"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Documentação
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-800">
                Suporte
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/ajuda"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="/status"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-800">
                Siga-nos
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Micro SaaS. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
