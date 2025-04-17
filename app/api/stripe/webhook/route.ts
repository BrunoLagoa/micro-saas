import { stripe } from '@/lib/stripe';
import { handleStripeCancelSubscription } from '@/server/stripe/handle-cancel';
import { handleStripePayment } from '@/server/stripe/handle-payment';
import { handleStripeSubscription } from '@/server/stripe/handle-subscription';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get('Stripe-Signature');

    if (!signature || !secret) {
      return new Response('No signature', { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(body, signature, secret);

    switch (event.type) {
      case 'checkout.session.completed': // Pagamento realizado com sucesso
        const metadata = event.data.object.metadata;
        if (metadata?.price === process.env.STRIPE_PRODUCT_PRICE_ID) {
          await handleStripePayment(event);
        }

        if (metadata?.price === process.env.STRIPE_SUBSCRIPTION_PRICE_ID) {
          await handleStripeSubscription(event);
        }
        break;
      case 'checkout.session.expired': // Pagamento expirado
        const checkoutSessionExpired = event.data.object;
        console.log('Checkout session expired:', checkoutSessionExpired);
        break;
      case 'checkout.session.async_payment_succeeded': // Boleto pago
        const checkoutSessionAsyncPaymentSucceeded = event.data.object;
        console.log(
          'Checkout session async payment succeeded:',
          checkoutSessionAsyncPaymentSucceeded
        );
        break;
      case 'checkout.session.async_payment_failed': // Boleto falhou
        const checkoutSessionAsyncPaymentFailed = event.data.object;
        console.log(
          'Checkout session async payment failed:',
          checkoutSessionAsyncPaymentFailed
        );
        break;
      case 'customer.subscription.created': // Assinatura criada
        const customerSubscriptionCreated = event.data.object;
        console.log(
          'Customer subscription created:',
          customerSubscriptionCreated
        );
        break;
      case 'customer.subscription.deleted': // Assinatura cancelada
        await handleStripeCancelSubscription(event);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json('Webhook received', { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json('Webhook error', { status: 400 });
  }
}
