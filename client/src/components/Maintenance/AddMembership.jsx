import React, { useContext, useState } from 'react';
import './AddMembership.css';
import createMaintenanceContext from '../../context/maintenance/createMaintenanceContext';

export default function AddMembership() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactAddress, setContactAddress] = useState('');
  const [aadharCard, setAadharCard] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [membership, setMembership] = useState('');
  const [membershipNo, setMembershipNo] = useState('');

  const {addMembership} = useContext(createMaintenanceContext);

  const handleCancel = (e)=>{
    setFirstName('');
    setLastName('');
    setContactNumber('');
    setContactAddress('');
    setAadharCard('');
    setStartDate('');
    setEndDate('');
    setMembership('');
    setMembershipNo('');
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addMembership(firstName,lastName,contactNumber,contactAddress,aadharCard,
      startDate,endDate,membership,membershipNo);
    if(!result.success)
    {
      alert("Invalid...");
      return;
    }
    else{
      alert("membership added successfull");
    }
  };

  return (
    <div className="add-membership-container">
      <form onSubmit={handleSubmit}>
        <h2>ADD MEMBERSHIP</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactAddress">Contact Address:</label>
          <input
            type="text"
            id="contactAddress"
            value={contactAddress}
            onChange={(e) => setContactAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadharCard">Aadhar Card No:</label>
          <input
            type="text"
            id="aadharCard"
            value={aadharCard}
            onChange={(e) => setAadharCard(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="serialNo">Membership No:</label>
          <input
            type="text"
            id="membershipNo"
            value={membershipNo}
            onChange={(e) => setMembershipNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Membership:</label>
          <div className="membership-radio">
            <div>
              <label htmlFor="sixMonths">Six Months</label>
              <input
                type="radio"
                id="sixMonths"
                name="membership"
                value="Six Months"
                checked={membership === 'Six Months'}
                onChange={(e) => setMembership(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="oneYear">One Year</label>
              <input
                type="radio"
                id="oneYear"
                name="membership"
                value="One Year"
                checked={membership === 'One Year'}
                onChange={(e) => setMembership(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="twoYears">Two Years</label>
              <input
                type="radio"
                id="twoYears"
                name="membership"
                value="Two Years"
                checked={membership === 'Two Years'}
                onChange={(e) => setMembership(e.target.value)}
              />
            </div>
          </div>
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



