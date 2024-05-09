import { z } from 'zod';
import { emailRegex } from '@/helpers/regex';

export const user = z.object({
    name: z.string().min(1, 'required').max(255, 'Name must be less than 256 characters'),
    password: z.string().min(1, 'required').max(255, 'Password must be less than 256 characters'),
    confirmPassword: z.string().min(1, 'required').max(255, 'Confirm password must be less than 256 characters'),
    email: z.string().email('required').regex(emailRegex, 'Invalid email format').max(255, 'Email must be less than 256 characters'),
  }).superRefine((schema, ctx) => {
    if(schema.password !== schema.confirmPassword){
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passwords do not match",
            path: ["password"]
        });
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passwords do not match",
            path: ["confirmPassword"]
        })
    }
  })

export type User = z.infer<typeof user>;

