import resend from '@/lib/resend';
import { PaymentResponse } from 'mercadopago/dist/clients/payment/commonTypes';

export async function handleMercadoPagoPayment(paymentData: PaymentResponse) {
  const metadata = paymentData.metadata;
  const userEmail = metadata.user_email;
  // const testeId = metadata.teste_id;

  console.log('paymentData', paymentData);

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
