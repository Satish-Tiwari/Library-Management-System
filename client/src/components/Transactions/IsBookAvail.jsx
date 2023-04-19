import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './IsBookAvail.css';


const IsBookAvail = () => {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [serialNo, setSerialNo] = useState("");
  
  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSerialNoChange = (event) => {
    setSerialNo(event.target.value);
  };

  
  const handleCancel = (e) =>{
    setBookName('');
    setAuthor('');
    setSerialNo('');
   }

  const handleSubmit = (event) => {
    event.preventDefault();
      console.log(bookName, author, serialNo);
  };

  return (
    <form className="book-availability-form" onSubmit={handleSubmit}>
      <h2>Book Availability</h2>
      <div className="input-container">
        <label htmlFor="book-name">Enter BookName:</label>
        <input type="text" id="book-name" value={bookName} onChange={handleBookNameChange} />
      </div>
      <div className="input-container">
        <label htmlFor="author">Enter Author:</label>
        <input type="text" id="author" value={author} onChange={handleAuthorChange} />
      </div>
      <div className="input-container">
        <label htmlFor="serial-no">Serial No:</label>
        <input type="text" id="serial-no" value={serialNo} onChange={handleSerialNoChange} />
      </div>
      
      <div className="button-container">
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="search-button-isbook"><Link to='/TransactionsHome/AvailBooksInfo'>Search</Link></button>
      </div>
    </form>
  );
};

export default IsBookAvail;
