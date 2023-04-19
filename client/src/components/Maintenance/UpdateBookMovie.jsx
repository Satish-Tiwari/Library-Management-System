import React, { useContext, useState } from 'react';
import './UpdateBookMovie.css';
import createMaintenanceContext from '../../context/maintenance/createMaintenanceContext';

export default function UpdateBookMovie() {
  const [bookmovie, setbookmovie] = useState('');
  const [bmName, setBmName] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const {updateBookMovie} = useContext(createMaintenanceContext);

  const handleCancel = (e) =>{
    setbookmovie('');
    setBmName('');
    setSerialNo('');
    setStatus('');
    setDate('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateBookMovie(bookmovie,bmName,serialNo,
      status,date);
      console.log(result);
    if(!result.success)
    {
      alert("Invalid....");
      return;
    }
    else{
      alert("book/movie updated successfull");
    }
  };

  return (
    <div className="update-bookmovie-container">
      <form onSubmit={handleSubmit}>
        <h2>UPDATE BOOK/MOVIE</h2>
        <div className="form-group">
          <label>Select Book/Movie:</label>
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
          <label htmlFor="serialNo">Serial No:</label>
          <input 
          type="text"
          id='serialNo'
          value={serialNo}
          onChange={(e)=>{setSerialNo(e.target.value)}} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="available">Available</option>
            <option value="un-available">Un Available</option>
            <option value="removed">Removed</option>
            <option value="repair">Repair</option>
            <option value="replace">Replace</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-buttons">
          <button className="cancel-button" type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="update-button" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}