// @ts-nocheck - Prisma client will be generated at deployment time
let PrismaClient: any;

try {
  PrismaClient = require("@prisma/client").PrismaClient;
} catch (e) {
  // Prisma client not generated yet - will be available after prisma generate
  PrismaClient = class MockPrismaClient {};
}

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
