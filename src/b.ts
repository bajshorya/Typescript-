interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; //optional string ?:
}
function isLegal(user: User): boolean {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}
const user: User = {
  firstName: "shorya",
  lastName: "baj",
  age: 20,
};
function greetUser(user: User) {
  console.log("hi there " + user.firstName);
}
const legalStatus = isLegal(user);
console.log(`Is the user legal? ${legalStatus}`);

greetUser(user);
