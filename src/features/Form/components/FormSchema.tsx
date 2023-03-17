import * as z from 'zod';

export const formSchema = z.object({
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(50, "Subject can't be longer than 50 characters.")
    .nonempty(),
  email: z.string().email('Email must be in a valid form').nonempty(),
  message: z
    .string()
    .min(5, 'Message must be at least 5 characters')
    .max(500, "Message can't be longer than 500 characters.")
    .nonempty(),
});
export type FormSchemaType = z.infer<typeof formSchema>;
