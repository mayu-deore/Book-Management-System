import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookForm = ({ onSubmit, editMode, books }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [publisher, setPublisher] = useState('');
  const [overview, setOverview] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (editMode) {
      const bookToEdit = books.find((book) => book.id === parseInt(id));

      if (bookToEdit) {
        setTitle(bookToEdit.title);
        setAuthor(bookToEdit.author);
        setPublishDate(bookToEdit.publishDate);
        setPublisher(bookToEdit.publisher);
        setOverview(bookToEdit.overview);
      }
    }
  }, [editMode, id, books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      title,
      author,
      publishDate,
      publisher,
      overview,
      id: parseInt(id),
    };
    onSubmit(updatedBook);
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Publish Date:</label>
          <input type="date" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} />
        </div>
        <div>
          <label>Publisher:</label>
          <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
        </div>
        <div>
          <label>Overview:</label>
          <textarea value={overview} onChange={(e) => setOverview(e.target.value)} />
        </div>
        <button type="submit">{editMode ? 'Update Book' : 'Add Book'}</button>
      </form>
    </div>
  );
};

export default BookForm;

