import { useEffect, useState } from "react";
import {useNavigate ,Link} from "react-router-dom";
import axios from "axios"
// import Books from "./Books";
import "../ShowBooks/BookList.css"
import "./ShowBooksAdmins.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AdminBookList (){
    const [books,setbooks]=useState([]);
    const [result,setresult]=useState([])
    const navigate = useNavigate();

    useEffect(()=>{
         fetchdata();
        },[]);

        const fetchdata=()=>
        {
           axios.get("http://localhost:3001/Books").then((res)=>{  //api for get all books
           setresult(res.data);
           setbooks(res.data);
           }).catch((error)=>{console.log(error);})
        }

        const handlechange=(event)=>{
            const res=result.filter(f=>f.title.toLowerCase().includes(event.target.value));
            setbooks(res);
        };
    

    // const handledelete=(id)=>{
    //     console.log("ahmed")
    //     alert("are you sure you want to delete it")
    //     fetch(`https://example-data.draftbit.com/books/${id}`,{
    //         method:"DELETE"
    //     }).then((result)=>{
    //          result.json().then((res)=>{
    //             setbooks(res);
    //             fetchdata();
    //         })
    //     })
    // };
    const handledelete=(id)=>{
        console.log("ahmed")
        alert("are you sure you want to delete it")
        axios.delete(`http://localhost:3001/Books/${id}`)
            .then((res)=>{
                fetchdata();
            })};
    
    

    return(
        <div>
            <Header/>
            <div className="main">
                <div className="container">
                    <div className="head">
                        <div>
                        <h1>find book </h1>
                        <input type="text" className="input-text" onChange={handlechange} placeholder="enter book"/>
                        </div>

                        <div className="add-book">
                            <h1>add book</h1>
                            <Link to={`/Admins/Books/Add/`}>
                                <button className="add">Add</button>
                            </Link>
                        </div>
                        
                    </div>

                    
                    <div className="AllBooks">
                        {books.map((book)=>(
                            <div key={book.id} className="book">
                            <h3>{book.title}</h3>
                            <img src={book.img} alt="#" onClick={()=>
                              navigate(`/Admins/Books/${book.id}`)
                            }/>

                            <div className="buttons">
                                <div>
                                <button className="delete-item" onClick={()=>handledelete(book.id)}>delete</button>
                                </div>

                                <div>
                                    <Link to={`/Admins/Books/Edit/${book.id}`} >
                                        <button className="edit-book">Edit</button>
                                    </Link>
                                </div>
                            </div>
                     </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AdminBookList;
