import { auth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json('Unauthorized', { status: 401 });
  }

  try {
    const userRef = db.collection('users').doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return NextResponse.json('User not found', { status: 404 });
    }

    const customerId = userDoc.data()?.stripeCustomerId;

    if (!customerId) {
      return NextResponse.json('Customer not found', { status: 404 });
    }

    const stripePortalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${request.nextUrl.origin}/dashboard`,
    });

    console.log(stripePortalSession.url); // URL do painel do Stripe para o usuári

    return NextResponse.json({ url: stripePortalSession.url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
