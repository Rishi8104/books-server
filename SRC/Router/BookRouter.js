import express from "express";
import { DelateBookbyId, FeatchAllBooks, SaveBooks, UpdateBookById } from "../controller/BookController.js";

const BookRouter= express.Router();


BookRouter.get('/Books/all' ,FeatchAllBooks);
BookRouter.post("/Books",SaveBooks);
BookRouter.delete("/Books/:id",DelateBookbyId);
BookRouter.put("/Books/:id",UpdateBookById)

export default BookRouter;