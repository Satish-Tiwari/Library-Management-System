import React from 'react';
import './ActiveIssues.css'

const data = [
  {
    serialNo: 1,
    name: "To Kill a Mockingbird",
    membershipId: "M001",
    issueDate: "2022-01-05",
    returnDate: "2022-01-20",
  },
  {
    serialNo: 2,
    name: "1984",
    membershipId: "M002",
    issueDate: "2022-02-15",
    returnDate: "2022-03-02",
  },
  {
    serialNo: 3,
    name: "The Great Gatsby",
    membershipId: "M003",
    issueDate: "2022-03-20",
    returnDate: "2022-04-05",
  },
  {
    serialNo: 4,
    name: "Pride and Prejudice",
    membershipId: "M004",
    issueDate: "2022-04-30",
    returnDate: "2022-05-15",
  },
];

export default function ActiveIssues() {
  const issuesData = data;
  const renderTableData = ()=>{
    return issuesData.map((movie,index)=>{
      const {
        serialNo,
        name,
        membershipId,
        issueDate,
        returnDate
      } = movie;
      return(
        <tr key={serialNo}>
          <td>{serialNo}</td>
          <td>{name}</td>
          <td>{membershipId}</td>
          <td>{issueDate}</td>
          <td>{returnDate}</td>
        </tr>
      );
    });
  }

  return (
    <>
      <div className="table-container">
        <h1 className="table-title">Active Issues</h1>
        <table className="issues-table">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name of Book/Movie</th>
              <th>Membership Id</th>
              <th>Date of Issue</th>
              <th>Date of return</th>
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
