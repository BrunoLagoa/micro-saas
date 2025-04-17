import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { testeId, userEmail } = await request.json();

  const price = process.env.STRIPE_PRODUCT_PRICE_ID;

  if (!price) {
    return NextResponse.json('Price not found', { status: 400 });
  }

  const metadata = {
    testeId,
    price,
  };

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],
      mode: 'payment',
      payment_method_types: ['card', 'boleto'],
      success_url: `${request.nextUrl.origin}/success`,
      cancel_url: `${request.nextUrl.origin}/`,
      ...(userEmail && { customer_email: userEmail }),
      metadata,
    });

    if (!session.url) {
      return NextResponse.json('Session not found', { status: 400 });
    }

    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
