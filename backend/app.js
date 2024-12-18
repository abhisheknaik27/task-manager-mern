const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const userApi = require('./routes/user');
const taskApi = require('./routes/task');
app.use(express.json());

app.use(cors());
const connectMongoose = require('./connection');
connectMongoose();

// app.use('/', (req, res) => {
//     res.send('hello from backend');
// });

app.use('/api/v1', userApi);
app.use('/api/v2', taskApi);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));