'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Footer } from '@/components/footer/footer';

const features = [
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
    description: 'Nossa equipe está sempre disponível para ajudar você.',
    icon: '💬',
  },
];

const paymentMethods = [
  {
    title: 'Stripe',
    description: 'Pagamentos internacionais com cartão de crédito',
    icon: '💳',
    features: ['Pagamento avulso', 'Assinatura mensal', 'Checkout seguro'],
  },
  {
    title: 'Mercado Pago',
    description: 'A solução mais popular da América Latina',
    icon: '🌎',
    features: ['Cartão de crédito', 'Boleto', 'Checkout integrado'],
  },
  {
    title: 'PIX',
    description: 'Transferência instantânea 24/7',
    icon: '⚡',
    features: ['Pagamento imediato', 'Sem taxas', 'Disponível 24h'],
  },
  {
    title: 'Assinatura',
    description: 'Pagamento recorrente com benefícios exclusivos',
    icon: '🔄',
    features: ['Desconto mensal', 'Recursos premium', 'Suporte prioritário'],
  },
];

const plans = [
  {
    title: 'Básico',
    price: 'R$ 29,90',
    period: 'por mês',
    features: ['Acesso básico', 'Suporte por email', 'Até 3 projetos'],
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
];

const faqs = [
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
];

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
            {features.map((feature, index) => (
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
              {paymentMethods.map((method, index) => (
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
              {plans.map((plan, index) => (
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
              {faqs.map((faq, index) => (
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
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
