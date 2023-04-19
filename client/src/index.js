import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseSomeContext from './context/auth/UseSomeContext';
import UseMaintenanceContext from './context/maintenance/UseMaintenanceContext';
import UseReportsContext from './context/reports/UseReportsContext';
import UseTransactionContext from './context/transactions/UseTransactionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseSomeContext>
      <UseMaintenanceContext>
        <UseReportsContext>
          <UseTransactionContext>
            <App />
          </UseTransactionContext>
        </UseReportsContext>
      </UseMaintenanceContext>
    </UseSomeContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
