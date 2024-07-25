const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const exampleRoutes = require('./routes/exampleRoute');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/examples', exampleRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/skillminds', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
