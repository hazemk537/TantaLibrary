const { default: mongoose } = require("mongoose")
const Book = require("../model/Book")
const Joi = require('joi');




const getAllBooks =  async (req,res,next)=>{
    let books

    try{

         books =await Book.find()
         console.log("d")


    }
    catch(err){
        console.log(`No ${bookid} Books are found`) 


    }


    if(books) res.status(200).json({books})
    else  res.status(400).json({message:"No books are displayed"})
    
}

const homePage =  (req,res,next)=>{

    res.send("HomePage")
        
    
}

const addNewBook=async (req,res,next)=>{
    let book 
    
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      author: Joi.string().required(),
      price: Joi.number().required(),
      img: Joi.string().required(),
      totalSells: Joi.number().required()
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      console.error(error.details[0].message);
      return res.status(400).json({ error: error.details[0].message });
    }
    

    try {
       const  {name,description,author,price,img,totalSells}=req.body
       book=new Book({
        name: name,
        description: description,
        author: author,
        price: price,
        img: img,
        totalSells: totalSells
      })
      await book.save()
    }
    catch(err){
        if(err) return res.status(400).json({message:'error happened'})

    } 
    return res.status(200).json(book) 

}




const updateBookById=async (req,res,next)=>{


    const bookId=req.params.id
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        author: Joi.string().required(),
        price: Joi.number().required(),
        img: Joi.string().required(),
        totalSells: Joi.number().required()
      });
  
      const { error, value } = schema.validate(req.body);
  
      if (error) {
        console.error(error.details[0].message);
        return res.status(400).json({ error: error.details[0].message });
      }

    const neWBookValue=

        {name: req.body.name,
         description: req.body.description,
         author: req.body.author,
         price: req.body.price,
         img:req.body.img,
         totalSells :req.body.totalSells
         }

    let book
    try{
         book = await Book.findByIdAndUpdate(bookId,neWBookValue,{ new: true }) 
         await book.save()
    }

    catch(err){
        console.log(`Book ${bookid} not updated`)
        return  res.status(400).json({message:"error"})

    }

 return  res.status(200).json(book)



    
}
const deleteBookById=async (req,res,next)=>{
    const bookId=req.params.id

    try {
        const book = await Book.findByIdAndRemove(bookId);
        if (book) {
          return res.status(200).json(book);
        } else {
          return res.status(404).json({ message: "Book not found" });
        }
      } catch (err) {
        console.log(`Book ${bookid} not removed`);
        return res.status(400).json({ message: "error" });
      }
    
}


const getBookById=async (req,res)=>{
    const bookId=req.params.id
   

    let book
    try{
         book = await Book.findById(bookId)


    }

    catch(err){
        console.log(`Book ${bookId} not found`)
    }

    if(book) res.status(200).json(book)
    else  res.status(400).json({message:"book not found"})


  



}

exports.homePage=homePage
exports.getAllBooks=getAllBooks
exports.addNewBook = addNewBook;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;
exports.deleteBookById = deleteBookById;