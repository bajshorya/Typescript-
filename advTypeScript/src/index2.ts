// '''''''''''''''''''Records and Maps'''''''''''''''''''''''//
interface UserData {
  id: string;
  name: string;
}

type Users = Record<string, UserData>;
//cleaner way to define objects(key and value type)
const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }

//'''''''''''''''''''''''Map''''''''''''''''''''''//
// another cleaner syntax to get key value pairs
// a JS concept (works with javascript)
const User = new Map();
User.set("baj@1", { name: "Sam", age: 21, email: "sam@gmail.com" });
User.set("john@1", { name: "John", age: 21, email: "john@gmail.com" });

const singleUser = User.get("baj@1");
console.log(singleUser);

// ''''''''''''''''''''Exclude ''''''''''''''''''''''''//
//opposite of Pick 
type EventType = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventType, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK
