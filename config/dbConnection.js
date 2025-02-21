// import "dotenv/config";
// import pg from "pg";
// const { Pool } = pg;
// // import pg from "pg";

// // const { Client } = pg;

// // export const client = {
// //   host: process.env.PGHOST,
// //   port: process.env.PGPORT,
// //   user: process.env.PGUSER,
// //   password: process.env.PGPASSWORD,
// //   database: process.env.PGDATABASE,
// // };

// export const pool = new Pool({
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   database: process.env.PGDATABASE,
// });

// export const connectDb = async () => {
//   try {
//     await pool.connect();
//     console.log("Connected to PostgreSQL database");
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   }
// };

// export default async function connectToDatabase() {

//     try {
//       const client = new Client({

//       })
//       await client.connect();
//       console.log("Connected to the database successfully.");
//     } catch (error) {
//       await client.end();
//       console.log("disconnected to the database");
//       console.error("Error connecting to the database:", error);
//       process.exit(1); // Exit the process if the connection fails
//     }

//   return client; // Return the client instance for reuse
// }

//Testing for database connection.
// const result = await client.query("SELECT current_database()");
// console.log(`The database name is : ${result.rows[0].current_database}`);

//neon serverless connection

import { Pool } from "@neondatabase/serverless";

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const connectDb = async () => {
  try {
    await pool.connect();
    console.log("Connected to  database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

// const posts = await pool.query("SELECT * FROM posts WHERE id =$1", [postId]);
// pool.end();
