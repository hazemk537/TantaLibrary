import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import Head from "./Header";

function App() {
  const [currnetForm, setCurrnetForm] = useState("");
  const toggleForm = (formName) => {
    setCurrnetForm(formName);
  };
  return (
    <div className="App">
      <Head onFormSwitch={toggleForm} />
      {currnetForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
