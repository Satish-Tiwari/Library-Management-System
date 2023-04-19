import React, { useContext, useState } from 'react';
import './AddUserMgt.css'; // import custom CSS file
import createMaintenanceContext from '../../context/maintenance/createMaintenanceContext';

function AddUserMgt() {
  const [isNewUser, setIsNewUser] = useState(true); // state for radio button
  const [name, setName] = useState(''); // state for name text box
  const [isActive, setIsActive] = useState(false); // state for active checkbox
  const [isAdmin, setIsAdmin] = useState(false); // state for admin checkbox

  const {addUserMgt} = useContext(createMaintenanceContext);
   
  const handleNewUserChange = (event) => {
    setIsNewUser(event.target.value === 'newUser');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleActiveChange = (event) => {
    setIsActive(event.target.checked);
  };

  const handleAdminChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const [userMgtNo, setUserMgtNo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent form from refreshing page
   
    const result = await addUserMgt(isNewUser, name, isActive, isAdmin, userMgtNo);
      console.log(result);
    if(!result.success)
    {
      alert("Invalid....");
      return;
    }
    else{
      alert("User management added successfull");
    }
  };

  const handleCancel = () => {
    setIsNewUser('');
    setName('');
    setIsActive('');
    setIsAdmin('');
    setUserMgtNo('');
  };

  return (
    <div className="user-management-form">
      <form onSubmit={handleSubmit}>
      <h2>User Management</h2>
        <div className="radio-buttons">
          <label>
            <input type="radio" value="newUser" checked={isNewUser} onChange={handleNewUserChange} />
            New User
          </label>
          <label>
            <input type="radio" value="existingUser" checked={!isNewUser} onChange={handleNewUserChange} />
            Existing User
          </label>
        </div>
        <div className="form-fields">
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
         
          <label htmlFor="userMgtNo">User Management No:</label>
          <input
            type="text"
            id="userMgtNo"
            value={userMgtNo}
            onChange={(e) => setUserMgtNo(e.target.value)}
          />
      
          <label>
            <input type="checkbox" checked={isActive} onChange={handleActiveChange} />
            Active
          </label>
          <label>
            <input type="checkbox" checked={isAdmin} onChange={handleAdminChange} />
            Admin
          </label>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
}

export default AddUserMgt;
