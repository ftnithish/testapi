const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((conn) => {
      console.log('MongoDB connected to host: ' + conn.connection.host);
    })
    .catch((err) => {
      console.error('MongoDB connection error: ' + err.message);
      process.exit(1); 
    });
};

module.exports = connectDatabase;
