import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAddBook=()=>{
    const [image_url,setimage]=useState("");
    const [title,settitle]=useState("");
    const [authors,setauthors]=useState("");
    const [description,setdescription]=useState("");
    const [price,setprice]=useState("");
    const [totalsells,settotalsells]=useState("");
    const navigate=useNavigate();

    const handlesubmit= async(e)=>{
        e.preventDefault();
        axios.post("url-of-post",{
            image_url,
            title,
            authors,
            description,
            price,
            totalsells
        }
        ).then(res=>console.log(res)).catch((error)=>
        {
            console.log(error);
        })
        return navigate("/Admins/Books/")
    }

    const handleimage=(e)=>{
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            console.log(reader.result);
            setimage(reader.result)
        }
        reader.onerror=error=>{
            console.log("error",error)
        }
    }

    return(
        <div>
            <form className="post">
                <div className="picture">
                    <label >image</label>
                    <input type="file" name="image_url" onChange={handleimage}></input>
                </div>
               <div className="content">
                <div className="title">
                    <label>Title</label>
                    <input className="title-input" type="text" name="title" placeholder="title" value={title} onChange={(e)=>settitle(e.target.value)}/>
                </div>
                <div className="author">
                    <label>Authors</label>
                    <input className="author-input" type="text" name="authors" placeholder="authors" value={authors} onChange={(e)=>setauthors(e.target.value)}/>
                </div>
                <div className="description">
                    <label>description</label> 
                    <input className="description-input" type="text" name="description"  placeholder="description" value={description} onChange={(e)=>setdescription(e.target.value)}/>
                </div>
                <div className="price">
                    <label>price</label>
                    <input className="price-input" type="Number" name="price" placeholder="price" value={price} onChange={(e)=>setprice(e.target.value)}/>
                </div>
                <div className="totalsells">
                    <label>totalsells</label>
                    <input className="totalsells-input" type="Number" name="totalsells" placeholder="totalsells" value={totalsells} onChange={(e)=>settotalsells(e.target.value)}/>
                </div>
               </div>
               <button onClick={handlesubmit} className="submit">Submit</button>
               
        </form>
        </div>
    )
}
export default AdminAddBook;