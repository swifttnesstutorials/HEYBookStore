import express from "express";
const router = express.Router();
import  validateBook  from "../middlewares/validateBook.js";
import {
    createBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook
} from "../controllers/booksController.js";


router.post("/", validateBook, createBook);

router.get("/", getAllBooks);

router.get("/:id", getOneBook);

router.put("/:id", validateBook, updateBook);

router.delete("/:id", deleteBook);

export default router;