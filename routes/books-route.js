const express = require("express");
const booksController =require("../controller/booksController")
const router =express.Router()




router.get("/",booksController.homePage)//
router.get("/books",booksController.getAllBooks)//
router.get("/api/:id",booksController.getBookById)//
router.post("/api/newbook",booksController.addNewBook)//
router.put("/api/:id",booksController.updateBookById)//
router.delete("/api/:id",booksController.deleteBookById)//

module.exports = router