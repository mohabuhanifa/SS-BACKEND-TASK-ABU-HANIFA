const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const registerRouter = require('./routes/registerRoute');
const loginRouter = require('./routes/logInRoutes');
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/register', registerRouter);
app.use('/login', loginRouter);

//MongoDB connection
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})