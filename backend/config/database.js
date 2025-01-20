// Importing the mysql2 package for database connection
const mysql = require('mysql2');

// Create a connection to the database using environment variables
const connection = mysql.createConnection({
    host: process.env.DB_HOST,    // Database host (e.g., 'localhost' or a cloud host)
    user: process.env.DB_USER,    // Database username (e.g., 'root')
    password: process.env.DB_PASSWORD, // Database password (e.g., 'password123')
    database: process.env.DB_NAME // The name of the database (e.g., 'small-steps')
});

// Establish the connection and log an error if it fails
connection.connect((err) => {
    if (err) {
	// Log the error if the connection fails
	console.error('Error connecting to the database: ' + err.stack);
	return;
    }
    // If connected, log the connection thread id
    console.log('Connected to the database as id ' + connection.threadId);
});

// Export the connection object so it can be used elsewhere in the backend
module.exports = connection;
