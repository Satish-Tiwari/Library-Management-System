import React from 'react'
import './PendingIssueRequests.css'

const Data = [
  {
    membershipId: "M001",
    bookName: "To Kill a Mockingbird",
    requestedDate: "2022-01-01",
    requestFulfilledDate: "2022-01-05"
  },
  {
    membershipId: "M002",
    bookName: "1984",
    requestedDate: "2022-02-10",
    requestFulfilledDate: "2022-02-12"
  },
  {
    membershipId: "M003",
    bookName: "The Great Gatsby",
    requestedDate: "2022-03-15",
    requestFulfilledDate: "2022-03-20"
  },
  {
    membershipId: "M004",
    bookName: "Pride and Prejudice",
    requestedDate: "2022-04-25",
    requestFulfilledDate: "2022-05-01"
  }
];


export default function PendingIssueRequests() {
  const renderTableData = () => {
    return Data.map((requests, index) => {
      const {
        membershipId,
        bookName,
        requestedDate,
        requestFulfilledDate
      } = requests;

      return (
        <tr>
          <td>{membershipId}</td>
          <td>{bookName}</td>
          <td>{requestedDate}</td>
          <td>{requestFulfilledDate}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="table-container">
        <h1 className="table-title">Issue Requests</h1>
        <table className="issue-table">
          <thead>
            <tr>
              <td>Membership Id</td>
              <td>Name of Book/Movie</td>
              <td>Requested Date</td>
              <td>Request Fulfilled Date</td>
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