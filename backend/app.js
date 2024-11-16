const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const connectMongoose = require('./connection');

app.use(cors());

connectMongoose();

app.use('/', (req, res) => {
    res.send('hello from backend');
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));