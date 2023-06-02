const express = require("express");
const booksController =require("../controller/booksController")
const router =express.Router()




router.get("/",booksController.homePage)//
router.get("/Books",booksController.getAllBooks)//
router.get("/Books/:id",booksController.getBookById)//
router.post("/Books/newbook",booksController.addNewBook)//
router.put("/Books/:id",booksController.updateBookById)//
router.delete("/Books/:id",booksController.deleteBookById)//

module.exports = router