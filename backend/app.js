const express = require("express")
const mongoose =require("mongoose");
const router = require("./routes/books-route");
const app=express()

//routes
app.use(express.json());

app.use("/",router)

//database connection
mongoose.connect("mongodb://127.0.0.1:27017/Book_Store")
.then(()=> console.log("connectd"))
.catch((err)=>console.log(err))

// app.get("/",(req,res)=>{
//     res.send("hello world");
// })

app.listen(3001,()=>
    console.log("listening"));


// // Middlewares
const cors = require('cors')
app.use(cors());


// app.use("/books", router); // localhost:5000/book
