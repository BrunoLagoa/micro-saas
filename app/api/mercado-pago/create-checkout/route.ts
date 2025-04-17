import { NextRequest, NextResponse } from 'next/server';
import { Preference } from 'mercadopago';
import mpClient from '@/lib/mercado-pago';

export async function POST(request: NextRequest) {
  const { testeId, userEmail } = await request.json();

  try {
    const preference = new Preference(mpClient);

    const createPreference = await preference.create({
      body: {
        external_reference: testeId, // ID do pedido no seu sistema [recomendado] score
        metadata: {
          testeId, // Essa variável é convertida para snake_case -> teste_id
        },
        ...(userEmail && { payer: { email: userEmail } }),
        items: [
          {
            id: '1234',
            title: 'Teste',
            description: 'Teste',
            unit_price: 1,
            quantity: 1,
            currency_id: 'BRL',
            category_id: 'category123',
          },
        ],
        payment_methods: {
          installments: 12,
          // excluded_payment_methods: [
          //   {
          //     id: 'bolbradesco',
          //   },
          //   {
          //     id: 'pec',
          //   },
          // ],
          // excluded_payment_types: [
          //   {
          //     id: 'debit_card',
          //   },
          //   {
          //     id: 'credit_card',
          //   },
          // ],
        },
        auto_return: 'approved',
        back_urls: {
          success: `${request.nextUrl.origin}/api/mercado-pago/pending`,
          failure: `${request.nextUrl.origin}/api/mercado-pago/pending`,
          pending: `${request.nextUrl.origin}/api/mercado-pago/pending`,
        },
      },
    });

    if (!createPreference.id) {
      return NextResponse.json(
        { error: 'Erro ao criar checkout com Mercado Pago' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        preferenceId: createPreference.id,
        initPoint: createPreference.init_point,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
