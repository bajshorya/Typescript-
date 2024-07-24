import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
      email,
    },
  });
  console.log(res);
}
insertUser("b", "b", "b", "b", "b");
