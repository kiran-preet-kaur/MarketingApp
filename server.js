const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to DB
connectDB();

// app.get('/', (req, res) => {
//   res.json({ "msg": "Welcome to my shopping App" });
// })

// Init Middleware to read request body
app.use(express.json({ extended: false }))

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/login'));
app.use('/api/mail', require('./routes/mail'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });