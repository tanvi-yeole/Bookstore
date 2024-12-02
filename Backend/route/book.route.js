import express from "express";
import{getBook} from "../controller/controller.book.js";

const router = express.Router();
router.get("/", getBook);

export default router;