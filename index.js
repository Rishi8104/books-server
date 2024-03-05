import express from "express";
import cors from 'cors';
import BookRouter from "./SRC/Router/BookRouter.js";
import connectDB from "./SRC/Config/config.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use(BookRouter);

app.get("/", (req, res) => {
    res.json("Hello this is Sql server db connection")
})

app.listen(8800,() => {
    console.log("Connect to backend !!!!!");
    connectDB;
})