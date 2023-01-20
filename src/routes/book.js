import express from "express";
import booksControllers from "../controllers/book.js";
const router = express.Router();
router.get("/", booksControllers.getAllBooks);
router.post("/", booksControllers.addBook);
router.get("/:id", booksControllers.getBookById);
router.delete("/:id",booksControllers.deleteBook);
router.put("/:id",booksControllers.UpdateBook)
export default router;
