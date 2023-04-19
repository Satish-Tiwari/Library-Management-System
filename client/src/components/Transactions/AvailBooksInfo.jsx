import React, { useState } from 'react';
import './AvailBooksInfo.css';

const data = [
  { bookName: 'A', authorName: 'Author Name', serialNumber: 'Serial Number', available: 'Y' },
  { bookName: 'A', authorName: 'Author Name', serialNumber: 'Serial Number', available: 'N' },
  { bookName: 'A', authorName: 'Author Name', serialNumber: 'Serial Number', available: 'Y' },
  { bookName: 'A', authorName: 'Author Name', serialNumber: 'Serial Number', available: 'Y' },
];

const AvailBooksInfo = () => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <div className="table-container11">
      <h2>Book Availability</h2>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Serial Number</th>
            <th>Available</th>
            <th>Select to issue the book</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.bookName}</td>
              <td>{item.authorName}</td>
              <td>{item.serialNumber}</td>
              <td>{item.available}</td>
              <td>
                {item.available === 'Y' && (
                  <input
                    type="checkbox"
                    name="select-book"
                    checked={selected.includes(index)}
                    onChange={() => handleSelect(index)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button>Search</button>
        <button onClick={()=>{window.history.back()}}>Cancel</button>
      </div>
    </div>
  );
};

export default AvailBooksInfo;
