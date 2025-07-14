const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
const propertyRoutes = require("./Routes/propertyRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // Built-in middleware to parse JSON

const allowedOrigins = [
  "http://localhost:5173",
  "https://millow-frontend.onrender.com",
];

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
app.use("/properties", propertyRoutes);

app.get("/", (req, res) => res.send("API is running"));

app.use(notFound);
app.use(errorHandler);

const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "dist")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname1, "dist", "index.html"))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
