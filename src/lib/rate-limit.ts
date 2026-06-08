import { env } from './env';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

// Clean memory periodically
setInterval(() => {
  const now = Date.now();
  for (const ip in store) {
    if (now > store[ip].resetTime) {
      delete store[ip];
    }
  }
}, 300000); // run every 5 minutes

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = env.RATE_LIMIT_WINDOW_MS;
  const maxRequests = env.RATE_LIMIT_MAX_REQUESTS;

  if (!store[ip]) {
    store[ip] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return false;
  }

  const clientData = store[ip];

  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + windowMs;
    return false;
  }

  clientData.count += 1;
  return clientData.count > maxRequests;
}
