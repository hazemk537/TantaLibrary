import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookList from './Components/ShowBooks/BookList';
import BookDetails from './Components/ShowBooks/BookDetails';
import Home from "./Components/Home/Home"
import AdminBookList from './Components/ShowBooksAdmins/AdminBookList';
import AdminBooksDetails from './Components/ShowBooksAdmins/AdminBooksDetails';
import AdminEditBook from './Components/ShowBooksAdmins/AdminEditBook';
import AdminAddBook from './Components/ShowBooksAdmins/AdminAddBook';

function App() {
  return (
    <div className="App">

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<BookList/>}/>
      <Route path='/Books/:id' element={<BookDetails/>}/>
      <Route path="/Admins/Books" element={<AdminBookList/>}/>
      <Route path='/Admins/Books/:id' element={<AdminBooksDetails/>}/>
      <Route path="/Admins/Books/Edit/:id" element={<AdminEditBook/>}/>
      <Route path="/Admins/Books/Add" element={<AdminAddBook/>}/>
      </Routes>

    </div>
  );
}

export default App;
