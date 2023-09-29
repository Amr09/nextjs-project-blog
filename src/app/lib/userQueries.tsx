import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUserMessage(data: any) {
  const user = await prisma.user.create({
    data,
  });
}
