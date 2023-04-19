import React,{useState} from 'react';
import AddMembership from './AddMembership';
import UpdateMembership from './UpdateMembership';
import AddBookMovie from './AddBookMovie';
import UpdateBookMovie from './UpdateBookMovie';
import AddUserMgt from './AddUserMgt';
import UpdateUserMgt from './UpdateUserMgt';
import './MaintenanceHome.css';


export default function MaintenanceHome() {
    const [activeButton, setActiveButton] = useState(null);

    const buttons = [
        { label: 'Add Membership', content: <AddMembership/> },
        { label: 'Update Membership', content: <UpdateMembership /> },
        { label: 'Add Book/Movie Name', content: <AddBookMovie /> },
        { label: 'Update Book/Movie Name', content: <UpdateBookMovie/> },
        { label: 'Add User Management', content: <AddUserMgt /> },
        { label: 'Update User Management', content: <UpdateUserMgt /> },
    ];


    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <>
            <div className="heading">
                <h5>House Keeping</h5>
            </div>
            <div className="container-maintenance-home">
                <div className="navbar-maintenance-home">
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
                <div className="content-maintenance-home">
                    {activeButton !== null && buttons[activeButton].content}
                </div>
            </div>
        </>
    );
}