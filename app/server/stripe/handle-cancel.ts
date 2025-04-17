import { db } from '@/lib/firebase';
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

  await db.collection('users').doc(userId).update({
    subscriptionStatus: 'inactive',
  });
}
