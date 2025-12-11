import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return new Response("User already exists", { status: 400 });
  }

  const hashed = await hash(password, 10);

  await prisma.user.create({
    data: { name, email, password: hashed },
  });

  return new Response("Signup successful", { status: 200 });
}
