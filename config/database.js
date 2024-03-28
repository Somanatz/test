require('dotenv').config();
const { Sequelize } = require('sequelize');

const connectionUrl = process.env.DATABASE_URL; // Get the connection URL from environment variables

const sequelize = new Sequelize(connectionUrl, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true, // Enable SSL connection
            rejectUnauthorized: false // Disable SSL certificate validation (adjust based on your setup)
        }
    }
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;
