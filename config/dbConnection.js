import "dotenv/config";
import pg from "pg";

const { Client } = pg;

export const config = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
};

let client;

export default async function connectToDatabase() {
  if (!client) {
    client = new Client(config);
    try {
      await client.connect();
      console.log("Connected to the database successfully.");
    } catch (error) {
      await client.end();
      console.log("disconnected to the database");
      console.error("Error connecting to the database:", error);
      process.exit(1); // Exit the process if the connection fails
    }
  }

  return client; // Return the client instance for reuse
}

//Testing for database connection.
// const result = await client.query("SELECT current_database()");
// console.log(`The database name is : ${result.rows[0].current_database}`);
