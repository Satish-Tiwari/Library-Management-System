import React, { useState, useContext } from 'react';
import './PayFine.css';
import createTransactionContext from '../../context/transactions/createTransactionContext';

function PayFine() {

  const {payFine} = useContext(createTransactionContext);

  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [serialNo, setSerialNo] = useState('');
  // const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  // const [actualReturnDate, setActualReturnDate] = useState('');
  const [fineCalculated, setFineCalculated] = useState(0);
  const [finePaid, setFinePaid] = useState(false);
  const [remarks, setRemarks] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await payFine(serialNo, bookName, author, returnDate,fineCalculated, finePaid, remarks);
    console.log(result);
  if(!result.success)
  {
    alert("Invalid....");
    return;
  }
  else{
    alert("Fine paid successfull");
  }
  }

  const handleCancel = () => {
    setBookName('');
    setAuthor('');
    setSerialNo('');
    // setIssueDate('');
    setReturnDate('');
    // setActualReturnDate('');
    setFineCalculated('');
    setFinePaid('');
    setRemarks('');
  }

  return (
    <div className="form-container">
      <h2>Pay Fine Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter Book Name</label>
          <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Enter Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Serial No</label>
          <input type="text" value={serialNo} onChange={(e) => setSerialNo(e.target.value)} required />
        </div>
        {/* <div className="form-group">
          <label>Issue Date</label>
          <input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} required />
        </div> */}
        <div className="form-group">
          <label>Return Date</label>
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
        </div>
        {/* <div className="form-group">
          <label>Actual Return Date</label>
          <input type="date" value={actualReturnDate} onChange={(e) => setActualReturnDate(e.target.value)} required />
        </div> */}
        <div className="form-group">
          <label>Fine Calculated</label>
          <input type="number" value={fineCalculated} onChange={(e) => setFineCalculated(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Fine Paid</label>
          <input type="checkbox" checked={finePaid} onChange={(e) => setFinePaid(e.target.checked)} />
        </div>
        <div className="form-group">
          <label>Remarks</label>
          <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} />
        </div>
        <div className="form-actions">
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
}

export default PayFine;
