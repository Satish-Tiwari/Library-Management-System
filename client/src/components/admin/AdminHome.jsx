import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHome.css';

export default function AdminHome() {
  return (
    <>
      <div className="headingword">
        <h5>ADMIN HOME PAGE</h5>
      </div>
      <div className="admin-home">
        <div className="buttons-container">
          <button className="maintenance-button"><Link to='/MaintenanceHome'>MAINTENANCE</Link></button>
          <button className="reports-button"><Link to='/ReportsHome'>REPORTS</Link></button>
          <button className="transactions-button"><Link to='/TransactionHome'>TRANSACTIONS</Link></button>
        </div>
        <div className="table-container-admin-home">
          <table>
            <thead>
              <tr>
                <th>Sr no.</th>
                <th>Code No From</th>
                <th>Code No To</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>SC(B/M)000001</td>
                <td>SC(B/M)000004</td>
                <td>Science</td>
              </tr>
              <tr>
                <td>2</td>
                <td>EC(B/M)000001</td>
                <td>EC(B/M)000004</td>
                <td>Economics</td>
              </tr>
              <tr>
                <td>3</td>
                <td>FC(B/M)000001</td>
                <td>FC(B/M)000004</td>
                <td>Fiction</td>
              </tr>
              <tr>
                <td>4</td>
                <td>CH(B/M)000001</td>
                <td>PD(B/M)000004</td>
                <td>Children</td>
              </tr>
              <tr>
                <td>5</td>
                <td>PD(B/M)000001</td>
                <td>PD(B/M)000004</td>
                <td>Personal Development</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttons-container">
          <button className="logout-button">Logout</button>
        </div>
      </div>
    </>
  );
}