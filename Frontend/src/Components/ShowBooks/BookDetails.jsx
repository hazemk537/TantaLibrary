import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails=()=>{
    const {id}=useParams();
    const [book,setbook]=useState([]);
    useEffect(()=>{
        axios.get(`https://example-data.draftbit.com/books/${id}`).then((res)=>{  //api for get a specific book
        setbook(res.data)
        }).catch((error)=>
        {
            console.log(error);
        });
    },[id]);
    return(
        <div>
            <div className="book-details">
                <div className="content">
                <img src={book.image_url} alt="#"/>
               <div className="details">
                    <h1>{book.title}</h1>
                    <h4>by {book.authors}</h4>
                    <p>{book.description}</p>
                    <span>"price $"</span>
                    <br/>
                    <span>"totalsells"</span>
               </div>
                </div>
               
        </div>
        </div>
    )
}
export default BookDetails;