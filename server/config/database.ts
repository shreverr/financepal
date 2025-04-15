import { drizzle } from 'drizzle-orm/neon-http';
import { AppError } from '../lib/appError';

const dbURL: string | undefined = process.env.DATABASE_URL

if (!dbURL) {
  throw new AppError(
    "DATABASE_URL error",
    500,
    "DATABASE_URL not provided",
    false
  )
}

const db = drizzle(dbURL);

export default db
