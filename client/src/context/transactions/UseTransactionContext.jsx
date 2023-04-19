import React from "react";
import createTransactionContext from "./createTransactionContext";

function UseTransactionContext(props) {

    const url = 'http://localhost:5000';

    // ----------------------------------------------Transactions----------------------------------------------------
    
    //issue book
    const issueBook = async (serialNo, bookName, author, issueDate, remarks) => {
        const add = await fetch(`${url}/issueBook`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'userToken': localStorage.getItem("token")
            },
            body: JSON.stringify({
                "serialNo": serialNo,
                "bookName": bookName,
                "authorName": author,
                "issueDate": issueDate,
                "remarks": remarks
            })
        })

        const json = await add.json();
        console.log("hello issue book transaction ....");
        return json;
    }

    //return book
    const returnBookAPI = async (serialNo, bookName, author, issueDate, returnDate, remarks) => {
        const add = await fetch(`${url}/returnBook`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'userToken': localStorage.getItem("token")
            },
            body: JSON.stringify({
                "serialNo": serialNo,
                "bookName": bookName,
                "authorName": author,
                "issueDate": issueDate,
                "returnDate": returnDate,
                "remarks": remarks
            })
        })

        const json = await add.json();
        console.log("hello return book transaction ....");
        return json;
    }

    //pay fine
    const payFine = async (serialNo, bookName, author, returnDate, fineCalculated, finePaid, remarks) => {
        const add = await fetch(`${url}/payFine`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'userToken': localStorage.getItem("token")
            },
            body: JSON.stringify({
                "serialNo": serialNo,
                "bookName": bookName,
                "authorName": author,
                "returnDate": returnDate,
                "fineCalculated": fineCalculated,
                "finePaid": finePaid,
                "remarks": remarks
            })
        })

        const json = await add.json();
        console.log("hello fine pay transacion ....");
        return json;
    }
    return (
        <createTransactionContext.Provider
            value={
                {
                    issueBook,
                    returnBookAPI,
                    payFine
                }
            }
        >
            {props.children}
        </createTransactionContext.Provider>
    )
}

export default UseTransactionContext;