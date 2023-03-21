import * as z from 'zod';

export const askMentorFormSchema = z.object({
  question: z
    .string()
    .min(5, 'Question must be at least 5 characters')
    .max(500, "Question can't be longer than 500 characters.")
    .nonempty(),
});

export type AskMentorFormSchemaType = z.infer<typeof askMentorFormSchema>;
