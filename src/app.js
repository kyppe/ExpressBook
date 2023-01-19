import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import vars from "../config/var.js";
import connectToMongoDb from "./db.js";

import booksRouter from "./routes/book.js";

const app = express();
app.use(express.json());

app.use("/books", booksRouter);

app.listen(vars.port, () => {
  connectToMongoDb();
  console.log("staring server with port :", vars.port);
});
