/**
 * Small Steps Backend Server
 * Initializes and starts the backend server, connecting all necessary middleware and routes.
 */

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');

// Import Routes
const userRoutes = require('./routes/userRoutes');
const habitRoutes = require('./routes/habitRoutes');
const guestRoutes = require('./routes/guestRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// API Routes
app.use('/api/users', userRoutes); // User-related routes
app.use('/api/habits', habitRoutes); // Habit-related routes
app.use('/api/guest', guestRoutes); // Guest mode routes

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
