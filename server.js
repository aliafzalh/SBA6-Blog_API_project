const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const connectDB = require('./db');
const expressLayout = require('express-ejs-layouts')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Connect to mongoDB
connectDB();
app.use(express.static('public'))
app.use(express.json());
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');

// app.get(`/`, (req, res) => {
//     res.send(`Hello project api`)
// })

app.use(`/`, require('./routes/main'))

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})