import { z } from 'zod';

const envSchema = z.object({
  MONGODB_URI: z.string().url(),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(60000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(10),
});

let env: z.infer<typeof envSchema>;

try {
  env = envSchema.parse({
    MONGODB_URI: process.env.MONGODB_URI,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
    RATE_LIMIT_WINDOW_MS: process.env.RATE_LIMIT_WINDOW_MS,
    RATE_LIMIT_MAX_REQUESTS: process.env.RATE_LIMIT_MAX_REQUESTS,
  });
} catch (error) {
  if (error instanceof z.ZodError) {
    const missing = error.issues.map((issue) => issue.path.join('.')).join(', ');
    console.error(`❌ Invalid environment variables: Missing or invalid keys: ${missing}`);
  } else {
    console.error('❌ Unknown error validating environment variables', error);
  }
  // Provide safe defaults so building/linting can succeed
  env = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Akshay-tech',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NODE_ENV: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
    RATE_LIMIT_WINDOW_MS: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60000,
    RATE_LIMIT_MAX_REQUESTS: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 10,
  };
}

export { env };

