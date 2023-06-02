import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

const BookDetails=()=>{
    const {id}=useParams();
    const [book,setbook]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/Books/${id}`).then((res)=>{  //api for get a specific book
        setbook(res.data)
        }).catch((error)=>
        {
            console.log(error);
        });
    },[id]);
    return(
        <div>
            <Header/>
            <div className="book-details">
                <div className="content">
                <img src={book.img} alt="#"/>
               <div className="details">
                    <h1>{book.title}</h1>
                    {/* <h4>by {book.authors}</h4> */}
                    <p>{book.description}</p>
                    <span>price :{book.price} $</span>
                    <br/>
                    <span>totalSells: {book.totalSells}</span>
               </div>
                </div>
               
        </div>
        <Footer/>
        </div>
    )
}
export default BookDetails;