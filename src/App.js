import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './Components/Booklist';
import BookDetails from './Components/Bookdetails';
import BookForm from './Components/Bookform';
import '../src/App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [nextId, setNextId] = useState(4);

  useEffect(() => {
    import('../src/Data/Books.json').then((data) => setBooks(data.books));
  }, []);

  const handleAddBook = (newBook) => {
    newBook.id = nextId;
    setBooks([...books, newBook]);
    setNextId(nextId + 1);
  };

  const handleUpdateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <Router>
      <div>
        <h1 style={{ color: "#ea2525" }}>Book Management App</h1>
        <nav>
          <ul>
            <li>
              <Link
                style={{ fontSize: "30px", textDecoration: "none", fontWeight: "bold" }}
                to="/add"
              >
                Add Book
              </Link>
            </li>
            <li style={{ marginTop: "15px" }}>
              <Link
                style={{ fontSize: "30px", textDecoration: "none", fontWeight: "bold" }}
                to="/"
              >
                View Books
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<BookList books={books} onDelete={handleDeleteBook} />}
          />
          <Route path="/book/:id" element={<BookDetails books={books} />} />
          <Route
            path="/add"
            element={<BookForm onSubmit={handleAddBook} books={books} />} 
          />
          <Route
            path="/edit/:id"
            element={<BookForm onSubmit={handleUpdateBook} editMode={true} books={books} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



