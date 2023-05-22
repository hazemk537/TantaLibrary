import { useEffect, useState } from "react";
import axios from "axios"
import Books from "./Books";
import "./BookList.css"
function BookList (){
    const [books,setbooks]=useState([]);
    const [result,setresult]=useState([])
    useEffect(()=>{
         const fetchdata=()=>
         {
            axios.get("https://example-data.draftbit.com/books").then((res)=>{  //api for get all books
            setresult(res.data);
            setbooks(res.data);
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
                <div className="container">
                    <div className="header">
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
        </div>
    )
}
export default BookList;
