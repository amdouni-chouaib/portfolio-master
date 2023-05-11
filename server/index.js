const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./router/authRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

// Connect to database
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to database!');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`Error connecting to database: ${error}`);
  });
app.use(cors());

// Parse request body
app.use(express.json());

// Routes
app.use('/', authRoutes);

// Start the server

