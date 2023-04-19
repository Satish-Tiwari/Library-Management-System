import React, { useContext, useState } from 'react';
import './UpdateMembership.css';
import createMaintenanceContext from '../../context/maintenance/createMaintenanceContext';

export default function UpdateMembership() {
  const [membershipNumber, setmembershipNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [membership, setMembership] = useState('');
  const [membershipRemove,setmembershipRemove] = useState(false);

  const {updateMembership} = useContext(createMaintenanceContext);

  const handleCancel = (e)=>{
    setmembershipNumber('');
    setStartDate('');
    setEndDate('');
    setMembership('');
    setmembershipRemove('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateMembership(membershipNumber,startDate,endDate,
      membership, membershipRemove);
      console.log(result);
    if(!result.success)
    {
      alert("Invalid....");
      return;
    }
    else{
      alert("Membership updated successfull");
    }
  };

  return (
    <div className="membership-container">
      <form onSubmit={handleSubmit}>
        <h2>UPDATE MEMBERSHIP</h2>
        <div className="form-group">
          <label htmlFor="membershipnumber">Membership Number:</label>
          <input
            type="number"
            id="membershipnumber"
            value={membershipNumber}
            onChange={(e) => setmembershipNumber(e.target.value)}
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
          <label>Membership Extn:</label>
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
        <div className="form-group">
          <label htmlFor="checkbox">Membership Remove</label>
          <input 
          type="checkbox" 
          id='checkbox'
          value={membershipRemove}
          onChange={(e)=>setmembershipRemove(e.target.value)}
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