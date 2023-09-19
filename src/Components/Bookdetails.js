import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <div>Book not found</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Publish Date: {book.publishDate}</p>
      <p>Publisher: {book.publisher}</p>
      <p>Overview: {book.overview}</p>
    </div>
  );
};

export default BookDetails;

