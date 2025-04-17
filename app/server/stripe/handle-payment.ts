import { db } from '@/lib/firebase';
import resend from '@/lib/resend';
import 'server-only';

import Stripe from 'stripe';

export async function handleStripePayment(
  event: Stripe.CheckoutSessionCompletedEvent
) {
  if (event.data.object.payment_status === 'paid') {
    console.log(
      'Pagamento realizado com sucesso! Enviar email de confirmação.'
    );

    const metadata = event.data.object.metadata;
    const userId = metadata?.userId;
    const userEmail =
      event.data.object.customer_email ||
      event.data.object.customer_details?.email;

    if (!userId) {
      return new Response('No user id', { status: 400 });
    }

    await db.collection('users').doc(userId).update({
      stripeSubscriptionId: event.data.object.subscription,
      subscriptionStatus: 'active',
    });

    if (userEmail) {
      const { data, error } = await resend.emails.send({
        from: 'Contato Micro SaaS <contato@peticao.com.br>',
        to: [userEmail],
        subject: 'Confirmação de pagamento - Micro SaaS',
        text: 'Obrigado por utilizar o Micro SaaS!',
        html: '<p>Obrigado por utilizar o Micro SaaS!</p>',
      });

      if (error) {
        console.error(error);
      }
      console.log(data);
    }
  }
}
