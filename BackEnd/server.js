const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

dotenv.config();
connectDB();

app.use(express.json()); // Built-in middleware to parse JSON

const allowedOrigins = ["http://localhost:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("API is running"));

app.use(notFound, errorHandler);

app.listen(5000, console.log("server started on port 5000"));
