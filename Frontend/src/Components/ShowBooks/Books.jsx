import {useNavigate } from "react-router-dom";
import "./BookList.css"
const Books=(props)=>{
    const navigate = useNavigate();

    return (
        <div key={props.books.id} className="book">
               <h3>{props.books.title}</h3>
               <img src={props.books.image_url} alt="#" onClick={()=>
                 navigate(`/Books/${props.books.id}`)
               }/>
        </div>
    )
}
export default Books;