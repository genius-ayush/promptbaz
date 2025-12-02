// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("YourStrongPassword", 10);

  await prisma.admin.create({
    data: {
      email: "admin@promptbaz.com",
      name: "Admin User",
      password: hashedPassword,
    },
  });
}

main();
