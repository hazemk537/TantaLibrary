import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import Head from "./Header";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookList from './Components/ShowBooks/BookList';
import BookDetails from './Components/ShowBooks/BookDetails';
import Home from "./Components/Home/Home"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AdminBookList from './Components/ShowBooksAdmins/AdminBookList';
import AdminBooksDetails from './Components/ShowBooksAdmins/AdminBooksDetails';
import AdminEditBook from './Components/ShowBooksAdmins/AdminEditBook';
import AdminAddBook from './Components/ShowBooksAdmins/AdminAddBook';

function App() {
  const [currnetForm, setCurrnetForm] = useState("");
  const toggleForm = (formName) => {
    setCurrnetForm(formName);
  };
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Books' element={<BookList/>}/>
      <Route path='/Books/:id' element={<BookDetails/>}/>
      <Route path="/Admins/Books" element={<AdminBookList/>}/>
      <Route path='/Admins/Books/:id' element={<AdminBooksDetails/>}/>
      <Route path="/Admins/Books/Edit/:id" element={<AdminEditBook/>}/>
      <Route path="/Admins/Books/Add" element={<AdminAddBook/>}/>
      </Routes>
      <Footer/>
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
