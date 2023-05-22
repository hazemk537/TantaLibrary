import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ShowBooksAdmins.css"

const AdminEditBook=()=>{

    const {id}=useParams();
    const [book,setbook]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`https://example-data.draftbit.com/books/${id}`).then((res)=>{  //api for get a specific book
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
    }

    const handlesubmit= async(e)=>{
        e.preventDefault();
        axios.put(`https://example-data.draftbit.com/books/${id}`,book);
        return navigate("/Admins/Books/")
    }
    return(
        <div>
            <div className="put">
                <div className="container">
                <div className="picture">
                    <img src={book.image_url} alt="#"/>
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
                    <input className="price-input familar" type="Number" name="price" value={33} onChange={handlechange}/>
                </div>
                <div className="form">
                    <label>totalsells</label>
                    <input className="totalsells-input familar" type="Number" name="totalsells" value={33} onChange={handlechange}/>
                </div>
                <div>
                    <button onClick={handlesubmit} className="submit">Submit</button>
                </div>

                </div>
                
               </div>
               
        </div>
        </div>
    )
}
export default AdminEditBook;