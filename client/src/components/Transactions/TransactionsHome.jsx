import React, { useState } from 'react';
import './TransactionsHome.css';
import IsBookAvail from './IsBookAvail';
import IssueBook from './IssueBook';
import ReturnBook from './ReturnBook';
import PayFine from './PayFine';

function TransactionsHome() {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { label: 'Is Book Available', content: <IsBookAvail /> },
    { label: 'Issue Book', content: <IssueBook /> },
    { label: 'Return Book', content: <ReturnBook /> },
    { label: 'Pay Fine', content: <PayFine /> },
  ];

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="heading">
        <h5>AVAILABLE TRANSACTIONS</h5>
      </div>
      <div className="container-tran-home">
        <div className="navbar-tran-home">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={activeButton === index ? 'active' : ''}
              onClick={() => handleButtonClick(index)}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="content-tran-home">
          {activeButton !== null && buttons[activeButton].content}
        </div>
      </div>
    </>
  );
}

export default TransactionsHome;
