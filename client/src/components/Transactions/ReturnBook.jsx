import React, { useContext, useState } from "react";
import "./ReturnBook.css";
import createTransactionContext from "../../context/transactions/createTransactionContext";

const ReturnBook = () => {

  const {returnBookAPI} = useContext(createTransactionContext);

  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSerialNoChange = (event) => {
    setSerialNo(event.target.value);
  };

  const handleIssueDateChange = (event) => {
    setIssueDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const handleCancel = (e) =>{
    setBookName('');
    setAuthor('');
    setSerialNo('');
    setIssueDate('');
    setReturnDate('');
    setRemarks('');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await returnBookAPI(serialNo, bookName, author, issueDate, returnDate, remarks);
    console.log(result);
    if(!result.success)
    {
      alert("Invalid....");
      return;
    }
    else{
      alert("book returned successfull");
    }
  };

  return (
    <form className="return-book-form" onSubmit={handleSubmit}>
      <h2>Return Book</h2>
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
      <div className="input-container">
        <label htmlFor="issue-date">Issue Date:</label>
        <input type="date" id="issue-date" value={issueDate} onChange={handleIssueDateChange} />
      </div>
      <div className="input-container">
        <label htmlFor="return-date">Return Date:</label>
        <input type="date" id="return-date" value={returnDate} onChange={handleReturnDateChange} />
      </div>
      <div className="input-container">
        <label htmlFor="remarks">Remarks:</label>
        <input type="text" id="remarks" value={remarks} onChange={handleRemarksChange} />
      </div>
      <div className="button-container">
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className="confirm-button">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default ReturnBook;
