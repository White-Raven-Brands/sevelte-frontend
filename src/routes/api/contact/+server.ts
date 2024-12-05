import type { RequestHandler } from './$types';
import { sanityClient, contactFormSchema } from '$lib/sanity';
import { z } from 'zod';

export const POST: RequestHandler = async ({ request }) => {
    try {
        // Parse and validate incoming data
        const data = await request.json();
        const processedFormData = {
            ...data,
            storage_start_date: data.storage_start_date
              ? new Date(data.storage_start_date)
              : undefined,
            storage_end_date: data.storage_end_date
              ? new Date(data.storage_end_date)
              : undefined,
          };
        const validatedData = contactFormSchema.parse(processedFormData);

        // Prepare document for Sanity
        const document = {
            _type: 'contact-us',
            ...validatedData
        };

        // Create document in Sanity
        const result = await sanityClient.create(document);

        return new Response(JSON.stringify({
            success: true,
            id: result._id
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Submission error:', error);

        // Handle validation or submission errors
        return new Response(JSON.stringify({
            success: false,
            error: error instanceof z.ZodError 
                ? error.errors.map(e => e.message).join(', ')
                : 'Submission failed'
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

