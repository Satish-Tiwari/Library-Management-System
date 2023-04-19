import React from 'react';
import './OverdueReturns.css';

const Data = [
  {
    serialNo: 1,
    bookName: "To Kill a Mockingbird",
    membershipId: "M001",
    dateOfIssue: "2022-01-01",
    dateOfReturn: "2022-02-01",
    fineCalculations: 0
  },
  {
    serialNo: 2,
    bookName: "1984",
    membershipId: "M002",
    dateOfIssue: "2022-02-15",
    dateOfReturn: "2022-03-15",
    fineCalculations: 10.99
  },
  {
    serialNo: 3,
    bookName: "The Great Gatsby",
    membershipId: "M003",
    dateOfIssue: "2022-03-20",
    dateOfReturn: "2022-04-20",
    fineCalculations: 0
  },
  {
    serialNo: 4,
    bookName: "Pride and Prejudice",
    membershipId: "M004",
    dateOfIssue: "2022-04-30",
    dateOfReturn: "2022-05-30",
    fineCalculations: 0
  }
];

export default function OverdueReturns() {
  const renderTableData = () => {
    return Data.map((overdue, index) => {
      const {
        serialNo,
        bookName,
        membershipId,
        dateOfIssue,
        dateOfReturn,
        fineCalculations
      } = overdue;

      return (
        <tr key={serialNo}>
          <td>{serialNo}</td>
          <td>{bookName}</td>
          <td>{membershipId}</td>
          <td>{dateOfIssue}</td>
          <td>{dateOfReturn}</td>
          <td>{fineCalculations}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="table-container">
        <h1 className="table-title">Overdue Returns</h1>
        <table className="overdue-table">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name of Book</th>
              <th>Membership Id</th>
              <th>Date of Issue</th>
              <th>Date of Return</th>
              <th>Fine Calculations</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
        <button className="back-button" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
    </>
  );
}
