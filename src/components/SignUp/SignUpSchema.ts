import { z } from 'zod';
import { emailRegex } from '@/helpers/regex';

export const user = z.object({
  username: z.string().max(255),
  password: z.string().max(255),
  confirmPassword: z.string().max(255),
  email: z.string().max(255).regex(emailRegex, { message: 'Invalid email address' }),
  birthDate: z.date(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
});

export type User = z.infer<typeof user>;

