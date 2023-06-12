const { default: mongoose } = require("mongoose")
const Book = require("../model/Book")
const Joi = require('joi');
const { request } = require("express");


const getAllBooks =  async (req,res,next)=>{
    let books
    try{
         books =await Book.find();
         console.log(books);
    }
    catch(err){
        console.log(`No ${bookid} Books are found`) 
    }
    if(books) res.status(200).send(books);
    else  res.status(400).json({message:"No books are displayed"})
}

const homePage =  (req,res,next)=>{
    res.send("HomePage")    
}

const addNewBook=async (req,res,next)=>{
    
  let book 

    try {
       const  {name,description,authors,price,img,totalSells}=req.body
       book=new Book({
        title: title,
        description: description,
        authors: authors,
        price: price,
        img: "www.google.com",
        totalSells: totalSells
      })
      book =await book.save();

      const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        authors: Joi.string().required(),
        price: Joi.number().required(),
        img: Joi.string().required(),
        totalSells: Joi.number().required()
      });
      if (error) {
      console.error(error.details[0].message);
      return res.status(400).json({ error: error.details[0].message });
    const { error, value } = schema.validate(req.body);
    }
    }
    catch(err){
        if(err) return res.status(400).json({message:'error happened'})

    } 
    return res.status(200).json(book) 

}




const updateBookById=async (req,res,next)=>{
    const bookId=req.params.id
    const BookUi = await Book.findOne({id:bookId});
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        authors: Joi.string().required(),
        price: Joi.number().required(),
        totalSells: Joi.number().required()
      });
      const { error, value } = schema.validate(req.body);
  
      if (error) {
        console.error(error.details[0].message);
        return res.status(400).json({ error: error.details[0].message });
      }

    const neWBookValue=
        {title: req.body.title,
         description: req.body.description,
         authors: req.body.authors,
         price: req.body.price,
         img:BookUi.img,
         totalSells :req.body.totalSells,
         }

    let book
    try{
      console.log(neWBookValue);
         book = await Book.updateOne({id:bookId},neWBookValue);
         res.status(200).send(book); 
        book=  await book.save();
    }
    catch(err){
        console.log(`Book ${bookId} not updated`)
        return  res.status(400).json({message:"error"})
    }
    /*const book = await Book.findByIdAndRemove(bookId);*/
}
const deleteBookById=async (req,res,next)=>{
    const bookId=req.params.id
    let book;
    try {
        book = await Book.findOne({id:bookId});
        if (book) {
          await book.deleteOne({id:bookId});
          return res.status(200).send(book);
        } else {
          return res.status(404).json({ message: "Book not found" });
        }
      } catch (err) {
        console.log(`Book ${bookId} not removed`);
        return res.status(400).json({ message: "error" });
      }
}


const getBookById=async (req,res)=>{
    const bookId=req.params.id
    let book
    try{
         book = await Book.findOne({id:bookId});
         console.log(book);
    }
    catch(err){
        console.log(`Book ${bookId} not found`)
    }
    if(book) res.status(200).send(book);
    else  res.status(400).json({message:"book not found"})

}

exports.homePage=homePage
exports.getAllBooks=getAllBooks
exports.addNewBook = addNewBook;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;
exports.deleteBookById = deleteBookById;