import bcrypt from "bcrypt";
import prisma from "../src/config/prisma.js";
import { $Enums } from "../src/generated/client.js";

async function main() {

  const password = await bcrypt.hash(
    "admin123",
    12
  );

  const isAdminExists = await prisma.user.findUnique(
    {
      where: {
        email: "admin@jumca.com"
      }
    }
  );

  if (isAdminExists) {
    console.log("Administrator user already exists.");
    return;
  }

  await prisma.user.create({

    data: {

      fullName: "Administrator",

      email: "admin@jumca.com",

      rollNumber: "ADMIN",

      password,

      role: $Enums.Role.ADMIN,

      batch: "N/A"

    }

  });

}

main();
