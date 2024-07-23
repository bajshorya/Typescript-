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
