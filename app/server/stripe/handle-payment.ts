import { db } from "@/lib/firebase";
import "server-only";

import Stripe from "stripe";

export async function handleStripePayment(event: Stripe.CheckoutSessionCompletedEvent) {
  if(event.data.object.payment_status === "paid") {
    console.log("Pagamento realizado com sucesso! Enviar email de confirmação.");

    const metadata = event.data.object.metadata;
    const userId = metadata?.userId;
    
    if(!userId) {
      return new Response("No user id", { status: 400 });
    }

    await db.collection("users").doc(userId).update({
      stripeSubscriptionId: event.data.object.subscription,
      subscriptionStatus: "active",
    })
  }
}