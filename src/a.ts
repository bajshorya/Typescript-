function greet(firstname: string) {
  console.log("Hello" + firstname);
}
//type infrence : the function automatically guesses what tyoe is being returned
function add(a: number, b: number): number {
  //function add(a: number, b: number) {
  return a + b;
}
greet("Harkirat ");
//this is how you give type to a function example : callback function
function runAfter1sec(fn: () => void) {
  setTimeout(fn, 1000);
}
runAfter1sec(function () {
  console.log("hi there");
});

//interface
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}
const e = new Employee("shorya", 20);
console.log(e.greet("hi there!"));

//************* interfaces can be implemented as classes but types can't **************//

// Type

type user = {
  firstName: string;
  lastName: string;
  age: number;
};

//extar things type provides
//unions
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

//intersections
type Employee2 = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee2 & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer",
};
