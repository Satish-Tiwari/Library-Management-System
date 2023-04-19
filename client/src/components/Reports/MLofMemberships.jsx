import React from 'react';
import './MLofMemberships.css'

const data = [
  {
    membershipId: 1001,
    memberName: "John Doe",
    contactNumber: "1234567890",
    contactAddress: "123 Main St, Anytown USA",
    aadharCardNo: "1234 5678 9012",
    startDate: "2022-01-01",
    endDate: "2022-06-30",
    status: "Active",
    amountPending: 0,
  },
  {
    membershipId: 1002,
    memberName: "Jane Doe",
    contactNumber: "0987654321",
    contactAddress: "456 Park Ave, Anytown USA",
    aadharCardNo: "0987 6543 2109",
    startDate: "2022-03-15",
    endDate: "2022-09-14",
    status: "Active",
    amountPending: 5.99,
  },
  {
    membershipId: 1003,
    memberName: "Bob Smith",
    contactNumber: "5551234567",
    contactAddress: "789 Elm St, Anytown USA",
    aadharCardNo: "1111 2222 3333",
    startDate: "2022-05-20",
    endDate: "2022-11-19",
    status: "Inactive",
    amountPending: 20.99,
  },
];


export default function MLofMemberships() {
  const memberData = data;
  const renderTableData = ()=>{
    return memberData.map((member,index)=>{
      const {
        membershipId,
        memberName,
        contactNumber,
        contactAddress,
        aadharCardNo,
        startDate,
        endDate,
        status,
        amountPending,
      } = member;
      return(
        <tr key={membershipId}>
          <td>{membershipId}</td>
          <td>{memberName}</td>
          <td>{contactNumber}</td>
          <td>{contactAddress}</td>
          <td>{aadharCardNo}</td>
          <td>{startDate}</td>
          <td>{endDate}</td>
          <td>{status}</td>
          <td>{amountPending}</td>
        </tr>
      );
    });
  }

  return (
    <>
      <div className="table-container">
        <h1 className="table-title">List of Active Memberships</h1>
        <table className="membership-table">
          <thead>
            <tr>
              <th>Membership Id</th>
              <th>Name of Member</th>
              <th>Contact Number</th>
              <th>Contact Address</th>
              <th>Aadhar Card No</th>
              <th>Start Date of Membership</th>
              <th>End Date of Membership</th>
              <th>Status</th>
              <th>Amount Pending (Fine)</th>
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