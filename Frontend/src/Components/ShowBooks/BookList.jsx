import { useEffect, useState } from "react";
import axios from "axios"
import Books from "./Books";
import "./BookList.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function BookList (){
    const [books,setbooks]=useState([]);
    const [result,setresult]=useState([])
    useEffect(()=>{
         const fetchdata=()=>
         {
            axios.get("http://localhost:3001/Books").then((res)=>{  //api for get all books
            setresult(res.data);
            setbooks(res.data);
            console.log(books);
            }).catch((error)=>{console.log(error);})
         }
         fetchdata();
        },[]);

    const handlechange=(event)=>{
        const res=result.filter(f=>f.title.toLowerCase().includes(event.target.value));
        setbooks(res);
        if(res===[])
        {
           <h1>no items found</h1>
        }
    };

    return(
        <div>
            <div className="main">
            <Header name="user"/>

                <div className="container">
                    <div className="head">
                        <h1>find your book here</h1>
                        <input type="text" className="input-text" onChange={handlechange} placeholder="enter book"/>
                    </div>
                    <div className="AllBooks">
                        {books.map((book)=>(
                            <Books key={book.id} books={book}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default BookList;
