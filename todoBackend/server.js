const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const routers = require("./routes/todo");
const dotenv= require("dotenv");
const cors=require("cors")

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const allowedOrigins = [
  "http://localhost:5173",
  "https://todocic.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow Postman or server-to-server requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use("/todo", routers);


app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
