import React, { useContext, useState } from 'react';
import './AddBookMovie.css';
import createMaintenanceContext from '../../context/maintenance/createMaintenanceContext';

export default function AddBookMovie() {
  const [bookmovie, setbookmovie] = useState('');
  const [bmName, setBmName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [category, setCategory] = useState('');
  const [status,setStatus] = useState('');
  const [cost,setCost] = useState('');
  const [procurementDate, setProcurementDate] = useState('');
  const [quanCop, setQuanCop] = useState(1);

  const {addBookMovie} = useContext(createMaintenanceContext);

  const handleCancel = (e)=>{
    setbookmovie('');
    setBmName('');
    setAuthorName('');
    setSerialNo('');
    setCategory('');
    setStatus('');
    setCost('');
    setProcurementDate('');
    setQuanCop(1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addBookMovie(bookmovie,bmName,authorName,serialNo,category,
      status,cost,procurementDate,quanCop);
      console.log(result);
    if(!result.success)
    {
      alert("Invalid....");
      return;
    }
    else{
      alert("book/movie added successfull");
    }
  };

  return (
    <div className="add-bookmovie-container">
      <form onSubmit={handleSubmit}>
        <h2>ADD BOOK/MOVIE</h2>
        <div className="form-group">
          <label>Select Book/Movie</label>
          <div className="membership-radio">
            <div>
              <label htmlFor="book">Book</label>
              <input
                type="radio"
                id="book"
                name="bookmovie"
                value="book"
                checked={bookmovie === 'book'}
                onChange={(e) => setbookmovie(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="movie">Movie</label>
              <input
                type="radio"
                id="movie"
                name="bookmovie"
                value="movie"
                checked={bookmovie === 'movie'}
                onChange={(e) => setbookmovie(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="bmName">Book/Movie Name:</label>
          <input
            type="text"
            id="bmName"
            value={bmName}
            onChange={(e) => setBmName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="serialNo">Serial No:</label>
          <input
            type="text"
            id="serialNo"
            value={serialNo}
            onChange={(e) => setSerialNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category :</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bmName">Cost:</label>
          <input
            type="text"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="procurementDate">Date of Procurement:</label>
          <input
            type="date"
            id="procurementDate"
            value={procurementDate}
            onChange={(e) => setProcurementDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quanCop">Quantity/Copies:</label>
          <input 
          type="text"
          id='quanCop'
          value={quanCop}
          onChange={(e)=>{setQuanCop(e.target.value)}} 
          />
        </div>

        <div className="form-buttons">
          <button className="cancel-button" type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="confirm-button" type="submit">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}