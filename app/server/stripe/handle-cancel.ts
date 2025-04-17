import { db } from '@/lib/firebase';
import resend from '@/lib/resend';
import 'server-only';

import Stripe from 'stripe';

export async function handleStripeCancelSubscription(
  event: Stripe.CheckoutSessionCompletedEvent
) {
  if (event.data.object.payment_status === 'paid') {
    console.log(
      'Cancelamento realizado com sucesso! Enviar email de confirmação.',
      event.type
    );
  }

  const customerId = event.data.object.customer;

  const userRef = await db
    .collection('users')
    .where('stripeCustomerId', '==', customerId)
    .get();

  if (userRef.empty) {
    return new Response('No user id', { status: 400 });
  }

  const userId = userRef.docs[0].id;
  const userEmail = userRef.docs[0].data().email;

  await db.collection('users').doc(userId).update({
    subscriptionStatus: 'inactive',
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
