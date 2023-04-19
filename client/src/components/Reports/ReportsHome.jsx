import React,{useState} from 'react';
import MLofBooks from './MLofBooks';
import MLofMovies from './MLofMovies';
import MLofMemberships from './MLofMemberships';
import ActiveIssues from './ActiveIssues';
import OverdueReturns from './OverdueReturns';
import PendingIssueRequests from './PendingIssueRequests';
import './ReportsHome.css';


export default function ReportsHome() {
    const [activeButton, setActiveButton] = useState(null);

    const buttons = [
        { label: 'Master List of Books', content: <MLofBooks/> },
        { label: 'Master List of Movies', content: <MLofMovies /> },
        { label: 'Master List of Memberships', content: <MLofMemberships /> },
        { label: 'Active Issues', content: <ActiveIssues/> },
        { label: 'Overdue Returns', content: <OverdueReturns /> },
        { label: 'Pending Issue Requests', content: <PendingIssueRequests /> },
    ];

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <>
            <div className="heading">
                <h5>AVAILABLE REPORTS</h5>
            </div>
            <div className="container-reports-home">
                <div className="navbar-reports-home">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={`${activeButton === index ? 'active' : ''} btn_btn_reports`}
                            onClick={() => handleButtonClick(index)}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
                <div className="content-reports-home">
                    {activeButton !== null && buttons[activeButton].content}
                </div>
            </div>
        </>
    );
}
