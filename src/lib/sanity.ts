import { createClient } from '@sanity/client';
import { z } from 'zod';
import imageUrlBuilder from '@sanity/image-url';
// export const sanityClient = createClient({
//     projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
//     dataset: import.meta.env.VITE_SANITY_DATASET,
//     apiVersion: '2023-05-03',
//     useCdn: true,
//     token: import.meta.env.VITE_SANITY_TOKEN
// });


export const sanityClient = createClient({
  projectId: "6s81p0fn",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  token:"skifuWfZ2BhsWweLQe3BTuBASzVLdAfJAHRDdw9CpRon9g0gkVxPFLq7b6Xl7AtK2kqLjHZ4yo7BztRjkSGXMVHsMUGrsw7s9oUOoMXXf15RqQRlV9feSjTS9y8XTkO3s4TTkjIdsAzPdENwiOp9HhV9MiB0JffakhEisr3RJHzbtc96RTql"
});

// Validation Schema matching Sanity document structure
export const contactFormSchema = z.object({
    first_name: z.string().min(2, { message: "First name must be at least 2 characters" }),
    last_name: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    phnoe_number: z.string()
        .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 
               { message: "Invalid phone number format" }),
    company_name: z.string().optional(),
    company_address: z.string().optional(),
    service_requested: z.enum(['us-north', 'us-south', 'us-east'], {
        errorMap: () => ({ message: "Please select a valid service area" })
    }),
    what_are_you_storing: z.string().min(1, { message: "Please specify what you are storing" }),
    pallets_number: z.number().positive({ message: "Number of pallets must be positive" }),
    average_wxlxh_of_pallets: z.string().optional(),
    total_weight: z.number().positive({ message: "Total weight must be positive" }),
    storage_start_date: z.date({message:"Please enter the start date"}),
    storage_end_date: z.date({message:"Please enter the end date"}),
    need_other_services: z.string().optional(),
    additional_info: z.string().optional()
}).refine(
  (data) => {
    // Check if both dates are present and storage_end_date >= storage_start_date
    console.log(typeof data.storage_end_date)
    if (data.storage_start_date && data.storage_end_date) {
      return data.storage_end_date >= data.storage_start_date;
    }
    return true; // If one of the dates is missing, no validation error
  },
  {
    message: "End date cannot be earlier than start date.",
    path: ["storage_end_date"], // This points the error to storage_end_date
  }
);

const builder = imageUrlBuilder(sanityClient);

// Helper function to generate image URL
export function urlFor(source) {
  return builder.image(source);
}