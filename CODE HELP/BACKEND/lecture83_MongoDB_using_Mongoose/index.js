const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.PORT;

app.use(express.json());

const connectDB = require('./db')
connectDB();

const users = require('./routes/users');
app.use('/api',users);

app.get('/',(req,res) => {
    console.log("Home page route handler");
    res.send("Welcome to mongodb and express")
})

app.listen(PORT, () => {
    console.log("Server is running");
})