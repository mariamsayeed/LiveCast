const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors=require('cors');
const userRouter =require('./routes/auth')


dotenv.config();
const app = express();
const allowedOrigins = [
  "https://twitter-anurag.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        // Allow requests with a matching origin or for requests with no origin (e.g., same-origin requests)
        callback(null, true);
      } else {
        // Deny requests from other origins
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("DB CONNECTED");
    })
    .catch((error) => {
      console.log(error);
    });
};
app.use(express.json());

app.use('/api',userRouter);
  app.listen(process.env.PORT, () => {
    connect();
    console.log(`Server is running on port ${process.env.PORT}`);
  });