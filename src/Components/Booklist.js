import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publish Date</th>
            <th>Publisher</th>
            <th>Delet</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishDate}</td>
              <td>{book.publisher}</td>
              <td>
                <button  style = {{width:"60px"}}   onClick={() => onDelete(book.id)}>Delete</button>
              </td>
              <td>
              <button style = {{width:"60px"}} > <Link to={`/edit/${book.id}`}>Edit</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
