import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgres:mysecretpassword@localhost:5432/postgres",
});
// async function createUsersTable() {
//   await client.connect();
//   const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
//   console.log(result);
// }
// createUsersTable();
//
async function insertData(username: string, email: string, password: string) {
  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    //     const insertQuery =
    //       "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    //    const result = await client.query(insertQuery);
    //
    //      *********************************************************************************
    //      but this is not the right way to insert user provided data ,  as this is not safe

    console.log("Insertion Success!!!");
  } catch (err) {
    console.error("Error during insertion, ", err);
  } finally {
    await client.end(); // Close the client connection
  }
}
// insertData("username5", "user5@example.com", "user_password").catch(
//   console.error
// );

async function getUser(email: string) {
  try {
    await client.connect();
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);
    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log("No user found with the given email.");
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error("Error during fetching user:", err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}
getUser("user5@example.com").catch(console.error);