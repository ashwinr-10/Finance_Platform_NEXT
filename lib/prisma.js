import { PrismaClient } from '../lib/generated/prisma';

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

// ../lib/generated/prisma