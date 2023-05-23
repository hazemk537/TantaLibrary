import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import Head from "./Header"
import "./Home.css";
const Home=()=>{
    const [currnetForm, setCurrnetForm] = useState("");

    const toggleForm = (formName) => {
      setCurrnetForm(formName);
    };

    return(
      <div className="Home">
         <Head onFormSwitch={toggleForm} />
        {currnetForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )
        }
      </div>
    )
}
export default Home;