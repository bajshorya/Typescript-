import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      password: true,
    },
  });
  console.log(res);
}
// insertUser("shorya@baj.com", "pass", "Shorya", "Baj");
interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { username: username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}
updateUser("shorya@baj.com", {
  firstName: "shoryabaj",
  lastName: "Messi",
});
