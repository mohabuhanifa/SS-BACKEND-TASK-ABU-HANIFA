const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

connectDB();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})