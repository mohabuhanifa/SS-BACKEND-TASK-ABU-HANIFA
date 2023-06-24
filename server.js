const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const authRouter = require("./routes/authRoute");
const movieRouter = require("./routes/movieRoute");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//api routes
app.use("/api", authRouter);
app.use("/api/movies", movieRouter);

//MongoDB connection
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
