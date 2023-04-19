import React, { useContext } from 'react';
import './MLofMovies.css'

import createReportsContext from '../../context/reports/createReportsContext';


export default function MLofMovies() {
  const {mlOfMovies, movie, movieLoading} = useContext(createReportsContext);
  const movieData = movie;
  const renderTableData = ()=>{
    return movieData.map((movie,index)=>{
      const {
        serialNo,
        bookMovieName,
        authorName,
        category,
        status,
        cost,
        procurementDate
      } = movie;
      return(
        <tr key={serialNo}>
          <td>{index+1}</td>
          <td>{serialNo}</td>
          <td>{bookMovieName}</td>
          <td>{authorName}</td>
          <td>{category}</td>
          <td>{status}</td>
          <td>{cost}</td>
          <td>{procurementDate}</td>
        </tr>
      );
    });
  }

  return (
    <>
      <div className="table-container">
        <h1 className="table-title">Master List of Movies</h1>
        <table className="movie-table">
          <thead>
            <tr>
              <th>Ind No</th>
              <th>Serial No</th>
              <th>Name of Movie</th>
              <th>Author Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Procurement Date</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
        <button className="back-button" onClick={()=>window.history.back()}>
          Back
        </button>
      </div>
    </>
  )
}