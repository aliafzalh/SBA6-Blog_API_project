const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Connect to mongoDB
connectDB();
app.use(express.json());

app.get(`/`, (req, res) => {
    res.send(`Hello project api`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})