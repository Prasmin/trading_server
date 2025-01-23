import express from "express";
import "dotenv/config";

import { connectDb } from "./config/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";

import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  res.send({ message: "Hello from the backend!" });
});

//connect to the database
connectDb();

// Middleware
app.use(cors());
app.use(express.json());

//error handling
app.use(errorHandling);

//routes
app.use("/api", userRoutes);

// Start the server
// (async () => {
//   try {
//     await connectToDatabase();
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });
//   } catch (err) {
//     console.error("Failed to start the server:", err);
//     process.exit(1);
//   }
// })();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
