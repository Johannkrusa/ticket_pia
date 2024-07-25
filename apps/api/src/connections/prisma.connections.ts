import { PrismaClient, TicketType } from "@prisma/client";

// Initialize Prisma Client
export const prisma = new PrismaClient();

// Export TicketType enum for usage in other parts of your application
export { TicketType };
