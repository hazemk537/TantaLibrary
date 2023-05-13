const express = require("express")
const mongoose =require("mongoose");
const router = require("./routes/books-route");
const app=express()


//moddleWare
app.use(express.json());

app.use("/",router)


// // Middlewares
// app.use(cors());
// app.use("/books", router); // localhost:5000/books


mongoose.connect("mongodb+srv://AdminLibrary:muHN44RyYDA4arfc@cluster0.rmoc8zo.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{app.listen(3000)})
.then(()=> console.log("connectd"))
.catch((err)=>console.log(err))


