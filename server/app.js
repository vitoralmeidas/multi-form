const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./DB/connect");
const usersRouter = require("./routes/users");
require("dotenv").config();
// async errors handler
require("express-async-error");

app.get("/", (req, res) => {
  res.send("<h1>MULTI-FORM-API</h1>");
});

//middlewares
// deal with posts and put requests
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", usersRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening on ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
