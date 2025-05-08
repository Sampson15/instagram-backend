const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

module.exports = function connectDB() {
  return mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
      console.error('❗ MongoDB connection error:', err);
      process.exit(1);
    });
};
