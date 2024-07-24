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
// insertUser("b", "b", "b", "b", "b");

async function getTodos(userId: number) {
  //   await prisma.todo.create({
  //     data: {
  //       title: "learnprisma",
  //       description: "prisma",
  //       userId: 1,
  //     },
  //   });
  const res = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      User: true,
    },
  });
  console.log(res);
}
getTodos(1);
