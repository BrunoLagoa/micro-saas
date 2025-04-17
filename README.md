# Micro SaaS - Plataforma de Pagamentos

Uma plataforma moderna de micro SaaS construída com Next.js, Firebase e integração com Stripe para processamento de pagamentos.

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Stripe](https://stripe.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Pré-requisitos

- Node.js
- Conta no Stripe
- Projeto Firebase

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRODUCT_PRICE_ID=
STRIPE_SUBSCRIPTION_PRICE_ID=

FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

### Instalação

```bash
npm install
npm run dev
```

## 🔌 Configuração do Webhook Stripe

Para testar eventos do Stripe localmente, siga os passos:

1. Instale a CLI do Stripe:

```bash
npm install -g stripe
```

2. Faça login na sua conta Stripe:

```bash
stripe login
```

3. Execute o comando para ouvir eventos e encaminhá-los para seu servidor local:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

> ⚠️ **Importante**: Mantenha este comando rodando em um terminal separado enquanto estiver testando os webhooks.

4. Copie o webhook signing secret fornecido e adicione à sua variável de ambiente `STRIPE_WEBHOOK_SECRET`.

## 🛠️ Funcionalidades

- Autenticação de usuários
- Processamento de pagamentos únicos
- Sistema de assinaturas
- Webhooks para eventos do Stripe:
  - Pagamentos bem-sucedidos
  - Assinaturas criadas/canceladas
  - Pagamentos por boleto
  - Expiração de sessões

## 🔧 Scripts de Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar servidor de produção
npm run start

# Verificar e corrigir problemas de linting
npm run lint

# Apenas verificar problemas de linting
npm run lint:check

# Formatar código com Prettier
npm run format

# Verificar formatação
npm run format:check

# Corrigir problemas de linting e formatação
npm run fix
```

## 📝 Estrutura do Projeto

```
/app
  /api          # Rotas da API
  /components   # Componentes React
  /hooks        # Custom hooks
  /lib          # Configurações (Firebase, Stripe)
  /server       # Lógica do servidor
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
