const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`MongoDB connection error: ${err.message}`);
      process.exit(1); // shut down server if DB fails
    });
};

module.exports = connectDatabase;
