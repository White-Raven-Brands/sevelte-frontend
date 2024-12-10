
import { SENDGRID_API_KEY } from "$env/static/private";

// const sgMail = require('@sendgrid/mail');
// import sgMail from '@sendgrid/mail';
import type { RequestHandler } from './$types';
import {json} from '@sveltejs/kit';

// sgMail.setApiKey(SENDGRID_API_KEY)
export const POST: RequestHandler = async ({ request }) => {
  // try {
  //   const { email } = await request.json();
  //   const msg = {
  //       to: email, // Change to your recipient
  //       from: 'sumitkumar19016@gmail.com', // Change to your verified sender
  //       subject: 'Sending with SendGrid is Fun',
        
  //       // text: 'and easy to do anywhere, even with Node.js',
  //       // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  //     }
  //     sgMail
  //       .send(msg)
  //       .then(() => {
  //         console.log('Email sent')
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //       });
  //   return new Response(JSON.stringify({ success: true }), { status: 200 });
  // } catch (error) {
  //   console.error('Failed to send email:', error);
  //   return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  // }


  const apiKey = SENDGRID_API_KEY; // Use environment variables for security
  const url = "https://api.sendgrid.com/v3/mail/send";

  try {
      const { email } = await request.json(); // Expect email from the POST request payload

      const requestBody = {
          from: {
              email: "sumitkumar19016@gmail.com", // Replace with your "from" email
          },
          personalizations: [
              {
                  to: [
                      {
                          email: email, // Recipient's email
                      },
                  ],
                  dynamic_template_data: {
                      user_email: email, // Dynamic data for the placeholder
                  },
              },
          ],
          template_id: "d-773b2e16b3af492bb40556426308aeb9", // Replace with your template ID
      };

      const response = await fetch(url, {
          method: "POST",
          headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
      });

      if (response.ok) {
          return json({ message: "Email sent successfully!" });
      } else {
          const error = await response.json();
          console.error("SendGrid Error:", error);
          return json({ error: "Failed to send email", details: error }, { status: 500 });
      }
  } catch (error) {
      console.error("Server Error:", error);
      return json({ error: "Server error occurred", details: error.message }, { status: 500 });
  }
}
