
import { SENDGRID_API_KEY } from "$env/static/private";

// const sgMail = require('@sendgrid/mail');
import sgMail from '@sendgrid/mail';
import type { RequestHandler } from './$types';


sgMail.setApiKey(SENDGRID_API_KEY)
export const POST: RequestHandler = async ({ request }) => {
  try {
    const { email } = await request.json();
    const msg = {
        to: email, // Change to your recipient
        from: 'sumitkumar19016@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
