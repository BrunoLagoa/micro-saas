import { NextRequest, NextResponse } from 'next/server';
import mpClient, { validateMercadoPagoWebhook } from '@/lib/mercado-pago';
import { Payment } from 'mercadopago';
import { handleMercadoPagoPayment } from '@/server/mercado-pago/handle-payment';

export async function POST(request: NextRequest) {
  try {
    validateMercadoPagoWebhook(request);

    const body = await request.json();
    const { type, data } = body;

    // webhook aqui
    switch (type) {
      case 'payment':
        const payment = new Payment(mpClient);
        const paymentData = await payment.get({ id: data.id });
        if (
          paymentData.status === 'approved' ||
          paymentData.date_approved !== null
        ) {
          await handleMercadoPagoPayment(paymentData);
        }
        break;
      case 'plan':
        console.log('Plan received:', data);
        break;
      case 'subscription':
        console.log('Subscription received:', data);
        break;
      default:
        console.log('Unknown event:', type);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
