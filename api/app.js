require('dotenv').config()
const express = require("express");
const app = express();
const connectDB = require('./db');
const userRouter = require('./routes/User.route.js');
const authRouter = require('./routes/auth.routes.js')


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express Backend!");
});

app.use("/user", userRouter)
app.use("/auth", authRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


connectDB()