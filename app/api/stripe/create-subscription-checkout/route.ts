import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { getOrCreateCustomerId } from "@/server/stripe/get-or-create-customer-id";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { testeId } = await request.json();

  const price = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;
  
  if(!price) {
    return NextResponse.json("Price not found", { status: 400 });
  }

  const session = await auth();
  const userId = session?.user?.id;
  const userEmail = session?.user?.email;
  
  if (!userId || !userEmail) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const metadata = {
    testeId,
    price,
    userId,
  };

  const customerId = await getOrCreateCustomerId(userId, userEmail);
  if(!customerId) {
    return NextResponse.json("Customer not found", { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price,
          quantity: 1,
        }
      ],
      payment_method_types: ["card"],
      success_url: `${request.nextUrl.origin}/success`,
      cancel_url: `${request.nextUrl.origin}/`,
      metadata,
      customer: customerId
    })
  
    if (!session.url) {
      return NextResponse.json("Session not found", { status: 400 });
    }
    
    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}