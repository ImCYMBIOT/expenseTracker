// const express = require("express"); // import express from "express";
// const cors = require("cors"); // import cors from "cors";
// const router = express.Router(); // import { Router } from "express";
const db = require("./db/db"); // import db from "./db/db";
// const transactions = require("./routes/transactions"); // import transactions from "./routes/transactions";
// const {readdirSync} = require("fs"); // import { readdirSync } from "fs";

const express = require('express')
const cors = require('cors');
// const { db } = require('./db/db');
const {readdirSync} = require('fs')


require("dotenv").config(); // import dotenv from "dotenv";


const PORT = process.env.PORT;
const app = express();
// middlewares
app.use(express.json());
app.use(cors());

// routes
readdirSync("./routes").map((route) => app.use("/api/v1", require(`./routes/${route}`)));

app.get("/", (req, res) => {
    res.send("Hello World");
    });

const server = () => {
    db();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}; 
server(); 
