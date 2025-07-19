import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email('Invalid email'),
  password: z.string().min(8, 'Invalid password')
});

export type LoginSchema = z.output<typeof loginSchema>;
