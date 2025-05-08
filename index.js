require('dotenv').config();
const express = require('express');
const connectDB = require('./src/configs/db');
const cors = require('cors');
const userRoute = require('./src/routes/userRoute');
const articleRoute = require('./src/routes/articleRoute');
const commentRoute = require('./src/routes/commentRoute');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use("/api/article", articleRoute);
app.use("/api/comment", commentRoute);
app.use("/", (req, res) => {
  res.send(`${req.method} ${req.path} not found!`);
});

// Connect to DB first, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
