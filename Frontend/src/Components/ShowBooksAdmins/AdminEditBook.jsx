import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ShowBooksAdmins.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AdminEditBook=()=>{

    const {id}=useParams();
    const [book,setbook]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3001/Books/${id}`).then((res)=>{  //api for get a specific book
        setbook(res.data)
        }).catch((error)=>
        {
            console.log(error);
        });
    },[id]);


    const handlechange=(e)=>{
        const item={...book}
        item[e.target.name]=e.target.value;
        setbook(item)
        console.log(book);
    }

    const handlesubmit= (e)=>{
        e.preventDefault();
        console.log(book);
        axios.put(`http://localhost:3001/Books/${id}`,book).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
        
        return navigate("/Admins/Books/")
    }
    return(
            <div className="put">
        <Header/>
                <div className="container">
                    <div className="picture">
                        <img src={book.img} alt="#"/>
                    </div>
                <div className="content">
                    <div className="form">
                        <label>Title</label>
                        <input className="title-input familar" type="text" name="title" value={book.title} onChange={handlechange}/>
                    </div>
                    <div className="form">
                        <label>Authors</label>
                        <input className="author-input familar" type="text" name="authors" value={book.authors} onChange={handlechange}/>
                    </div>
                    <div className="form">
                        <label>description</label>
                        <input className="description-input familar" type="text" name="description" value={book.description} onChange={handlechange}/>
                    </div>
                    <div className="form">
                        <label>price</label>
                        <input className="price-input familar" type="Number" name="price" value={book.price} onChange={handlechange}/>
                    </div>
                    <div className="form">
                        <label>totalsells</label>
                        <input className="totalsells-input familar" type="Number" name="totalsells" value={book.totalSells} onChange={handlechange}/>
                    </div>
                    <div>
                        <button onClick={handlesubmit} className="submit">Submit</button>
                    </div>

                </div>
                
               </div>
               <Footer/>
               
        </div>
    )
}
export default AdminEditBook;