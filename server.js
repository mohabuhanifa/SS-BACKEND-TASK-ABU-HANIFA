const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const authRouter = require("./routes/authRoute");
require("dotenv").config();
const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


//api routes
app.use("/api", authRouter);

//MongoDB connection
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
