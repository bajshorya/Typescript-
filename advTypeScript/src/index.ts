interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  id: string;
}

//''''''''''''''''''''''' Pick & Partial''''''''''''''''''''''''//
type UpdateProps = Pick<User, "name" | "age" | "email">;
type UpdatePropsOptional = Partial<UpdateProps>; //allows us to partially select props from USER
function updateUser(updatedProps: UpdatePropsOptional) {
  //hit the backend to connect to update the user
}
//''''''''''''''''''''''''ReadOnly'''''''''''''''''''''''''''//

type User1 = {
  readonly name: string;
  readonly age: number;
};
const user: User1 = {
  name: "Messi",
  age: 37,
};

// user.age=22; cannot do this because its assigned readonly
//can also do this
// type User1 = {
//    name: string;
//    age: number;
// };
// const user: Readonly User1 = {
//   name: "Messi",
//   age: 37,
// };
