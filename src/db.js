import mongoose from "mongoose";
import vars from "../config/var.js";

function connectToMongoDb() {
  mongoose.connect(vars.urlDB);
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.error("server open url : ", vars.urlDB));
  return db;
}

export default connectToMongoDb;
